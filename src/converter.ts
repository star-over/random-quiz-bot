import path from "path";
import { readFile, writeFile, readdir, stat } from "fs/promises";
import { Remarkable } from "remarkable";
import { JSDOM } from "jsdom";
import Prism from "prismjs";
import loadLanguages from "prismjs/components/";

// regex to separate MD to topics
// load text from github
// s = await (await fetch('https://url')).text()
// md.match(/^####[\w\W]*?(?=####|$(?![\w\W]))/gm)
// https://regex101.com/r/MmjPRM/4
// https://stackoverflow.com/q/75109341/87713

const CurrentOptions: { [key: string]: string } = {
  sourcePath: "../quizess/raw-md",
  destinationPath: "../quizess/json",
  sourceExt: ".md",
  destinationExt: ".json",
};

// convertFiles();
convertFile("javascript-quiz.md", CurrentOptions).then().catch(Error);

async function convertFile(file: string, options: { [key: string]: string }) {
  const sourceFilePath = path.join(__dirname, options.sourcePath, file);
  const destinationFileName = `${path.parse(file).name}${options.destinationExt}`;
  const sourceFileData = await readFile(sourceFilePath, {
    encoding: "utf8",
  });
  const topic = parseTopicName(sourceFileData);
  const questions = parseQuestions(sourceFileData);
  const filteredQuestions = questions.filter((raw) => isRawCorrect(raw));
  const objects = mdToObjects(filteredQuestions, topic);
  const json = JSON.stringify(objects, null, " ");
  const destinationFilePath = path.join(__dirname, options.destinationPath, destinationFileName);
  await writeFile(destinationFilePath, json);
  console.log(" >>>>>:", destinationFilePath);
}

async function convertFiles() {
  // get directory file list
  const sourcesPath = path.join(__dirname, CurrentOptions.sourcePath);
  const dirContent = await readdir(sourcesPath);
  const dirStats = dirContent.map((name) => stat(path.join(sourcesPath, name)));
  const stats = await Promise.all(dirStats);
  const files = dirContent.filter((file, i) => {
    const isFileMd = path.parse(file).ext.toLowerCase() === CurrentOptions.sourceExt;
    return stats[i].isFile() && isFileMd;
  });

  Promise.all(files.map((file) => convertFile(file, CurrentOptions)));
  // files.forEach((file) => convertFile(file, CurrentOptions));
}

function parseTopicName(fileData: string) {
  const matches = fileData.match(/^## [.*]?(.*)/mg);
  if (!matches || matches.length === 0) {
    throw new Error("No Topic Name found");
  }

  const topic = matches.at(0)?.replace("## ", "");
  return topic ?? "";
}

function parseQuestions(fileData: string) {
  // get data start with #### to next ####
  const questions = fileData.match(/^####[\w\W]*?(?=####|$(?![\w\W]))/gm);
  if (!questions || questions.length === 0) {
    throw new Error("No questions found");
  }

  return Array.from(questions);
}

function getLanguage(el: HTMLElement) {
  const mapping: { [key: string]: string; } = {
    js: "JavaScript",
    javascript: "JavaScript",
    ts: "TypeScript",
    typescript: "TypeScript",
    css: "CSS",
  };
  const code = el.querySelector("code");
  const matches = code?.className?.match(/language-(\w+)/);
  if (matches?.length && matches?.length >= 1) {
    const language = matches[1];
    return mapping[language] ?? language;
  }
  return "";
}

function isRawCorrect(raw: string) {
  const conditions = [
    {
      r: /#{4}/g, result: true,
    },
    {
      r: /- \[ ] /g, result: true,
    },
    {
      r: /- \[x] /gi, result: true,
    },
    {
      r: /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g, result: false,
    },
  ];

  return conditions.every(({ r, result }) => r.test(raw) === result);
}

function makeVariants(variantsEl: Element[]) {
  const correctVariant = /^\[\w\]/;

  return variantsEl.map((el) => {
    const isCorrect = correctVariant.test(el.textContent ?? "");
    const nextParentSibling = el?.parentElement?.nextElementSibling;
    const nextSibling = el?.nextElementSibling;

    if (nextParentSibling?.tagName === "PRE" && !nextSibling) {
      el.append(el.ownerDocument.createElement("br"), nextParentSibling);
    }
    const redusedEl = el;
    redusedEl.innerHTML = el.innerHTML.substring(4);
    const html = redusedEl.innerHTML;
    const text = redusedEl.textContent;
    return {
      isCorrect, html, text,
    };
  });
}

function prismHighlight(str: string, lang: string) {
  if (lang && Prism.languages[lang]) {
    try {
      const res = Prism.highlight(str, Prism.languages[lang], lang);
      // console.log("🚀 > prismHighlight >", { res });
      return res;
    } catch (error) { console.error((error as Error).message); }
  }

  if (lang) {
    try {
      loadLanguages(lang);
      return Prism.highlight(str, Prism.languages[lang], lang);
    } catch (error) { console.error((error as Error).message); }
  }

  return ""; // use external default escaping
}

function mdToObjects(raws: string[], topic: string) {
  const md = new Remarkable({
    highlight: prismHighlight,
  });

  return raws.map((raw) => {
    const rawHtml = md.render(raw);
    const { document: doc } = (new JSDOM(rawHtml)).window;

    // question
    const questionEl = doc.querySelector("h4");
    const question = {
      html: questionEl?.outerHTML,
      text: questionEl?.textContent,
    };
    const result = {
      topic,
      raw,
      hasCode: Boolean(doc.querySelector("code")),
      question,
    };

    // preformated
    const preEl = doc.querySelector("pre");
    if (preEl) {
      const preformated = {
        language: getLanguage(preEl),
        html: preEl.outerHTML,
        text: preEl.textContent,
      };
      Object.assign(result, {
        preformated,
      });
    }

    // variants
    const ulEl = [...(doc.querySelectorAll("ul>li") ?? [])];
    const variants = makeVariants(ulEl);
    Object.assign(result, {
      variants,
    });

    // reference
    const referenceEl = doc.querySelector("a");
    const reference = {
      html: referenceEl?.outerHTML,
      text: referenceEl?.textContent,
    };
    if (reference.html) {
      Object.assign(result, {
        reference,
      });
    }

    return result;
  });
}
