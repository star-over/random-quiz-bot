import * as path from "path";
import * as dotenv from "dotenv";
import Mustache from "mustache";
import puppeteer from "puppeteer";
import { Bot, InputFile } from "grammy";
import { readFile } from "node:fs/promises";
import { javascript } from "./quizzes/javascript-quiz";
import { puppeteerLaunchOptions } from "./puppeteerLaunchOptions";
import { QuizVariant, Quiz } from "./Quizzes";

const config = dotenv.config();
if (config.error) {
  throw config.error;
}

const quizzes = javascript;
const BOT_NAME = config?.parsed?.BOT_NAME as string;
const BOT_DESCRIPTION = config?.parsed?.BOT_DESCRIPTION as string;
const BOT_TOKEN = config?.parsed?.BOT_TOKEN as string;
const bot = new Bot(BOT_TOKEN);
const proxies = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H."];

function getQuiz(index: number) {
  const question = quizzes[index];
  const variantsWithProxies: QuizVariant[] = question.variants
    .map((variant, i) => ({ ...variant, proxy: proxies[i] }));

  return { ...question, id: index, variants: variantsWithProxies };
}

async function makeQuestionPicture(quiz: Quiz) {
  const template = await readFile(path.join(__dirname, "./templates/code.template.html"), { encoding: "utf8" });
  const html = Mustache.render(template, { BOT_NAME, BOT_DESCRIPTION, ...quiz });

  try {
    const browser = await puppeteer.launch(puppeteerLaunchOptions);
    const page = await browser.newPage();
    await page.setViewport({ width: 650, height: 50, deviceScaleFactor: 3 });
    await page.setContent(html);

    await page.addStyleTag({ path: "./prism/prism.css" }); // main styles and plugins
    await page.addStyleTag({ path: "./prism/prism-dracula.css" }); // theme
    await page.addScriptTag({ path: "./prism/prism.js" }); // prismjs main code
    await page.addScriptTag({ path: "./prism/tailwind.js" }); // tailwind
    await page.addScriptTag({ path: "./prism/tailwind.config.js" }); // tailwind

    const rootEl = await page.$("#root");
    if (!rootEl) {
      throw new Error("element not found");
    }

    const imageBuffer = await rootEl.screenshot();
    await browser.close();
    return imageBuffer;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

bot.command("start", async (ctx) => {
  await ctx.reply("random question is running");
});

bot.command("get", async (ctx) => {
  await ctx.reply(ctx.match);
});

bot.on("message", async (ctx) => {
  const quizzesSize = quizzes.length;
  const messageText = ctx.message.text;
  const messageIndex = Number(messageText);
  const desiredIndex = (messageIndex && messageIndex <= quizzesSize)
    ? messageIndex
    : Math.floor(Math.random() * quizzesSize);

  // const desiredIndex = 81;
  const quiz = getQuiz(desiredIndex);
  const { question: { text }, variants, reference } = quiz;
  const options = variants.map(({ proxy }) => proxy ?? "");

  const picture = await makeQuestionPicture(quiz) as Buffer;
  const pictureMessageResponse = await ctx.replyWithPhoto(new InputFile(picture));

  const other = {
    type: "quiz",
    correct_option_id: variants.findIndex(({ isCorrect }) => isCorrect),
    explanation: reference?.html,
    explanation_parse_mode: "HTML",
    reply_to_message_id: pictureMessageResponse.message_id,
  } as const;

  await ctx.replyWithPoll(text, options, other);
});

bot.start().then().catch(Error);
