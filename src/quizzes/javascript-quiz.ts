// eslint-disable-next-line import/extensions
import { Quiz } from "../Quizzes";

export const javascript: Quiz[] = [
  {
    topic: "JavaScript",
    raw: "#### Q1. Which operator returns true if the two compared values are not equal?\n\n- [ ] `<>`\n- [ ] `~`\n- [ ] `==!`\n- [x] `!==`\n\n[Reference Javascript Comparison Operators](https://www.w3schools.com/js/js_operators.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q1. Which operator returns true if the two compared values are not equal?</h4>",
      text: "Q1. Which operator returns true if the two compared values are not equal?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>&lt;&gt;</code>",
        text: "<>",
      },
      {
        isCorrect: false,
        html: "<code>~</code>",
        text: "~",
      },
      {
        isCorrect: false,
        html: "<code>==!</code>",
        text: "==!",
      },
      {
        isCorrect: true,
        html: "<code>!==</code>",
        text: "!==",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_operators.asp\">Reference Javascript Comparison Operators</a>",
      text: "Reference Javascript Comparison Operators",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q2. How is a forEach statement different from a for statement?\n\n- [ ] Only a for statement uses a callback function.\n- [x] A for statement is generic, but a forEach statement can be used only with an array.\n- [ ] Only a forEach statement lets you specify your own iterator.\n- [ ] A forEach statement is generic, but a for statement can be used only with an array.\n\n[Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q2. How is a forEach statement different from a for statement?</h4>",
      text: "Q2. How is a forEach statement different from a for statement?",
    },
    variants: [
      {
        isCorrect: false,
        html: "Only a for statement uses a callback function.",
        text: "Only a for statement uses a callback function.",
      },
      {
        isCorrect: true,
        html: "A for statement is generic, but a forEach statement can be used only with an array.",
        text: "A for statement is generic, but a forEach statement can be used only with an array.",
      },
      {
        isCorrect: false,
        html: "Only a forEach statement lets you specify your own iterator.",
        text: "Only a forEach statement lets you specify your own iterator.",
      },
      {
        isCorrect: false,
        html: "A forEach statement is generic, but a for statement can be used only with an array.",
        text: "A forEach statement is generic, but a for statement can be used only with an array.",
      },
    ],
    reference: {
      html: "<a href=\"https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/\">Reference Differences between forEach and for loop</a>",
      text: "Reference Differences between forEach and for loop",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q3. Review the code below. Which statement calls the `addTax` function and passes 50 as an argument?\n\n```js\nfunction addTax(total) {\n  return total * 1.05;\n}\n```\n\n- [ ] `addTax = 50;`\n- [ ] `return addTax 50;`\n- [x] `addTax(50);`\n- [ ] `addTax 50;`\n\n[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q3. Review the code below. Which statement calls the <code>addTax</code> function and passes 50 as an argument?</h4>",
      text: "Q3. Review the code below. Which statement calls the addTax function and passes 50 as an argument?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">function</span> <span class=\"token function\">addTax</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">total</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> total <span class=\"token operator\">*</span> <span class=\"token number\">1.05</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      text: "function addTax(total) {\n  return total * 1.05;\n}\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>addTax = 50;</code>",
        text: "addTax = 50;",
      },
      {
        isCorrect: false,
        html: "<code>return addTax 50;</code>",
        text: "return addTax 50;",
      },
      {
        isCorrect: true,
        html: "<code>addTax(50);</code>",
        text: "addTax(50);",
      },
      {
        isCorrect: false,
        html: "<code>addTax 50;</code>",
        text: "addTax 50;",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_functions.asp\">Reference functions in javascript</a>",
      text: "Reference functions in javascript",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q4. Which statement is the correct way to create a variable called rate and assign it the value 100?\n\n- [x] `let rate = 100;`\n- [ ] `let 100 = rate;`\n- [ ] `100 = let rate;`\n- [ ] `rate = 100;`\n\n[Reference Javascript Assignment operators](https://www.w3schools.com/js/js_operators.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q4. Which statement is the correct way to create a variable called rate and assign it the value 100?</h4>",
      text: "Q4. Which statement is the correct way to create a variable called rate and assign it the value 100?",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>let rate = 100;</code>",
        text: "let rate = 100;",
      },
      {
        isCorrect: false,
        html: "<code>let 100 = rate;</code>",
        text: "let 100 = rate;",
      },
      {
        isCorrect: false,
        html: "<code>100 = let rate;</code>",
        text: "100 = let rate;",
      },
      {
        isCorrect: false,
        html: "<code>rate = 100;</code>",
        text: "rate = 100;",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_operators.asp\">Reference Javascript Assignment operators</a>",
      text: "Reference Javascript Assignment operators",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q5. Which statement creates a new object using the Person constructor? Which statement creates a new Person object called \"student\"?\n\n- [x] `var student = new Person();`\n- [ ] `var student = construct Person;`\n- [ ] `var student = Person();`\n- [ ] `var student = construct Person();`\n\n[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q5. Which statement creates a new object using the Person constructor? Which statement creates a new Person object called \"student\"?</h4>",
      text: "Q5. Which statement creates a new object using the Person constructor? Which statement creates a new Person object called \"student\"?",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>var student = new Person();</code>",
        text: "var student = new Person();",
      },
      {
        isCorrect: false,
        html: "<code>var student = construct Person;</code>",
        text: "var student = construct Person;",
      },
      {
        isCorrect: false,
        html: "<code>var student = Person();</code>",
        text: "var student = Person();",
      },
      {
        isCorrect: false,
        html: "<code>var student = construct Person();</code>",
        text: "var student = construct Person();",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q6. When would the final statement in the code shown be logged to the console? When would 'results shown' be logged to the console?\n\n```js\nlet modal = document.querySelector('#result');\nsetTimeout(function () {\n  modal.classList.remove('hidden');\n}, 10000);\nconsole.log('Results shown');\n```\n\n- [ ] after 10 second\n- [ ] after results are received from the HTTP request\n- [ ] after 10000 seconds\n- [x] immediately\n\n[Reference Javascript is synchronous and single threaded](https://stackoverflow.com/a/2035662/15067394)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q6. When would the final statement in the code shown be logged to the console? When would 'results shown' be logged to the console?</h4>",
      text: "Q6. When would the final statement in the code shown be logged to the console? When would 'results shown' be logged to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> modal <span class=\"token operator\">=</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">querySelector</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#result'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  modal<span class=\"token punctuation\">.</span>classList<span class=\"token punctuation\">.</span><span class=\"token function\">remove</span><span class=\"token punctuation\">(</span><span class=\"token string\">'hidden'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">10000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Results shown'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "let modal = document.querySelector('#result');\nsetTimeout(function () {\n  modal.classList.remove('hidden');\n}, 10000);\nconsole.log('Results shown');\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "after 10 second",
        text: "after 10 second",
      },
      {
        isCorrect: false,
        html: "after results are received from the HTTP request",
        text: "after results are received from the HTTP request",
      },
      {
        isCorrect: false,
        html: "after 10000 seconds",
        text: "after 10000 seconds",
      },
      {
        isCorrect: true,
        html: "immediately",
        text: "immediately",
      },
    ],
    reference: {
      html: "<a href=\"https://stackoverflow.com/a/2035662/15067394\">Reference Javascript is synchronous and single threaded</a>",
      text: "Reference Javascript is synchronous and single threaded",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q7. Which snippet could you add to this code to print \"food\" to the console?\n\n```js\nclass Animal {\n  static belly = [];\n  eat() {\n    Animal.belly.push('food');\n  }\n}\nlet a = new Animal();\na.eat();\nconsole.log(/* Snippet Here */); //Prints food\n```\n\n- [ ] `a.prototype.belly[0]`\n- [ ] `Object.getPrototype0f (a).belly[0]`\n- [x] `Animal.belly[0]`\n- [ ] `a.belly[0]`\n\n[Reference Javascript Class static Keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q7. Which snippet could you add to this code to print \"food\" to the console?</h4>",
      text: "Q7. Which snippet could you add to this code to print \"food\" to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">class</span> <span class=\"token class-name\">Animal</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">static</span> belly <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token function\">eat</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    Animal<span class=\"token punctuation\">.</span>belly<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token string\">'food'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token keyword\">let</span> a <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Animal</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\na<span class=\"token punctuation\">.</span><span class=\"token function\">eat</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token comment\">/* Snippet Here */</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">//Prints food</span>\n</code></pre>",
      text: "class Animal {\n  static belly = [];\n  eat() {\n    Animal.belly.push('food');\n  }\n}\nlet a = new Animal();\na.eat();\nconsole.log(/* Snippet Here */); //Prints food\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>a.prototype.belly[0]</code>",
        text: "a.prototype.belly[0]",
      },
      {
        isCorrect: false,
        html: "<code>Object.getPrototype0f (a).belly[0]</code>",
        text: "Object.getPrototype0f (a).belly[0]",
      },
      {
        isCorrect: true,
        html: "<code>Animal.belly[0]</code>",
        text: "Animal.belly[0]",
      },
      {
        isCorrect: false,
        html: "<code>a.belly[0]</code>",
        text: "a.belly[0]",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static\">Reference Javascript Class static Keyword</a>",
      text: "Reference Javascript Class static Keyword",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q8. You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?\n\n- [ ] `A`\n\n```js\nfor (var i = 1; i <= 4; i++) {\n  setTimeout(function () {\n    console.log(i);\n  }, i * 10000);\n}\n```\n\n- [ ] `B`\n\n```js\nfor (var i = 1; i <= 4; i++) {\n  (function (i) {\n    setTimeout(function () {\n      console.log(j);\n    }, j * 1000);\n  })(j);\n}\n```\n\n- [ ] `C`\n\n```js\nfor (var i = 1; i <= 4; i++) {\n  setTimeout(function () {\n    console.log(i);\n  }, i * 1000);\n}\n```\n\n- [x] `D`\n\n```js\nfor (var i = 1; i <= 4; i++) {\n  (function (j) {\n    setTimeout(function () {\n      console.log(j);\n    }, j * 1000);\n  })(i);\n}\n```\n\n- [ ] `E`\n\n```js\nfor (var j = 1; j <= 4; j++) {\n  setTimeout(function () {\n    console.log(j);\n  }, j * 1000);\n}\n```\n\n1. [Reference setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)\n2. [Reference immediately invoked anonymous functions](https://www.javascripttutorial.net/javascript-anonymous-functions/)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q8. You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?</h4>",
      text: "Q8. You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">var</span> i <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;=</span> <span class=\"token number\">4</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> i <span class=\"token operator\">*</span> <span class=\"token number\">10000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      text: "for (var i = 1; i <= 4; i++) {\n  setTimeout(function () {\n    console.log(i);\n  }, i * 10000);\n}\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>A</code><br><pre><code class=\"language-js\"><span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">var</span> i <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;=</span> <span class=\"token number\">4</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> i <span class=\"token operator\">*</span> <span class=\"token number\">10000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
        text: "Afor (var i = 1; i <= 4; i++) {\n  setTimeout(function () {\n    console.log(i);\n  }, i * 10000);\n}\n",
      },
      {
        isCorrect: false,
        html: "<code>B</code><br><pre><code class=\"language-js\"><span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">var</span> i <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;=</span> <span class=\"token number\">4</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">i</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>j<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> j <span class=\"token operator\">*</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>j<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
        text: "Bfor (var i = 1; i <= 4; i++) {\n  (function (i) {\n    setTimeout(function () {\n      console.log(j);\n    }, j * 1000);\n  })(j);\n}\n",
      },
      {
        isCorrect: false,
        html: "<code>C</code><br><pre><code class=\"language-js\"><span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">var</span> i <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;=</span> <span class=\"token number\">4</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> i <span class=\"token operator\">*</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
        text: "Cfor (var i = 1; i <= 4; i++) {\n  setTimeout(function () {\n    console.log(i);\n  }, i * 1000);\n}\n",
      },
      {
        isCorrect: true,
        html: "<code>D</code><br><pre><code class=\"language-js\"><span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">var</span> i <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;=</span> <span class=\"token number\">4</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">j</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>j<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> j <span class=\"token operator\">*</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
        text: "Dfor (var i = 1; i <= 4; i++) {\n  (function (j) {\n    setTimeout(function () {\n      console.log(j);\n    }, j * 1000);\n  })(i);\n}\n",
      },
      {
        isCorrect: false,
        html: "<code>E</code><br><pre><code class=\"language-js\"><span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">var</span> j <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span> j <span class=\"token operator\">&lt;=</span> <span class=\"token number\">4</span><span class=\"token punctuation\">;</span> j<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>j<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> j <span class=\"token operator\">*</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
        text: "Efor (var j = 1; j <= 4; j++) {\n  setTimeout(function () {\n    console.log(j);\n  }, j * 1000);\n}\n",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/setTimeout\">Reference setTimeout</a>",
      text: "Reference setTimeout",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q9. How does a function create a closure?\n\n- [ ] It reloads the document whenever the value changes.\n- [x] It returns a reference to a variable in its parent scope.\n- [ ] It completes execution without returning.\n- [ ] It copies a local variable to the global scope.\n\n[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q9. How does a function create a closure?</h4>",
      text: "Q9. How does a function create a closure?",
    },
    variants: [
      {
        isCorrect: false,
        html: "It reloads the document whenever the value changes.",
        text: "It reloads the document whenever the value changes.",
      },
      {
        isCorrect: true,
        html: "It returns a reference to a variable in its parent scope.",
        text: "It returns a reference to a variable in its parent scope.",
      },
      {
        isCorrect: false,
        html: "It completes execution without returning.",
        text: "It completes execution without returning.",
      },
      {
        isCorrect: false,
        html: "It copies a local variable to the global scope.",
        text: "It copies a local variable to the global scope.",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q10. Which statement creates a new function called discountPrice?\n\n- [x] `A`\n\n```js\nlet discountPrice = function (price) {\n  return price * 0.85;\n};\n```\n\n- [ ] `B`\n\n```js\nlet discountPrice(price) {\n  return price * 0.85;\n};\n```\n\n- [ ] `C`\n\n```js\nlet function = discountPrice(price) {\n  return price * 0.85;\n};\n```\n\n- [ ] `D`\n\n```js\ndiscountPrice = function (price) {\n  return price * 0.85;\n};\n```\n\n[Reference defining javascript functions](https://www.w3schools.com/js/js_functions.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q10. Which statement creates a new function called discountPrice?</h4>",
      text: "Q10. Which statement creates a new function called discountPrice?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> <span class=\"token function-variable function\">discountPrice</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">price</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> price <span class=\"token operator\">*</span> <span class=\"token number\">0.85</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "let discountPrice = function (price) {\n  return price * 0.85;\n};\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>A</code><br><pre><code class=\"language-js\"><span class=\"token keyword\">let</span> <span class=\"token function-variable function\">discountPrice</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">price</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> price <span class=\"token operator\">*</span> <span class=\"token number\">0.85</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>",
        text: "Alet discountPrice = function (price) {\n  return price * 0.85;\n};\n",
      },
      {
        isCorrect: false,
        html: "<code>B</code><br><pre><code class=\"language-js\"><span class=\"token keyword\">let</span> <span class=\"token function\">discountPrice</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">price</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> price <span class=\"token operator\">*</span> <span class=\"token number\">0.85</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>",
        text: "Blet discountPrice(price) {\n  return price * 0.85;\n};\n",
      },
      {
        isCorrect: false,
        html: "<code>C</code><br><pre><code class=\"language-js\"><span class=\"token keyword\">let</span> <span class=\"token keyword\">function</span> <span class=\"token operator\">=</span> <span class=\"token function\">discountPrice</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">price</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> price <span class=\"token operator\">*</span> <span class=\"token number\">0.85</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>",
        text: "Clet function = discountPrice(price) {\n  return price * 0.85;\n};\n",
      },
      {
        isCorrect: false,
        html: "<code>D</code><br><pre><code class=\"language-js\"><span class=\"token function-variable function\">discountPrice</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">price</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> price <span class=\"token operator\">*</span> <span class=\"token number\">0.85</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>",
        text: "DdiscountPrice = function (price) {\n  return price * 0.85;\n};\n",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_functions.asp\">Reference defining javascript functions</a>",
      text: "Reference defining javascript functions",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q11. What is the result in the console of running the code shown?\n\n```js\nvar Storm = function () {};\nStorm.prototype.precip = 'rain';\nvar WinterStorm = function () {};\nWinterStorm.prototype = new Storm();\nWinterStorm.prototype.precip = 'snow';\nvar bob = new WinterStorm();\nconsole.log(bob.precip);\n```\n\n- [ ] Storm()\n- [ ] undefined\n- [ ] 'rain'\n- [x] 'snow'\n\n[Reference prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q11. What is the result in the console of running the code shown?</h4>",
      text: "Q11. What is the result in the console of running the code shown?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">var</span> <span class=\"token function-variable function\">Storm</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token class-name\">Storm</span><span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">.</span>precip <span class=\"token operator\">=</span> <span class=\"token string\">'rain'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> <span class=\"token function-variable function\">WinterStorm</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token class-name\">WinterStorm</span><span class=\"token punctuation\">.</span>prototype <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Storm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token class-name\">WinterStorm</span><span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">.</span>precip <span class=\"token operator\">=</span> <span class=\"token string\">'snow'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> bob <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">WinterStorm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>bob<span class=\"token punctuation\">.</span>precip<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "var Storm = function () {};\nStorm.prototype.precip = 'rain';\nvar WinterStorm = function () {};\nWinterStorm.prototype = new Storm();\nWinterStorm.prototype.precip = 'snow';\nvar bob = new WinterStorm();\nconsole.log(bob.precip);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "Storm()",
        text: "Storm()",
      },
      {
        isCorrect: false,
        html: "undefined",
        text: "undefined",
      },
      {
        isCorrect: false,
        html: "'rain'",
        text: "'rain'",
      },
      {
        isCorrect: true,
        html: "'snow'",
        text: "'snow'",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain\">Reference prototype chain</a>",
      text: "Reference prototype chain",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q12. You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?\n\n- [ ] `/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/`\n- [x] `/\\d\\d:\\d\\d:\\d\\d/`\n- [ ] `/[0-9]+:[0-9]+:[0-9]+/`\n- [ ] `/ : : /`\n\n**NOTE**: The first three are all partially correct and will match digits, but the **second option is the most correct** because it will **only** match **2 digit** time values (12:00:32). The first option would have worked if the repetitions range looked like `[0-9]{2}`, however because of the **comma** `[0-9]{2,}` it will select 2 **or more** digits (120:000:321). The third option will any range of time digits, single _and_ multiple (meaning `1:2:3` will also match).\n\n**More resources:**\n\n1. [Repeating characters](https://regexone.com/lesson/repeating_characters)\n2. [Kleene operators](https://regexone.com/lesson/kleene_operators)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q12. You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?</h4>",
      text: "Q12. You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/</code>",
        text: "/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/",
      },
      {
        isCorrect: true,
        html: "<code>/\\d\\d:\\d\\d:\\d\\d/</code>",
        text: "/\\d\\d:\\d\\d:\\d\\d/",
      },
      {
        isCorrect: false,
        html: "<code>/[0-9]+:[0-9]+:[0-9]+/</code>",
        text: "/[0-9]+:[0-9]+:[0-9]+/",
      },
      {
        isCorrect: false,
        html: "<code>/ : : /</code>",
        text: "/ : : /",
      },
    ],
    reference: {
      html: "<a href=\"https://regexone.com/lesson/repeating_characters\">Repeating characters</a>",
      text: "Repeating characters",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q13. What is the result in the console of running this code?\n\n```js\n'use strict';\nfunction logThis() {\n  this.desc = 'logger';\n  console.log(this);\n}\nnew logThis();\n```\n\n- [ ] `undefined`\n- [ ] `window`\n- [x] `{desc: \"logger\"}`\n- [ ] `function`\n\n[Reference javascript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q13. What is the result in the console of running this code?</h4>",
      text: "Q13. What is the result in the console of running this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token string\">'use strict'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">logThis</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>desc <span class=\"token operator\">=</span> <span class=\"token string\">'logger'</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token keyword\">new</span> <span class=\"token class-name\">logThis</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "'use strict';\nfunction logThis() {\n  this.desc = 'logger';\n  console.log(this);\n}\nnew logThis();\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>undefined</code>",
        text: "undefined",
      },
      {
        isCorrect: false,
        html: "<code>window</code>",
        text: "window",
      },
      {
        isCorrect: true,
        html: "<code>{desc: \"logger\"}</code>",
        text: "{desc: \"logger\"}",
      },
      {
        isCorrect: false,
        html: "<code>function</code>",
        text: "function",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes\">Reference javascript classes</a>",
      text: "Reference javascript classes",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q14. How would you reference the text 'avenue' in the code shown?\n\n```js\nlet roadTypes = ['street', 'road', 'avenue', 'circle'];\n```\n\n- [ ] roadTypes.2\n- [ ] roadTypes\\[3\\]\n- [ ] roadTypes.3\n- [x] roadTypes\\[2\\]\n\n[Reference accessing javascript arrays](https://www.w3schools.com/js/js_arrays.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q14. How would you reference the text 'avenue' in the code shown?</h4>",
      text: "Q14. How would you reference the text 'avenue' in the code shown?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> roadTypes <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'street'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'road'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'avenue'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'circle'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "let roadTypes = ['street', 'road', 'avenue', 'circle'];\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "roadTypes.2",
        text: "roadTypes.2",
      },
      {
        isCorrect: false,
        html: "roadTypes[3]",
        text: "roadTypes[3]",
      },
      {
        isCorrect: false,
        html: "roadTypes.3",
        text: "roadTypes.3",
      },
      {
        isCorrect: true,
        html: "roadTypes[2]",
        text: "roadTypes[2]",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_arrays.asp\">Reference accessing javascript arrays</a>",
      text: "Reference accessing javascript arrays",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q15. What is the result of running this statement?\n\n```js\nconsole.log(typeof 42);\n```\n\n- [ ] `'float'`\n- [ ] `'value'`\n- [x] `'number'`\n- [ ] `'integer'`\n\n[Reference javascript data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q15. What is the result of running this statement?</h4>",
      text: "Q15. What is the result of running this statement?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\">console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">typeof</span> <span class=\"token number\">42</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "console.log(typeof 42);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>'float'</code>",
        text: "'float'",
      },
      {
        isCorrect: false,
        html: "<code>'value'</code>",
        text: "'value'",
      },
      {
        isCorrect: true,
        html: "<code>'number'</code>",
        text: "'number'",
      },
      {
        isCorrect: false,
        html: "<code>'integer'</code>",
        text: "'integer'",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures\">Reference javascript data types</a>",
      text: "Reference javascript data types",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q16. Which property references the DOM object that dispatched an event?\n\n- [ ] `self`\n- [ ] `object`\n- [x] `target`\n- [ ] `source`\n\n[Reference DOM events](https://www.w3schools.com/jsref/dom_obj_event.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q16. Which property references the DOM object that dispatched an event?</h4>",
      text: "Q16. Which property references the DOM object that dispatched an event?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>self</code>",
        text: "self",
      },
      {
        isCorrect: false,
        html: "<code>object</code>",
        text: "object",
      },
      {
        isCorrect: true,
        html: "<code>target</code>",
        text: "target",
      },
      {
        isCorrect: false,
        html: "<code>source</code>",
        text: "source",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/jsref/dom_obj_event.asp\">Reference DOM events</a>",
      text: "Reference DOM events",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q17. You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?\n\n```js\nfunction addNumbers(x, y) {\n  if (isNaN(x) || isNaN(y)) {\n  }\n}\n```\n\n- [ ] `exception('One or both parameters are not numbers')`\n- [ ] `catch('One or both parameters are not numbers')`\n- [ ] `error('One or both parameters are not numbers')`\n- [x] `throw('One or both parameters are not numbers')`\n\n[Reference javascript throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q17. You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?</h4>",
      text: "Q17. You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">function</span> <span class=\"token function\">addNumbers</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">x<span class=\"token punctuation\">,</span> y</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token function\">isNaN</span><span class=\"token punctuation\">(</span>x<span class=\"token punctuation\">)</span> <span class=\"token operator\">||</span> <span class=\"token function\">isNaN</span><span class=\"token punctuation\">(</span>y<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      text: "function addNumbers(x, y) {\n  if (isNaN(x) || isNaN(y)) {\n  }\n}\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>exception('One or both parameters are not numbers')</code>",
        text: "exception('One or both parameters are not numbers')",
      },
      {
        isCorrect: false,
        html: "<code>catch('One or both parameters are not numbers')</code>",
        text: "catch('One or both parameters are not numbers')",
      },
      {
        isCorrect: false,
        html: "<code>error('One or both parameters are not numbers')</code>",
        text: "error('One or both parameters are not numbers')",
      },
      {
        isCorrect: true,
        html: "<code>throw('One or both parameters are not numbers')</code>",
        text: "throw('One or both parameters are not numbers')",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw\">Reference javascript throw</a>",
      text: "Reference javascript throw",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q18. Which method converts JSON data to a JavaScript object?\n\n- [ ] `JSON.fromString();`\n- [x] `JSON.parse()`\n- [ ] `JSON.toObject()`\n- [ ] `JSON.stringify()`\n\n[Reference convert json to javascript object](https://www.w3schools.com/js/js_json_parse.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q18. Which method converts JSON data to a JavaScript object?</h4>",
      text: "Q18. Which method converts JSON data to a JavaScript object?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>JSON.fromString();</code>",
        text: "JSON.fromString();",
      },
      {
        isCorrect: true,
        html: "<code>JSON.parse()</code>",
        text: "JSON.parse()",
      },
      {
        isCorrect: false,
        html: "<code>JSON.toObject()</code>",
        text: "JSON.toObject()",
      },
      {
        isCorrect: false,
        html: "<code>JSON.stringify()</code>",
        text: "JSON.stringify()",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_json_parse.asp\">Reference convert json to javascript object</a>",
      text: "Reference convert json to javascript object",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q19. When would you use a conditional statement?\n\n- [ ] When you want to reuse a set of statements multiple times.\n- [x] When you want your code to choose between multiple options.\n- [ ] When you want to group data together.\n- [ ] When you want to loop through a group of statement.\n\n[Reference javascript conditionals](https://www.javascript.com/learn/conditionals)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q19. When would you use a conditional statement?</h4>",
      text: "Q19. When would you use a conditional statement?",
    },
    variants: [
      {
        isCorrect: false,
        html: "When you want to reuse a set of statements multiple times.",
        text: "When you want to reuse a set of statements multiple times.",
      },
      {
        isCorrect: true,
        html: "When you want your code to choose between multiple options.",
        text: "When you want your code to choose between multiple options.",
      },
      {
        isCorrect: false,
        html: "When you want to group data together.",
        text: "When you want to group data together.",
      },
      {
        isCorrect: false,
        html: "When you want to loop through a group of statement.",
        text: "When you want to loop through a group of statement.",
      },
    ],
    reference: {
      html: "<a href=\"https://www.javascript.com/learn/conditionals\">Reference javascript conditionals</a>",
      text: "Reference javascript conditionals",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q20. What would be the result in the console of running this code?\n\n```js\nfor (var i = 0; i < 5; i++) {\n  console.log(i);\n}\n```\n\n- [ ] 1 2 3 4 5\n- [ ] 1 2 3 4\n- [x] 0 1 2 3 4\n- [ ] 0 1 2 3 4 5\n\n[Reference javascript for loops](https://www.w3schools.com/js/js_loop_for.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q20. What would be the result in the console of running this code?</h4>",
      text: "Q20. What would be the result in the console of running this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">var</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">5</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      text: "for (var i = 0; i < 5; i++) {\n  console.log(i);\n}\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "1 2 3 4 5",
        text: "1 2 3 4 5",
      },
      {
        isCorrect: false,
        html: "1 2 3 4",
        text: "1 2 3 4",
      },
      {
        isCorrect: true,
        html: "0 1 2 3 4",
        text: "0 1 2 3 4",
      },
      {
        isCorrect: false,
        html: "0 1 2 3 4 5",
        text: "0 1 2 3 4 5",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_loop_for.asp\">Reference javascript for loops</a>",
      text: "Reference javascript for loops",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q21. Which Object method returns an iterable that can be used to iterate over the properties of an object?\n\n- [ ] `Object.get()`\n- [ ] `Object.loop()`\n- [ ] `Object.each()`\n- [x] `Object.keys()`\n\n[Reference javascript object static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q21. Which Object method returns an iterable that can be used to iterate over the properties of an object?</h4>",
      text: "Q21. Which Object method returns an iterable that can be used to iterate over the properties of an object?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>Object.get()</code>",
        text: "Object.get()",
      },
      {
        isCorrect: false,
        html: "<code>Object.loop()</code>",
        text: "Object.loop()",
      },
      {
        isCorrect: false,
        html: "<code>Object.each()</code>",
        text: "Object.each()",
      },
      {
        isCorrect: true,
        html: "<code>Object.keys()</code>",
        text: "Object.keys()",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods\">Reference javascript object static methods</a>",
      text: "Reference javascript object static methods",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q22. What will be logged to the console?\n\n```js\nvar a = ['dog', 'cat', 'hen'];\na[100] = 'fox';\nconsole.log(a.length);\n```\n\n- [x] 101\n- [ ] 3\n- [ ] 4\n- [ ] 100\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q22. What will be logged to the console?</h4>",
      text: "Q22. What will be logged to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">var</span> a <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'dog'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'cat'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hen'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\na<span class=\"token punctuation\">[</span><span class=\"token number\">100</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token string\">'fox'</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "var a = ['dog', 'cat', 'hen'];\na[100] = 'fox';\nconsole.log(a.length);\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "101",
        text: "101",
      },
      {
        isCorrect: false,
        html: "3",
        text: "3",
      },
      {
        isCorrect: false,
        html: "4",
        text: "4",
      },
      {
        isCorrect: false,
        html: "100",
        text: "100",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q23. What is one difference between collections created with Map and collections created with Object?\n\n- [ ] You can iterate over values in a Map in their insertion order.\n- [x] You can count the records in a Map with a single method call.\n- [ ] Keys in Maps can be strings.\n- [ ] You can access values in a Map without iterating over the whole collection.\n\n**Explanation:** `Map.prototype.size returns the number of elements in a Map, whereas Object does not have a built-in method to return its size.`\n[Reference map methods javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q23. What is one difference between collections created with Map and collections created with Object?</h4>",
      text: "Q23. What is one difference between collections created with Map and collections created with Object?",
    },
    variants: [
      {
        isCorrect: false,
        html: "You can iterate over values in a Map in their insertion order.",
        text: "You can iterate over values in a Map in their insertion order.",
      },
      {
        isCorrect: true,
        html: "You can count the records in a Map with a single method call.",
        text: "You can count the records in a Map with a single method call.",
      },
      {
        isCorrect: false,
        html: "Keys in Maps can be strings.",
        text: "Keys in Maps can be strings.",
      },
      {
        isCorrect: false,
        html: "You can access values in a Map without iterating over the whole collection.",
        text: "You can access values in a Map without iterating over the whole collection.",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map\">Reference map methods javascript</a>",
      text: "Reference map methods javascript",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q24. What is the value of dessert.type after executing this code?\n\n```js\nconst dessert = { type: 'pie' };\ndessert.type = 'pudding';\n```\n\n- [ ] pie\n- [ ] The code will throw an error.\n- [x] pudding\n- [ ] undefined\n\n[Reference working with js objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q24. What is the value of dessert.type after executing this code?</h4>",
      text: "Q24. What is the value of dessert.type after executing this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> dessert <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token literal-property property\">type</span><span class=\"token operator\">:</span> <span class=\"token string\">'pie'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\ndessert<span class=\"token punctuation\">.</span>type <span class=\"token operator\">=</span> <span class=\"token string\">'pudding'</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const dessert = { type: 'pie' };\ndessert.type = 'pudding';\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "pie",
        text: "pie",
      },
      {
        isCorrect: false,
        html: "The code will throw an error.",
        text: "The code will throw an error.",
      },
      {
        isCorrect: true,
        html: "pudding",
        text: "pudding",
      },
      {
        isCorrect: false,
        html: "undefined",
        text: "undefined",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects\">Reference working with js objects</a>",
      text: "Reference working with js objects",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q25. 0 && hi\n\n- [ ] ReferenceError\n- [ ] true\n- [x] 0\n- [ ] false\n\n[Reference boolean logic](https://ntgard.medium.com/https-medium-com-ntgard-boolean-logic-in-javascript-part-1-3371af974f19)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q25. 0 &amp;&amp; hi</h4>",
      text: "Q25. 0 && hi",
    },
    variants: [
      {
        isCorrect: false,
        html: "ReferenceError",
        text: "ReferenceError",
      },
      {
        isCorrect: false,
        html: "true",
        text: "true",
      },
      {
        isCorrect: true,
        html: "0",
        text: "0",
      },
      {
        isCorrect: false,
        html: "false",
        text: "false",
      },
    ],
    reference: {
      html: "<a href=\"https://ntgard.medium.com/https-medium-com-ntgard-boolean-logic-in-javascript-part-1-3371af974f19\">Reference boolean logic</a>",
      text: "Reference boolean logic",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q26. Which of the following operators can be used to do a short-circuit evaluation?\n\n- [ ] `++`\n- [ ] `--`\n- [ ] `==`\n- [x] `||`\n\n[Reference short circuit javascript](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q26. Which of the following operators can be used to do a short-circuit evaluation?</h4>",
      text: "Q26. Which of the following operators can be used to do a short-circuit evaluation?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>++</code>",
        text: "++",
      },
      {
        isCorrect: false,
        html: "<code>--</code>",
        text: "--",
      },
      {
        isCorrect: false,
        html: "<code>==</code>",
        text: "==",
      },
      {
        isCorrect: true,
        html: "<code>||</code>",
        text: "||",
      },
    ],
    reference: {
      html: "<a href=\"https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c\">Reference short circuit javascript</a>",
      text: "Reference short circuit javascript",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q27. Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?\n\n- [ ] `Student.parent = Person;`\n- [x] `Student.prototype = new Person();`\n- [ ] `Student.prototype = Person;`\n- [ ] `Student.prototype = Person();`\n\n[Reference prototype object js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q27. Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?</h4>",
      text: "Q27. Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>Student.parent = Person;</code>",
        text: "Student.parent = Person;",
      },
      {
        isCorrect: true,
        html: "<code>Student.prototype = new Person();</code>",
        text: "Student.prototype = new Person();",
      },
      {
        isCorrect: false,
        html: "<code>Student.prototype = Person;</code>",
        text: "Student.prototype = Person;",
      },
      {
        isCorrect: false,
        html: "<code>Student.prototype = Person();</code>",
        text: "Student.prototype = Person();",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain\">Reference prototype object js</a>",
      text: "Reference prototype object js",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q28. Why would you include a \"use strict\" statement in a JavaScript file?\n\n- [ ] to tell parsers to interpret your JavaScript syntax loosely\n- [x] to tell parsers to enforce all JavaScript syntax rules when processing your code\n- [ ] to instruct the browser to automatically fix any errors it finds in the code\n- [ ] to enable ES6 features in your code\n\n[Reference what is use strict in js](https://www.w3schools.com/js/js_strict.asp)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q28. Why would you include a \"use strict\" statement in a JavaScript file?</h4>",
      text: "Q28. Why would you include a \"use strict\" statement in a JavaScript file?",
    },
    variants: [
      {
        isCorrect: false,
        html: "to tell parsers to interpret your JavaScript syntax loosely",
        text: "to tell parsers to interpret your JavaScript syntax loosely",
      },
      {
        isCorrect: true,
        html: "to tell parsers to enforce all JavaScript syntax rules when processing your code",
        text: "to tell parsers to enforce all JavaScript syntax rules when processing your code",
      },
      {
        isCorrect: false,
        html: "to instruct the browser to automatically fix any errors it finds in the code",
        text: "to instruct the browser to automatically fix any errors it finds in the code",
      },
      {
        isCorrect: false,
        html: "to enable ES6 features in your code",
        text: "to enable ES6 features in your code",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_strict.asp\">Reference what is use strict in js</a>",
      text: "Reference what is use strict in js",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q29. Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?\n\n- [ ] all of them\n- [ ] `const`\n- [x] `var`\n- [ ] `let`\n\n[Reference var vs let vs const in js](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q29. Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?</h4>",
      text: "Q29. Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?",
    },
    variants: [
      {
        isCorrect: false,
        html: "all of them",
        text: "all of them",
      },
      {
        isCorrect: false,
        html: "<code>const</code>",
        text: "const",
      },
      {
        isCorrect: true,
        html: "<code>var</code>",
        text: "var",
      },
      {
        isCorrect: false,
        html: "<code>let</code>",
        text: "let",
      },
    ],
    reference: {
      html: "<a href=\"https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/\">Reference var vs let vs const in js</a>",
      text: "Reference var vs let vs const in js",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q30. Which of the following values is not a Boolean false?\n\n- [ ] `Boolean(0)`\n- [ ] `Boolean(\"\")`\n- [ ] `Boolean(NaN)`\n- [x] `Boolean(\"false\")`\n\n[Reference boolean of a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q30. Which of the following values is not a Boolean false?</h4>",
      text: "Q30. Which of the following values is not a Boolean false?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>Boolean(0)</code>",
        text: "Boolean(0)",
      },
      {
        isCorrect: false,
        html: "<code>Boolean(\"\")</code>",
        text: "Boolean(\"\")",
      },
      {
        isCorrect: false,
        html: "<code>Boolean(NaN)</code>",
        text: "Boolean(NaN)",
      },
      {
        isCorrect: true,
        html: "<code>Boolean(\"false\")</code>",
        text: "Boolean(\"false\")",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">Reference boolean of a string</a>",
      text: "Reference boolean of a string",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q31. Which of the following is not a keyword in JavaScript?\n\n- [ ] `this`\n- [ ] `catch`\n- [ ] `function`\n- [x] `array`\n\n[Reference js reserved words](https://www.w3schools.com/js/js_reserved.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q31. Which of the following is not a keyword in JavaScript?</h4>",
      text: "Q31. Which of the following is not a keyword in JavaScript?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>this</code>",
        text: "this",
      },
      {
        isCorrect: false,
        html: "<code>catch</code>",
        text: "catch",
      },
      {
        isCorrect: false,
        html: "<code>function</code>",
        text: "function",
      },
      {
        isCorrect: true,
        html: "<code>array</code>",
        text: "array",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_reserved.asp\">Reference js reserved words</a>",
      text: "Reference js reserved words",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q32. Which variable is an implicit parameter for every function in JavaScript?\n\n- [x] Arguments\n- [ ] args\n- [ ] argsArray\n- [ ] argumentsList\n\n[Reference implicit js parameters for functions](https://www.codeproject.com/Tips/1221966/JavaScript-Functions-Implicit-Parameters)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q32. Which variable is an implicit parameter for every function in JavaScript?</h4>",
      text: "Q32. Which variable is an implicit parameter for every function in JavaScript?",
    },
    variants: [
      {
        isCorrect: true,
        html: "Arguments",
        text: "Arguments",
      },
      {
        isCorrect: false,
        html: "args",
        text: "args",
      },
      {
        isCorrect: false,
        html: "argsArray",
        text: "argsArray",
      },
      {
        isCorrect: false,
        html: "argumentsList",
        text: "argumentsList",
      },
    ],
    reference: {
      html: "<a href=\"https://www.codeproject.com/Tips/1221966/JavaScript-Functions-Implicit-Parameters\">Reference implicit js parameters for functions</a>",
      text: "Reference implicit js parameters for functions",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q33. For the following class, how do you get the value of 42 from an instance of X?\n\n```js\nclass X {\n  get Y() {\n    return 42;\n  }\n}\nvar x = new X();\n```\n\n- [ ] `x.get('Y')`\n- [x] `x.Y`\n- [ ] `x.Y()`\n- [ ] `x.get().Y`\n\n[Reference getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q33. For the following class, how do you get the value of 42 from an instance of X?</h4>",
      text: "Q33. For the following class, how do you get the value of 42 from an instance of X?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">class</span> <span class=\"token class-name\">X</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">get</span> <span class=\"token constant\">Y</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token number\">42</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token keyword\">var</span> x <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">X</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "class X {\n  get Y() {\n    return 42;\n  }\n}\nvar x = new X();\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>x.get('Y')</code>",
        text: "x.get('Y')",
      },
      {
        isCorrect: true,
        html: "<code>x.Y</code>",
        text: "x.Y",
      },
      {
        isCorrect: false,
        html: "<code>x.Y()</code>",
        text: "x.Y()",
      },
      {
        isCorrect: false,
        html: "<code>x.get().Y</code>",
        text: "x.get().Y",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get\">Reference getters</a>",
      text: "Reference getters",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q34. What is the result of running this code?\n\n```js\nsum(10, 20);\ndiff(10, 20);\nfunction sum(x, y) {\n  return x + y;\n}\n\nlet diff = function (x, y) {\n  return x - y;\n};\n```\n\n- [ ] 30, ReferenceError, 30, -10\n- [x] 30, ReferenceError\n- [ ] 30, -10\n- [ ] ReferenceError, -10\n\n[Reference accessing before initialization](https://stackoverflow.com/questions/56318460/cannot-access-variable-name-before-initialization)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q34. What is the result of running this code?</h4>",
      text: "Q34. What is the result of running this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token function\">sum</span><span class=\"token punctuation\">(</span><span class=\"token number\">10</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">diff</span><span class=\"token punctuation\">(</span><span class=\"token number\">10</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">sum</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">x<span class=\"token punctuation\">,</span> y</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> x <span class=\"token operator\">+</span> y<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">let</span> <span class=\"token function-variable function\">diff</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">x<span class=\"token punctuation\">,</span> y</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> x <span class=\"token operator\">-</span> y<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "sum(10, 20);\ndiff(10, 20);\nfunction sum(x, y) {\n  return x + y;\n}\n\nlet diff = function (x, y) {\n  return x - y;\n};\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "30, ReferenceError, 30, -10",
        text: "30, ReferenceError, 30, -10",
      },
      {
        isCorrect: true,
        html: "30, ReferenceError",
        text: "30, ReferenceError",
      },
      {
        isCorrect: false,
        html: "30, -10",
        text: "30, -10",
      },
      {
        isCorrect: false,
        html: "ReferenceError, -10",
        text: "ReferenceError, -10",
      },
    ],
    reference: {
      html: "<a href=\"https://stackoverflow.com/questions/56318460/cannot-access-variable-name-before-initialization\">Reference accessing before initialization</a>",
      text: "Reference accessing before initialization",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q35. Why is it usually better to work with Objects instead of Arrays to store a collection of records?\n\n- [ ] Objects are more efficient in terms of storage.\n- [ ] Adding a record to an object is significantly faster than pushing a record into an array.\n- [x] Most operations involve looking up a record, and objects can do that better than arrays.\n- [ ] Working with objects makes the code more readable.\n\n[Reference efficiency of lookups](https://stackoverflow.com/questions/17295056/array-vs-object-efficiency-in-javascript)\n**Explanation:** Records in an object can be retrieved using their key which can be any given value (e.g. an employee ID, a city name, etc), whereas to retrieve a record from an array we need to know its index.\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q35. Why is it usually better to work with Objects instead of Arrays to store a collection of records?</h4>",
      text: "Q35. Why is it usually better to work with Objects instead of Arrays to store a collection of records?",
    },
    variants: [
      {
        isCorrect: false,
        html: "Objects are more efficient in terms of storage.",
        text: "Objects are more efficient in terms of storage.",
      },
      {
        isCorrect: false,
        html: "Adding a record to an object is significantly faster than pushing a record into an array.",
        text: "Adding a record to an object is significantly faster than pushing a record into an array.",
      },
      {
        isCorrect: true,
        html: "Most operations involve looking up a record, and objects can do that better than arrays.",
        text: "Most operations involve looking up a record, and objects can do that better than arrays.",
      },
      {
        isCorrect: false,
        html: "Working with objects makes the code more readable.",
        text: "Working with objects makes the code more readable.",
      },
    ],
    reference: {
      html: "<a href=\"https://stackoverflow.com/questions/17295056/array-vs-object-efficiency-in-javascript\">Reference efficiency of lookups</a>",
      text: "Reference efficiency of lookups",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q36. Which statement is true about the \"async\" attribute for the HTML script tag?\n\n- [ ] It can be used for both internal and external JavaScript code.\n- [ ] It can be used only for internal JavaScript code.\n- [ ] It can be used only for internal or external JavaScript code that exports a promise.\n- [x] It can be used only for external JavaScript code.\n\n[Reference async attribute for html](https://www.w3schools.com/tags/att_script_async.asp)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q36. Which statement is true about the \"async\" attribute for the HTML script tag?</h4>",
      text: "Q36. Which statement is true about the \"async\" attribute for the HTML script tag?",
    },
    variants: [
      {
        isCorrect: false,
        html: "It can be used for both internal and external JavaScript code.",
        text: "It can be used for both internal and external JavaScript code.",
      },
      {
        isCorrect: false,
        html: "It can be used only for internal JavaScript code.",
        text: "It can be used only for internal JavaScript code.",
      },
      {
        isCorrect: false,
        html: "It can be used only for internal or external JavaScript code that exports a promise.",
        text: "It can be used only for internal or external JavaScript code that exports a promise.",
      },
      {
        isCorrect: true,
        html: "It can be used only for external JavaScript code.",
        text: "It can be used only for external JavaScript code.",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/tags/att_script_async.asp\">Reference async attribute for html</a>",
      text: "Reference async attribute for html",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q37. How do you import the lodash library making it top-level Api available as the \"\\_\" variable?\n\n- [x] `import _ from 'lodash';`\n- [ ] `import 'lodash' as _;`\n- [ ] `import '_' from 'lodash;`\n- [ ] `import lodash as _ from 'lodash';`\n\n[Reference how to import library in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q37. How do you import the lodash library making it top-level Api available as the \"_\" variable?</h4>",
      text: "Q37. How do you import the lodash library making it top-level Api available as the \"_\" variable?",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>import _ from 'lodash';</code>",
        text: "import _ from 'lodash';",
      },
      {
        isCorrect: false,
        html: "<code>import 'lodash' as _;</code>",
        text: "import 'lodash' as _;",
      },
      {
        isCorrect: false,
        html: "<code>import '_' from 'lodash;</code>",
        text: "import '_' from 'lodash;",
      },
      {
        isCorrect: false,
        html: "<code>import lodash as _ from 'lodash';</code>",
        text: "import lodash as _ from 'lodash';",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import\">Reference how to import library in js</a>",
      text: "Reference how to import library in js",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q38. What does the following expression evaluate to?\n\n```js\n[] == [];\n```\n\n- [ ] true\n- [ ] undefined\n- [ ] []\n- [x] false\n\n[Reference arrays in js are objects](https://stackoverflow.com/questions/30820611/why-doesnt-equality-check-work-with-arrays)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q38. What does the following expression evaluate to?</h4>",
      text: "Q38. What does the following expression evaluate to?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">==</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "[] == [];\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "true",
        text: "true",
      },
      {
        isCorrect: false,
        html: "undefined",
        text: "undefined",
      },
      {
        isCorrect: false,
        html: "[]",
        text: "[]",
      },
      {
        isCorrect: true,
        html: "false",
        text: "false",
      },
    ],
    reference: {
      html: "<a href=\"https://stackoverflow.com/questions/30820611/why-doesnt-equality-check-work-with-arrays\">Reference arrays in js are objects</a>",
      text: "Reference arrays in js are objects",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q39. What type of function can have its execution suspended and then resumed at a later point?\n\n- [x] Generator function\n- [ ] Arrow function\n- [ ] Async/ Await function\n- [ ] Promise function\n\n[Reference what are generators in nodejs](https://www.guru99.com/node-js-generators-compare-callbacks.html#:~:text=Generators%20are%20function%20executions%20that,resumed%20at%20a%20later%20point.)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q39. What type of function can have its execution suspended and then resumed at a later point?</h4>",
      text: "Q39. What type of function can have its execution suspended and then resumed at a later point?",
    },
    variants: [
      {
        isCorrect: true,
        html: "Generator function",
        text: "Generator function",
      },
      {
        isCorrect: false,
        html: "Arrow function",
        text: "Arrow function",
      },
      {
        isCorrect: false,
        html: "Async/ Await function",
        text: "Async/ Await function",
      },
      {
        isCorrect: false,
        html: "Promise function",
        text: "Promise function",
      },
    ],
    reference: {
      html: "<a href=\"https://www.guru99.com/node-js-generators-compare-callbacks.html#:~:text=Generators%20are%20function%20executions%20that,resumed%20at%20a%20later%20point.\">Reference what are generators in nodejs</a>",
      text: "Reference what are generators in nodejs",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q40. What will this code print?\n\n```js\nvar v = 1;\nvar f1 = function () {\n  console.log(v);\n};\n\nvar f2 = function () {\n  var v = 2;\n  f1();\n};\n\nf2();\n```\n\n- [ ] 2\n- [x] 1\n- [ ] Nothing - this code will throw an error.\n- [ ] undefined\n\n[Reference closures in js \\/ nested functions](https://javascript.info/closure)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q40. What will this code print?</h4>",
      text: "Q40. What will this code print?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">var</span> v <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> <span class=\"token function-variable function\">f1</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>v<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">var</span> <span class=\"token function-variable function\">f2</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">var</span> v <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n  <span class=\"token function\">f1</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token function\">f2</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "var v = 1;\nvar f1 = function () {\n  console.log(v);\n};\n\nvar f2 = function () {\n  var v = 2;\n  f1();\n};\n\nf2();\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "2",
        text: "2",
      },
      {
        isCorrect: true,
        html: "1",
        text: "1",
      },
      {
        isCorrect: false,
        html: "Nothing - this code will throw an error.",
        text: "Nothing - this code will throw an error.",
      },
      {
        isCorrect: false,
        html: "undefined",
        text: "undefined",
      },
    ],
    reference: {
      html: "<a href=\"https://javascript.info/closure\">Reference closures in js / nested functions</a>",
      text: "Reference closures in js / nested functions",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q41. Which statement is true about Functional Programming?\n\n- [ ] Every object in the program has to be a function.\n- [ ] Code is grouped with the state it modifies.\n- [ ] Date fields and methods are kept in units.\n- [x] Side effects are not allowed.\n\n[Reference functional programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q41. Which statement is true about Functional Programming?</h4>",
      text: "Q41. Which statement is true about Functional Programming?",
    },
    variants: [
      {
        isCorrect: false,
        html: "Every object in the program has to be a function.",
        text: "Every object in the program has to be a function.",
      },
      {
        isCorrect: false,
        html: "Code is grouped with the state it modifies.",
        text: "Code is grouped with the state it modifies.",
      },
      {
        isCorrect: false,
        html: "Date fields and methods are kept in units.",
        text: "Date fields and methods are kept in units.",
      },
      {
        isCorrect: true,
        html: "Side effects are not allowed.",
        text: "Side effects are not allowed.",
      },
    ],
    reference: {
      html: "<a href=\"https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0\">Reference functional programming</a>",
      text: "Reference functional programming",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q42. Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?\n\n- [x] You are calling a method named reduce on an object that's declared but has no value.\n- [ ] You are calling a method named reduce on an object that does not exist.\n- [ ] You are calling a method named reduce on an empty array.\n- [ ] You are calling a method named reduce on an object that's has a null value.\n\n**Explanation**: `You cannot invoke reduce on undefined object... It will throw (yourObject is not Defined...)`\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q42. Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?</h4>",
      text: "Q42. Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?",
    },
    variants: [
      {
        isCorrect: true,
        html: "You are calling a method named reduce on an object that's declared but has no value.",
        text: "You are calling a method named reduce on an object that's declared but has no value.",
      },
      {
        isCorrect: false,
        html: "You are calling a method named reduce on an object that does not exist.",
        text: "You are calling a method named reduce on an object that does not exist.",
      },
      {
        isCorrect: false,
        html: "You are calling a method named reduce on an empty array.",
        text: "You are calling a method named reduce on an empty array.",
      },
      {
        isCorrect: false,
        html: "You are calling a method named reduce on an object that's has a null value.",
        text: "You are calling a method named reduce on an object that's has a null value.",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q43. How many prototype objects are in the chain for the following array?\n\n`let arr = [];`\n\n- [ ] 3\n- [x] 2\n- [ ] 0\n- [ ] 1\n\n[Reference array prototype](https://www.w3schools.com/jsref/jsref_prototype_array.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q43. How many prototype objects are in the chain for the following array?</h4>",
      text: "Q43. How many prototype objects are in the chain for the following array?",
    },
    variants: [
      {
        isCorrect: false,
        html: "3",
        text: "3",
      },
      {
        isCorrect: true,
        html: "2",
        text: "2",
      },
      {
        isCorrect: false,
        html: "0",
        text: "0",
      },
      {
        isCorrect: false,
        html: "1",
        text: "1",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/jsref/jsref_prototype_array.asp\">Reference array prototype</a>",
      text: "Reference array prototype",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q44. Which choice is _not_ a unary operator?\n\n- [ ] `typeof`\n- [ ] `delete`\n- [x] `instanceof`\n- [ ] `void`\n\n[Reference js unary operators](https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful#:~:text=A%20unary%20operation%20is%20an,therefore%20their%20functionality%20is%20guaranteed.)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q44. Which choice is <em>not</em> a unary operator?</h4>",
      text: "Q44. Which choice is not a unary operator?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>typeof</code>",
        text: "typeof",
      },
      {
        isCorrect: false,
        html: "<code>delete</code>",
        text: "delete",
      },
      {
        isCorrect: true,
        html: "<code>instanceof</code>",
        text: "instanceof",
      },
      {
        isCorrect: false,
        html: "<code>void</code>",
        text: "void",
      },
    ],
    reference: {
      html: "<a href=\"https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful#:~:text=A%20unary%20operation%20is%20an,therefore%20their%20functionality%20is%20guaranteed.\">Reference js unary operators</a>",
      text: "Reference js unary operators",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q45. What type of scope does the end variable have in the code shown?\n\n```js\nvar start = 1;\nif (start === 1) {\n  let end = 2;\n}\n```\n\n- [ ] conditional\n- [x] block\n- [ ] global\n- [ ] function\n\n[Reference block vs function scope](https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q45. What type of scope does the end variable have in the code shown?</h4>",
      text: "Q45. What type of scope does the end variable have in the code shown?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">var</span> start <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>start <span class=\"token operator\">===</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">let</span> end <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      text: "var start = 1;\nif (start === 1) {\n  let end = 2;\n}\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "conditional",
        text: "conditional",
      },
      {
        isCorrect: true,
        html: "block",
        text: "block",
      },
      {
        isCorrect: false,
        html: "global",
        text: "global",
      },
      {
        isCorrect: false,
        html: "function",
        text: "function",
      },
    ],
    reference: {
      html: "<a href=\"https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe\">Reference block vs function scope</a>",
      text: "Reference block vs function scope",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q46. What will the value of y be in this code:\n\n```js\nconst x = 6 % 2;\nconst y = x ? 'One' : 'Two';\n```\n\n- [ ] One\n- [ ] undefined\n- [ ] TRUE\n- [x] Two\n\n[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q46. What will the value of y be in this code:</h4>",
      text: "Q46. What will the value of y be in this code:",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> x <span class=\"token operator\">=</span> <span class=\"token number\">6</span> <span class=\"token operator\">%</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> y <span class=\"token operator\">=</span> x <span class=\"token operator\">?</span> <span class=\"token string\">'One'</span> <span class=\"token operator\">:</span> <span class=\"token string\">'Two'</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const x = 6 % 2;\nconst y = x ? 'One' : 'Two';\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "One",
        text: "One",
      },
      {
        isCorrect: false,
        html: "undefined",
        text: "undefined",
      },
      {
        isCorrect: false,
        html: "TRUE",
        text: "TRUE",
      },
      {
        isCorrect: true,
        html: "Two",
        text: "Two",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator\">Reference ternary operator js</a>",
      text: "Reference ternary operator js",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q47. Which keyword is used to create an error?\n\n- [x] `throw`\n- [ ] `exception`\n- [ ] `catch`\n- [ ] `error`\n\n[Reference throwing errors in js](<https://www.w3schools.com/jsref/jsref_throw.asp#:~:text=The%20throw%20statement%20throws%20(generates,to%20create%20a%20custom%20error.)>)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q47. Which keyword is used to create an error?</h4>",
      text: "Q47. Which keyword is used to create an error?",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>throw</code>",
        text: "throw",
      },
      {
        isCorrect: false,
        html: "<code>exception</code>",
        text: "exception",
      },
      {
        isCorrect: false,
        html: "<code>catch</code>",
        text: "catch",
      },
      {
        isCorrect: false,
        html: "<code>error</code>",
        text: "error",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/jsref/jsref_throw.asp#:~:text=The%20throw%20statement%20throws%20(generates,to%20create%20a%20custom%20error.)\">Reference throwing errors in js</a>",
      text: "Reference throwing errors in js",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q48. What's one difference between the async and defer attributes of the HTML script tag?\n\n- [ ] The defer attribute can work synchronously.\n- [ ] The defer attribute works only with generators.\n- [ ] The defer attribute works only with promises.\n- [x] The defer attribute will asynchronously load the scripts in order.\n\n[Reference async vs defer](https://www.digitalocean.com/community/tutorials/html-defer-async#:~:text=%3E-,Async%20vs%20Defer,order%20as%20they%20are%20called.)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q48. What's one difference between the async and defer attributes of the HTML script tag?</h4>",
      text: "Q48. What's one difference between the async and defer attributes of the HTML script tag?",
    },
    variants: [
      {
        isCorrect: false,
        html: "The defer attribute can work synchronously.",
        text: "The defer attribute can work synchronously.",
      },
      {
        isCorrect: false,
        html: "The defer attribute works only with generators.",
        text: "The defer attribute works only with generators.",
      },
      {
        isCorrect: false,
        html: "The defer attribute works only with promises.",
        text: "The defer attribute works only with promises.",
      },
      {
        isCorrect: true,
        html: "The defer attribute will asynchronously load the scripts in order.",
        text: "The defer attribute will asynchronously load the scripts in order.",
      },
    ],
    reference: {
      html: "<a href=\"https://www.digitalocean.com/community/tutorials/html-defer-async#:~:text=%3E-,Async%20vs%20Defer,order%20as%20they%20are%20called.\">Reference async vs defer</a>",
      text: "Reference async vs defer",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q49. The following program has a problem. What is it?\n\n```js\nvar a;\nvar b = (a = 3) ? true : false;\n```\n\n- [x] The condition in the ternary is using the assignment operator.\n- [ ] You can't define a variable without initializing it.\n- [ ] You can't use a ternary in the right-hand side of an assignment operator.\n- [ ] The code is using the deprecated var keyword.\n\n[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q49. The following program has a problem. What is it?</h4>",
      text: "Q49. The following program has a problem. What is it?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">var</span> a<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> b <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>a <span class=\"token operator\">=</span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">?</span> <span class=\"token boolean\">true</span> <span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "var a;\nvar b = (a = 3) ? true : false;\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "The condition in the ternary is using the assignment operator.",
        text: "The condition in the ternary is using the assignment operator.",
      },
      {
        isCorrect: false,
        html: "You can't define a variable without initializing it.",
        text: "You can't define a variable without initializing it.",
      },
      {
        isCorrect: false,
        html: "You can't use a ternary in the right-hand side of an assignment operator.",
        text: "You can't use a ternary in the right-hand side of an assignment operator.",
      },
      {
        isCorrect: false,
        html: "The code is using the deprecated var keyword.",
        text: "The code is using the deprecated var keyword.",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator\">Reference ternary operator js</a>",
      text: "Reference ternary operator js",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q50. Which statement references the DOM node created by the code shown?\n\n```html\n<p class=\"pull\">lorem ipsum</p>\n```\n\n- [ ] `Document.querySelector('class.pull')`\n- [x] `document.querySelector('.pull');`\n- [ ] `Document.querySelector('pull')`\n- [ ] `Document.querySelector('#pull')`\n\n[Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q50. Which statement references the DOM node created by the code shown?</h4>",
      text: "Q50. Which statement references the DOM node created by the code shown?",
    },
    preformated: {
      language: "html",
      html: "<pre><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>pull<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>lorem ipsum<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">&gt;</span></span>\n</code></pre>",
      text: "<p class=\"pull\">lorem ipsum</p>\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>Document.querySelector('class.pull')</code>",
        text: "Document.querySelector('class.pull')",
      },
      {
        isCorrect: true,
        html: "<code>document.querySelector('.pull');</code>",
        text: "document.querySelector('.pull');",
      },
      {
        isCorrect: false,
        html: "<code>Document.querySelector('pull')</code>",
        text: "Document.querySelector('pull')",
      },
      {
        isCorrect: false,
        html: "<code>Document.querySelector('#pull')</code>",
        text: "Document.querySelector('#pull')",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector\">Reference query selector</a>",
      text: "Reference query selector",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q51. What value does this code return?\n\n```js\nlet answer = true;\nif (answer === false) {\n  return 0;\n} else {\n  return 10;\n}\n```\n\n- [x] 10\n- [ ] true\n- [ ] false\n- [ ] 0\n\n[Reference javascript conditionals](https://www.javascript.com/learn/conditionals)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q51. What value does this code return?</h4>",
      text: "Q51. What value does this code return?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> answer <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>answer <span class=\"token operator\">===</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      text: "let answer = true;\nif (answer === false) {\n  return 0;\n} else {\n  return 10;\n}\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "10",
        text: "10",
      },
      {
        isCorrect: false,
        html: "true",
        text: "true",
      },
      {
        isCorrect: false,
        html: "false",
        text: "false",
      },
      {
        isCorrect: false,
        html: "0",
        text: "0",
      },
    ],
    reference: {
      html: "<a href=\"https://www.javascript.com/learn/conditionals\">Reference javascript conditionals</a>",
      text: "Reference javascript conditionals",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q52. What is the result in the console of running the code shown?\n\n```js\nvar start = 1;\nfunction setEnd() {\n  var end = 10;\n}\nsetEnd();\nconsole.log(end);\n```\n\n- [ ] 10\n- [ ] 0\n- [x] ReferenceError\n- [ ] undefined\n\n[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q52. What is the result in the console of running the code shown?</h4>",
      text: "Q52. What is the result in the console of running the code shown?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">var</span> start <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">setEnd</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">var</span> end <span class=\"token operator\">=</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token function\">setEnd</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>end<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "var start = 1;\nfunction setEnd() {\n  var end = 10;\n}\nsetEnd();\nconsole.log(end);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "10",
        text: "10",
      },
      {
        isCorrect: false,
        html: "0",
        text: "0",
      },
      {
        isCorrect: true,
        html: "ReferenceError",
        text: "ReferenceError",
      },
      {
        isCorrect: false,
        html: "undefined",
        text: "undefined",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q53. What will this code log in the console?\n\n```js\nfunction sayHello() {\n  console.log('hello');\n}\n\nconsole.log(sayHello.prototype);\n```\n\n- [ ] undefined\n- [ ] \"hello\"\n- [x] an object with a constructor property\n- [ ] an error message\n\n[Reference prototypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q53. What will this code log in the console?</h4>",
      text: "Q53. What will this code log in the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">function</span> <span class=\"token function\">sayHello</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'hello'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>sayHello<span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "function sayHello() {\n  console.log('hello');\n}\n\nconsole.log(sayHello.prototype);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "undefined",
        text: "undefined",
      },
      {
        isCorrect: false,
        html: "\"hello\"",
        text: "\"hello\"",
      },
      {
        isCorrect: true,
        html: "an object with a constructor property",
        text: "an object with a constructor property",
      },
      {
        isCorrect: false,
        html: "an error message",
        text: "an error message",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain\">Reference prototypes</a>",
      text: "Reference prototypes",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q54. Which collection object allows unique value to be inserted only once?\n\n- [ ] Object\n- [x] Set\n- [ ] Array\n- [ ] Map\n\n[Reference javascript sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q54. Which collection object allows unique value to be inserted only once?</h4>",
      text: "Q54. Which collection object allows unique value to be inserted only once?",
    },
    variants: [
      {
        isCorrect: false,
        html: "Object",
        text: "Object",
      },
      {
        isCorrect: true,
        html: "Set",
        text: "Set",
      },
      {
        isCorrect: false,
        html: "Array",
        text: "Array",
      },
      {
        isCorrect: false,
        html: "Map",
        text: "Map",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set\">Reference javascript sets</a>",
      text: "Reference javascript sets",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q55. What two values will this code print?\n\n```js\nfunction printA() {\n  console.log(answer);\n  var answer = 1;\n}\nprintA();\nprintA();\n```\n\n- [ ] `1` then `1`\n- [ ] `1` then `undefined`\n- [x] `undefined` then `undefined`\n- [ ] `undefined` then `1`\n\n[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q55. What two values will this code print?</h4>",
      text: "Q55. What two values will this code print?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">function</span> <span class=\"token function\">printA</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>answer<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">var</span> answer <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token function\">printA</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">printA</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "function printA() {\n  console.log(answer);\n  var answer = 1;\n}\nprintA();\nprintA();\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>1</code> then <code>1</code>",
        text: "1 then 1",
      },
      {
        isCorrect: false,
        html: "<code>1</code> then <code>undefined</code>",
        text: "1 then undefined",
      },
      {
        isCorrect: true,
        html: "<code>undefined</code> then <code>undefined</code>",
        text: "undefined then undefined",
      },
      {
        isCorrect: false,
        html: "<code>undefined</code> then <code>1</code>",
        text: "undefined then 1",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q56. How does the `forEach()` method differ from a `for` statement?\n\n- [ ] forEach allows you to specify your own iterator, whereas for does not.\n- [ ] forEach can be used only with strings, whereas for can be used with additional data types.\n- [x] forEach can be used only with an array, whereas for can be used with additional data types.\n- [ ] for loops can be nested; whereas forEach loops cannot.\n\n[Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q56. How does the <code>forEach()</code> method differ from a <code>for</code> statement?</h4>",
      text: "Q56. How does the forEach() method differ from a for statement?",
    },
    variants: [
      {
        isCorrect: false,
        html: "forEach allows you to specify your own iterator, whereas for does not.",
        text: "forEach allows you to specify your own iterator, whereas for does not.",
      },
      {
        isCorrect: false,
        html: "forEach can be used only with strings, whereas for can be used with additional data types.",
        text: "forEach can be used only with strings, whereas for can be used with additional data types.",
      },
      {
        isCorrect: true,
        html: "forEach can be used only with an array, whereas for can be used with additional data types.",
        text: "forEach can be used only with an array, whereas for can be used with additional data types.",
      },
      {
        isCorrect: false,
        html: "for loops can be nested; whereas forEach loops cannot.",
        text: "for loops can be nested; whereas forEach loops cannot.",
      },
    ],
    reference: {
      html: "<a href=\"https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/\">Reference Differences between forEach and for loop</a>",
      text: "Reference Differences between forEach and for loop",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q57. Which choice is an incorrect way to define an arrow function that returns an empty object?\n\n- [ ] => `({})`\n- [x] => `{}`\n- [ ] => `{ return {};}`\n- [ ] => `(({}))`\n\n[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q57. Which choice is an incorrect way to define an arrow function that returns an empty object?</h4>",
      text: "Q57. Which choice is an incorrect way to define an arrow function that returns an empty object?",
    },
    variants: [
      {
        isCorrect: false,
        html: "=&gt; <code>({})</code>",
        text: "=> ({})",
      },
      {
        isCorrect: true,
        html: "=&gt; <code>{}</code>",
        text: "=> {}",
      },
      {
        isCorrect: false,
        html: "=&gt; <code>{ return {};}</code>",
        text: "=> { return {};}",
      },
      {
        isCorrect: false,
        html: "=&gt; <code>(({}))</code>",
        text: "=> (({}))",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions\">Reference arrow functions</a>",
      text: "Reference arrow functions",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q58. Why might you choose to make your code asynchronous?\n\n- [x] to start tasks that might take some time without blocking subsequent tasks from executing immediately\n- [ ] to ensure that tasks further down in your code are not initiated until earlier tasks have completed\n- [ ] to make your code faster\n- [ ] to ensure that the call stack maintains a LIFO (Last in, First Out) structure\n\n**EXPLANATION:** `\"to ensure that tasks further down in your code are not initiated until earlier tasks have completed\" you use the normal (synchronous) flow where each command is executed sequentially. Asynchronous code allows you to break this sequence: start a long running function (AJAX call to an external service) and continue running the rest of the code in parallel.`\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q58. Why might you choose to make your code asynchronous?</h4>",
      text: "Q58. Why might you choose to make your code asynchronous?",
    },
    variants: [
      {
        isCorrect: true,
        html: "to start tasks that might take some time without blocking subsequent tasks from executing immediately",
        text: "to start tasks that might take some time without blocking subsequent tasks from executing immediately",
      },
      {
        isCorrect: false,
        html: "to ensure that tasks further down in your code are not initiated until earlier tasks have completed",
        text: "to ensure that tasks further down in your code are not initiated until earlier tasks have completed",
      },
      {
        isCorrect: false,
        html: "to make your code faster",
        text: "to make your code faster",
      },
      {
        isCorrect: false,
        html: "to ensure that the call stack maintains a LIFO (Last in, First Out) structure",
        text: "to ensure that the call stack maintains a LIFO (Last in, First Out) structure",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q59. Which expression evaluates to true?\n\n- [ ] `[3] == [3]`\n- [x] `3 == '3'`\n- [ ] `3 != '3'`\n- [ ] `3 === '3'`\n\n1. [Reference booleans](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)\n2. [Reference 2 - booleans](https://www.scaler.com/topics/boolean-in-javascript/)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q59. Which expression evaluates to true?</h4>",
      text: "Q59. Which expression evaluates to true?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>[3] == [3]</code>",
        text: "[3] == [3]",
      },
      {
        isCorrect: true,
        html: "<code>3 == '3'</code>",
        text: "3 == '3'",
      },
      {
        isCorrect: false,
        html: "<code>3 != '3'</code>",
        text: "3 != '3'",
      },
      {
        isCorrect: false,
        html: "<code>3 === '3'</code>",
        text: "3 === '3'",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">Reference booleans</a>",
      text: "Reference booleans",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q60. Which of these is a valid variable name?\n\n- [ ] 5thItem\n- [x] firstName\n- [ ] grand total\n- [ ] function\n\n[Reference coding conventions](https://www.w3schools.com/js/js_conventions.asp)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q60. Which of these is a valid variable name?</h4>",
      text: "Q60. Which of these is a valid variable name?",
    },
    variants: [
      {
        isCorrect: false,
        html: "5thItem",
        text: "5thItem",
      },
      {
        isCorrect: true,
        html: "firstName",
        text: "firstName",
      },
      {
        isCorrect: false,
        html: "grand total",
        text: "grand total",
      },
      {
        isCorrect: false,
        html: "function",
        text: "function",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_conventions.asp\">Reference coding conventions</a>",
      text: "Reference coding conventions",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q61. Which method cancels event default behavior?\n\n- [ ] `cancel()`\n- [ ] `stop()`\n- [x] `preventDefault()`\n- [ ] `prevent()`\n\n[Reference javascript events](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q61. Which method cancels event default behavior?</h4>",
      text: "Q61. Which method cancels event default behavior?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>cancel()</code>",
        text: "cancel()",
      },
      {
        isCorrect: false,
        html: "<code>stop()</code>",
        text: "stop()",
      },
      {
        isCorrect: true,
        html: "<code>preventDefault()</code>",
        text: "preventDefault()",
      },
      {
        isCorrect: false,
        html: "<code>prevent()</code>",
        text: "prevent()",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault\">Reference javascript events</a>",
      text: "Reference javascript events",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q62. Which method do you use to attach one DOM node to another?\n\n- [ ] `attachNode()`\n- [ ] `getNode()`\n- [ ] `querySelector()`\n- [x] `appendChild()`\n\n[Reference Node interface](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q62. Which method do you use to attach one DOM node to another?</h4>",
      text: "Q62. Which method do you use to attach one DOM node to another?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>attachNode()</code>",
        text: "attachNode()",
      },
      {
        isCorrect: false,
        html: "<code>getNode()</code>",
        text: "getNode()",
      },
      {
        isCorrect: false,
        html: "<code>querySelector()</code>",
        text: "querySelector()",
      },
      {
        isCorrect: true,
        html: "<code>appendChild()</code>",
        text: "appendChild()",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild\">Reference Node interface</a>",
      text: "Reference Node interface",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q63. What statement can be used to skip an iteration in a loop?\n\n- [ ] `break`\n- [ ] `pass`\n- [ ] `skip`\n- [x] `continue`\n\n[Reference break vs continue](https://www.w3schools.com/js/js_break.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q63. What statement can be used to skip an iteration in a loop?</h4>",
      text: "Q63. What statement can be used to skip an iteration in a loop?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>break</code>",
        text: "break",
      },
      {
        isCorrect: false,
        html: "<code>pass</code>",
        text: "pass",
      },
      {
        isCorrect: false,
        html: "<code>skip</code>",
        text: "skip",
      },
      {
        isCorrect: true,
        html: "<code>continue</code>",
        text: "continue",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_break.asp\">Reference break vs continue</a>",
      text: "Reference break vs continue",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q64. Which choice is a valid example for an arrow function?\n\n- [x] `(a,b) => c`\n- [ ] `a, b => {return c;}`\n- [ ] `a, b => c`\n- [ ] `{ a, b } => c`\n\n[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q64. Which choice is a valid example for an arrow function?</h4>",
      text: "Q64. Which choice is a valid example for an arrow function?",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>(a,b) =&gt; c</code>",
        text: "(a,b) => c",
      },
      {
        isCorrect: false,
        html: "<code>a, b =&gt; {return c;}</code>",
        text: "a, b => {return c;}",
      },
      {
        isCorrect: false,
        html: "<code>a, b =&gt; c</code>",
        text: "a, b => c",
      },
      {
        isCorrect: false,
        html: "<code>{ a, b } =&gt; c</code>",
        text: "{ a, b } => c",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions\">Reference arrow functions</a>",
      text: "Reference arrow functions",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q65. Which concept is defined as a template that can be used to generate different objects that share some shape and/or behavior?\n\n- [x] class\n- [ ] generator function\n- [ ] map\n- [ ] proxy\n\n[Reference javascript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q65. Which concept is defined as a template that can be used to generate different objects that share some shape and/or behavior?</h4>",
      text: "Q65. Which concept is defined as a template that can be used to generate different objects that share some shape and/or behavior?",
    },
    variants: [
      {
        isCorrect: true,
        html: "class",
        text: "class",
      },
      {
        isCorrect: false,
        html: "generator function",
        text: "generator function",
      },
      {
        isCorrect: false,
        html: "map",
        text: "map",
      },
      {
        isCorrect: false,
        html: "proxy",
        text: "proxy",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes\">Reference javascript classes</a>",
      text: "Reference javascript classes",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q66. How do you add a comment to JavaScript code?\n\n- [ ] `! This is a comment`\n- [ ] `# This is a comment`\n- [ ] `\\\\ This is a comment`\n- [x] `// This is a comment`\n\n[Reference comments in javascript](https://www.w3schools.com/js/js_comments.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q66. How do you add a comment to JavaScript code?</h4>",
      text: "Q66. How do you add a comment to JavaScript code?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>! This is a comment</code>",
        text: "! This is a comment",
      },
      {
        isCorrect: false,
        html: "<code># This is a comment</code>",
        text: "# This is a comment",
      },
      {
        isCorrect: false,
        html: "<code>\\\\ This is a comment</code>",
        text: "\\\\ This is a comment",
      },
      {
        isCorrect: true,
        html: "<code>// This is a comment</code>",
        text: "// This is a comment",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_comments.asp\">Reference comments in javascript</a>",
      text: "Reference comments in javascript",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q67. If you attempt to call a value as a function but the value is not a function, what kind of error would you get?\n\n- [x] TypeError\n- [ ] SystemError\n- [ ] SyntaxError\n- [ ] LogicError\n\n[Reference javascript errors](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q67. If you attempt to call a value as a function but the value is not a function, what kind of error would you get?</h4>",
      text: "Q67. If you attempt to call a value as a function but the value is not a function, what kind of error would you get?",
    },
    variants: [
      {
        isCorrect: true,
        html: "TypeError",
        text: "TypeError",
      },
      {
        isCorrect: false,
        html: "SystemError",
        text: "SystemError",
      },
      {
        isCorrect: false,
        html: "SyntaxError",
        text: "SyntaxError",
      },
      {
        isCorrect: false,
        html: "LogicError",
        text: "LogicError",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error\">Reference javascript errors</a>",
      text: "Reference javascript errors",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q68. Which method is called automatically when an object is initialized?\n\n- [ ] create()\n- [ ] new()\n- [x] constructor()\n- [ ] init()\n\n[Reference javascript constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q68. Which method is called automatically when an object is initialized?</h4>",
      text: "Q68. Which method is called automatically when an object is initialized?",
    },
    variants: [
      {
        isCorrect: false,
        html: "create()",
        text: "create()",
      },
      {
        isCorrect: false,
        html: "new()",
        text: "new()",
      },
      {
        isCorrect: true,
        html: "constructor()",
        text: "constructor()",
      },
      {
        isCorrect: false,
        html: "init()",
        text: "init()",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor\">Reference javascript constructors</a>",
      text: "Reference javascript constructors",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q69. What is the result of running the statement shown?\n\n```js\nlet a = 5;\nconsole.log(++a);\n```\n\n- [ ] 4\n- [ ] 10\n- [x] 6\n- [ ] 5\n\n[Reference ++x vs x++](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q69. What is the result of running the statement shown?</h4>",
      text: "Q69. What is the result of running the statement shown?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> a <span class=\"token operator\">=</span> <span class=\"token number\">5</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token operator\">++</span>a<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "let a = 5;\nconsole.log(++a);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "4",
        text: "4",
      },
      {
        isCorrect: false,
        html: "10",
        text: "10",
      },
      {
        isCorrect: true,
        html: "6",
        text: "6",
      },
      {
        isCorrect: false,
        html: "5",
        text: "5",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment\">Reference ++x vs x++</a>",
      text: "Reference ++x vs x++",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q70. You've written the event listener shown below for a form button, but each time you click the button, the page reloads. Which statement would stop this from happening?\n\n```js\nbutton.addEventListener(\n  'click',\n  function (e) {\n    button.className = 'clicked';\n  },\n  false,\n);\n```\n\n- [ ] `e.blockReload();`\n- [ ] `button.preventDefault();`\n- [ ] `button.blockReload();`\n- [x] `e.preventDefault();`\n\n[Reference events in javascript](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q70. You've written the event listener shown below for a form button, but each time you click the button, the page reloads. Which statement would stop this from happening?</h4>",
      text: "Q70. You've written the event listener shown below for a form button, but each time you click the button, the page reloads. Which statement would stop this from happening?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\">button<span class=\"token punctuation\">.</span><span class=\"token function\">addEventListener</span><span class=\"token punctuation\">(</span>\n  <span class=\"token string\">'click'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">e</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    button<span class=\"token punctuation\">.</span>className <span class=\"token operator\">=</span> <span class=\"token string\">'clicked'</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "button.addEventListener(\n  'click',\n  function (e) {\n    button.className = 'clicked';\n  },\n  false,\n);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>e.blockReload();</code>",
        text: "e.blockReload();",
      },
      {
        isCorrect: false,
        html: "<code>button.preventDefault();</code>",
        text: "button.preventDefault();",
      },
      {
        isCorrect: false,
        html: "<code>button.blockReload();</code>",
        text: "button.blockReload();",
      },
      {
        isCorrect: true,
        html: "<code>e.preventDefault();</code>",
        text: "e.preventDefault();",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault\">Reference events in javascript</a>",
      text: "Reference events in javascript",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q71. Which statement represents the starting code converted to an IIFE?\n\n- [ ] `function() { console.log('lorem ipsum'); }()();`\n- [ ] `function() { console.log('lorem ipsum'); }();`\n- [x] `(function() { console.log('lorem ipsum'); })();`\n\n[Reference what is an Immediately Invoked Function Expression](https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q71. Which statement represents the starting code converted to an IIFE?</h4>",
      text: "Q71. Which statement represents the starting code converted to an IIFE?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>function() { console.log('lorem ipsum'); }()();</code>",
        text: "function() { console.log('lorem ipsum'); }()();",
      },
      {
        isCorrect: false,
        html: "<code>function() { console.log('lorem ipsum'); }();</code>",
        text: "function() { console.log('lorem ipsum'); }();",
      },
      {
        isCorrect: true,
        html: "<code>(function() { console.log('lorem ipsum'); })();</code>",
        text: "(function() { console.log('lorem ipsum'); })();",
      },
    ],
    reference: {
      html: "<a href=\"https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174\">Reference what is an Immediately Invoked Function Expression</a>",
      text: "Reference what is an Immediately Invoked Function Expression",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q72. Which statement selects all img elements in the DOM tree?\n\n- [ ] `Document.querySelector('img')`\n- [ ] `Document.querySelectorAll('<img>')`\n- [x] `Document.querySelectorAll('img')`\n- [ ] `Document.querySelector('<img>')`\n\n[Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q72. Which statement selects all img elements in the DOM tree?</h4>",
      text: "Q72. Which statement selects all img elements in the DOM tree?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>Document.querySelector('img')</code>",
        text: "Document.querySelector('img')",
      },
      {
        isCorrect: false,
        html: "<code>Document.querySelectorAll('&lt;img&gt;')</code>",
        text: "Document.querySelectorAll('<img>')",
      },
      {
        isCorrect: true,
        html: "<code>Document.querySelectorAll('img')</code>",
        text: "Document.querySelectorAll('img')",
      },
      {
        isCorrect: false,
        html: "<code>Document.querySelector('&lt;img&gt;')</code>",
        text: "Document.querySelector('<img>')",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector\">Reference query selector</a>",
      text: "Reference query selector",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q73. Why would you choose an asynchronous structure for your code?\n\n- [ ] To use ES6 syntax\n- [x] To start tasks that might take some time without blocking subsequent tasks from executing immediately\n- [ ] To ensure that parsers enforce all JavaScript syntax rules when processing your code\n- [ ] To ensure that tasks further down in your code aren't initiated until earlier tasks have completed\n\n[Reference async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q73. Why would you choose an asynchronous structure for your code?</h4>",
      text: "Q73. Why would you choose an asynchronous structure for your code?",
    },
    variants: [
      {
        isCorrect: false,
        html: "To use ES6 syntax",
        text: "To use ES6 syntax",
      },
      {
        isCorrect: true,
        html: "To start tasks that might take some time without blocking subsequent tasks from executing immediately",
        text: "To start tasks that might take some time without blocking subsequent tasks from executing immediately",
      },
      {
        isCorrect: false,
        html: "To ensure that parsers enforce all JavaScript syntax rules when processing your code",
        text: "To ensure that parsers enforce all JavaScript syntax rules when processing your code",
      },
      {
        isCorrect: false,
        html: "To ensure that tasks further down in your code aren't initiated until earlier tasks have completed",
        text: "To ensure that tasks further down in your code aren't initiated until earlier tasks have completed",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function\">Reference async function</a>",
      text: "Reference async function",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q74. What is the HTTP verb to request the contents of an existing resource?\n\n- [ ] DELETE\n- [x] GET\n- [ ] PATCH\n- [ ] POST\n\n[Reference http methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q74. What is the HTTP verb to request the contents of an existing resource?</h4>",
      text: "Q74. What is the HTTP verb to request the contents of an existing resource?",
    },
    variants: [
      {
        isCorrect: false,
        html: "DELETE",
        text: "DELETE",
      },
      {
        isCorrect: true,
        html: "GET",
        text: "GET",
      },
      {
        isCorrect: false,
        html: "PATCH",
        text: "PATCH",
      },
      {
        isCorrect: false,
        html: "POST",
        text: "POST",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods\">Reference http methods</a>",
      text: "Reference http methods",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q75. Which event is fired on a text field within a form when a user tabs to it, or clicks or touches it?\n\n- [x] focus\n- [ ] blur\n- [ ] hover\n- [ ] enter\n\n[Reference javascript events](https://developer.mozilla.org/en-US/docs/Web/Events)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q75. Which event is fired on a text field within a form when a user tabs to it, or clicks or touches it?</h4>",
      text: "Q75. Which event is fired on a text field within a form when a user tabs to it, or clicks or touches it?",
    },
    variants: [
      {
        isCorrect: true,
        html: "focus",
        text: "focus",
      },
      {
        isCorrect: false,
        html: "blur",
        text: "blur",
      },
      {
        isCorrect: false,
        html: "hover",
        text: "hover",
      },
      {
        isCorrect: false,
        html: "enter",
        text: "enter",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/Events\">Reference javascript events</a>",
      text: "Reference javascript events",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q76. What is the result in the console of running this code?\n\n```js\nfunction logThis() {\n  console.log(this);\n}\nlogThis();\n```\n\n- [ ] function\n- [ ] undefined\n- [ ] Function.prototype\n- [x] window\n\n[Reference what is the javascript window](https://www.w3schools.com/js/js_window.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q76. What is the result in the console of running this code?</h4>",
      text: "Q76. What is the result in the console of running this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">function</span> <span class=\"token function\">logThis</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token function\">logThis</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "function logThis() {\n  console.log(this);\n}\nlogThis();\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "function",
        text: "function",
      },
      {
        isCorrect: false,
        html: "undefined",
        text: "undefined",
      },
      {
        isCorrect: false,
        html: "Function.prototype",
        text: "Function.prototype",
      },
      {
        isCorrect: true,
        html: "window",
        text: "window",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_window.asp\">Reference what is the javascript window</a>",
      text: "Reference what is the javascript window",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q77. Which class-based component is equivalent to this function component?\n\n```js\nconst Greeting = ({ name }) => <h1>Hello {name}!</h1>;\n```\n\n- [x] `class Greeting extends React.Component { render() { return <h1>Hello {this.props.name}!</h1>; } }`\n- [ ] `class Greeting extends React.Component { constructor() { return <h1>Hello {this.props.name}!</h1>; } }`\n- [ ] `class Greeting extends React.Component { <h>Hello {this.props.name}!</h>; } }`\n- [ ] `class Greeting extends React.Component { render({ name }) { return <h1>Hello {name}!</h1>; } }`\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q77. Which class-based component is equivalent to this function component?</h4>",
      text: "Q77. Which class-based component is equivalent to this function component?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> <span class=\"token function-variable function\">Greeting</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> name <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> <span class=\"token operator\">&lt;</span>h1<span class=\"token operator\">&gt;</span>Hello <span class=\"token punctuation\">{</span>name<span class=\"token punctuation\">}</span><span class=\"token operator\">!</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h1<span class=\"token operator\">&gt;</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const Greeting = ({ name }) => <h1>Hello {name}!</h1>;\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>class Greeting extends React.Component { render() { return &lt;h1&gt;Hello {this.props.name}!&lt;/h1&gt;; } }</code>",
        text: "class Greeting extends React.Component { render() { return <h1>Hello {this.props.name}!</h1>; } }",
      },
      {
        isCorrect: false,
        html: "<code>class Greeting extends React.Component { constructor() { return &lt;h1&gt;Hello {this.props.name}!&lt;/h1&gt;; } }</code>",
        text: "class Greeting extends React.Component { constructor() { return <h1>Hello {this.props.name}!</h1>; } }",
      },
      {
        isCorrect: false,
        html: "<code>class Greeting extends React.Component { &lt;h&gt;Hello {this.props.name}!&lt;/h&gt;; } }</code>",
        text: "class Greeting extends React.Component { <h>Hello {this.props.name}!</h>; } }",
      },
      {
        isCorrect: false,
        html: "<code>class Greeting extends React.Component { render({ name }) { return &lt;h1&gt;Hello {name}!&lt;/h1&gt;; } }</code>",
        text: "class Greeting extends React.Component { render({ name }) { return <h1>Hello {name}!</h1>; } }",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q78. Which class-based lifecycle method would be called at the same time as this effect Hook?\n\n```js\nuseEffect(() => {\n  // do things\n}, []);\n```\n\n- [ ] componentWillUnmount\n- [ ] componentDidUpdate\n- [ ] render\n- [x] componentDidMount\n\n[Reference](https://reactjs.org/docs/react-component.html)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q78. Which class-based lifecycle method would be called at the same time as this effect Hook?</h4>",
      text: "Q78. Which class-based lifecycle method would be called at the same time as this effect Hook?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token function\">useEffect</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\">// do things</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "useEffect(() => {\n  // do things\n}, []);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "componentWillUnmount",
        text: "componentWillUnmount",
      },
      {
        isCorrect: false,
        html: "componentDidUpdate",
        text: "componentDidUpdate",
      },
      {
        isCorrect: false,
        html: "render",
        text: "render",
      },
      {
        isCorrect: true,
        html: "componentDidMount",
        text: "componentDidMount",
      },
    ],
    reference: {
      html: "<a href=\"https://reactjs.org/docs/react-component.html\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q79. What is the output of this code?\n\n```js\nvar obj;\nconsole.log(obj);\n```\n\n- [ ] `ReferenceError: obj is not defined`\n- [ ] `{}`\n- [x] `undefined`\n- [ ] `null`\n\n[Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q79. What is the output of this code?</h4>",
      text: "Q79. What is the output of this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">var</span> obj<span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "var obj;\nconsole.log(obj);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>ReferenceError: obj is not defined</code>",
        text: "ReferenceError: obj is not defined",
      },
      {
        isCorrect: false,
        html: "<code>{}</code>",
        text: "{}",
      },
      {
        isCorrect: true,
        html: "<code>undefined</code>",
        text: "undefined",
      },
      {
        isCorrect: false,
        html: "<code>null</code>",
        text: "null",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects\">Reference working with objects</a>",
      text: "Reference working with objects",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q80. How would you use the TaxCalculator to determine the amount of tax on \\$50?\n\n```js\nclass TaxCalculator {\n  static calculate(total) {\n    return total * 0.05;\n  }\n}\n```\n\n- [ ] calculate(50);\n- [ ] new TaxCalculator().calculate(\\$50);\n- [x] TaxCalculator.calculate(50);\n- [ ] new TaxCalculator().calculate(50);\n\n[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q80. How would you use the TaxCalculator to determine the amount of tax on $50?</h4>",
      text: "Q80. How would you use the TaxCalculator to determine the amount of tax on $50?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">class</span> <span class=\"token class-name\">TaxCalculator</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">static</span> <span class=\"token function\">calculate</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">total</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> total <span class=\"token operator\">*</span> <span class=\"token number\">0.05</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      text: "class TaxCalculator {\n  static calculate(total) {\n    return total * 0.05;\n  }\n}\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "calculate(50);",
        text: "calculate(50);",
      },
      {
        isCorrect: false,
        html: "new TaxCalculator().calculate($50);",
        text: "new TaxCalculator().calculate($50);",
      },
      {
        isCorrect: true,
        html: "TaxCalculator.calculate(50);",
        text: "TaxCalculator.calculate(50);",
      },
      {
        isCorrect: false,
        html: "new TaxCalculator().calculate(50);",
        text: "new TaxCalculator().calculate(50);",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_functions.asp\">Reference functions in javascript</a>",
      text: "Reference functions in javascript",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q81. What is wrong with this code?\n\n```js\nconst foo = {\n  bar() {\n    console.log('Hello, world!');\n  },\n  name: 'Albert',\n  age: 26,\n};\n```\n\n- [ ] The function bar needs to be defined as a key/value pair.\n- [ ] Trailing commas are not allowed in JavaScript.\n- [ ] Functions cannot be declared as properties of objects.\n- [x] Nothing, there are no errors.\n\n1. [Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)\n2. [Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q81. What is wrong with this code?</h4>",
      text: "Q81. What is wrong with this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> foo <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">bar</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Hello, world!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token literal-property property\">name</span><span class=\"token operator\">:</span> <span class=\"token string\">'Albert'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token literal-property property\">age</span><span class=\"token operator\">:</span> <span class=\"token number\">26</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const foo = {\n  bar() {\n    console.log('Hello, world!');\n  },\n  name: 'Albert',\n  age: 26,\n};\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "The function bar needs to be defined as a key/value pair.",
        text: "The function bar needs to be defined as a key/value pair.",
      },
      {
        isCorrect: false,
        html: "Trailing commas are not allowed in JavaScript.",
        text: "Trailing commas are not allowed in JavaScript.",
      },
      {
        isCorrect: false,
        html: "Functions cannot be declared as properties of objects.",
        text: "Functions cannot be declared as properties of objects.",
      },
      {
        isCorrect: true,
        html: "Nothing, there are no errors.",
        text: "Nothing, there are no errors.",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_functions.asp\">Reference functions in javascript</a>",
      text: "Reference functions in javascript",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q82. What will be logged to the console?\n\n```js\nconsole.log('I');\nsetTimeout(() => {\n  console.log('love');\n}, 0);\nconsole.log('Javascript!');\n```\n\n- [x] .\n\n```plaintext\nI\nJavascript!\nlove\n```\n\n- [ ] .\n\n```plaintext\nlove\nI\nJavascript!\n```\n\n- [ ] The output may change with each execution of code and cannot be determined.\n\n- [ ] .\n\n```plaintext\nI\nlove\nJavascript!\n```\n\n**Reference**\nhttps://developer.mozilla.org/en-US/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified especially see the 'late timeouts' section.\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q82. What will be logged to the console?</h4>",
      text: "Q82. What will be logged to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\">console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'I'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'love'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Javascript!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "console.log('I');\nsetTimeout(() => {\n  console.log('love');\n}, 0);\nconsole.log('Javascript!');\n",
    },
    variants: [
      {
        isCorrect: true,
        html: ".<br><pre><code class=\"language-plaintext\">I\nJavascript!\nlove\n</code></pre>",
        text: ".I\nJavascript!\nlove\n",
      },
      {
        isCorrect: false,
        html: ".<br><pre><code class=\"language-plaintext\">love\nI\nJavascript!\n</code></pre>",
        text: ".love\nI\nJavascript!\n",
      },
      {
        isCorrect: false,
        html: " ] The output may change with each execution of code and cannot be determined.<p></p>",
        text: " ] The output may change with each execution of code and cannot be determined.",
      },
      {
        isCorrect: false,
        html: " ] .<p></p><br><pre><code class=\"language-plaintext\">I\nlove\nJavascript!\n</code></pre>",
        text: " ] .I\nlove\nJavascript!\n",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q83. What will this code log to the console?\n\n```js\nconst foo = [1, 2, 3];\nconst [n] = foo;\nconsole.log(n);\n```\n\n- [x] 1\n- [ ] undefined\n- [ ] NaN\n- [ ] Nothing--this is not proper JavaScript syntax and will throw an error.\n\n[Reference array deconstruction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q83. What will this code log to the console?</h4>",
      text: "Q83. What will this code log to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> foo <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> <span class=\"token number\">3</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">[</span>n<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> foo<span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const foo = [1, 2, 3];\nconst [n] = foo;\nconsole.log(n);\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "1",
        text: "1",
      },
      {
        isCorrect: false,
        html: "undefined",
        text: "undefined",
      },
      {
        isCorrect: false,
        html: "NaN",
        text: "NaN",
      },
      {
        isCorrect: false,
        html: "Nothing--this is not proper JavaScript syntax and will throw an error.",
        text: "Nothing--this is not proper JavaScript syntax and will throw an error.",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment\">Reference array deconstruction</a>",
      text: "Reference array deconstruction",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q84. How do you remove the property name from this object?\n\n```js\nconst foo = {\n  name: 'Albert',\n};\n```\n\n- [ ] delete name from foo;\n- [x] delete foo.name;\n- [ ] del foo.name;\n- [ ] remove foo.name;\n\n[Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q84. How do you remove the property name from this object?</h4>",
      text: "Q84. How do you remove the property name from this object?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> foo <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token literal-property property\">name</span><span class=\"token operator\">:</span> <span class=\"token string\">'Albert'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const foo = {\n  name: 'Albert',\n};\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "delete name from foo;",
        text: "delete name from foo;",
      },
      {
        isCorrect: true,
        html: "delete foo.name;",
        text: "delete foo.name;",
      },
      {
        isCorrect: false,
        html: "del foo.name;",
        text: "del foo.name;",
      },
      {
        isCorrect: false,
        html: "remove foo.name;",
        text: "remove foo.name;",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects\">Reference working with objects</a>",
      text: "Reference working with objects",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q85. What is the difference between the `map()` and the `forEach()` methods on the Array prototype?\n\n- [ ] There is no difference.\n- [ ] The `forEach()` method returns a single output value, whereas the `map()` method performs operation on each value in the array.\n- [x] The map() methods returns a new array with a transformation applied on each item in the original array, whereas the `forEach()` method iterates through an array with no return value.\n- [ ] The `forEach()` methods returns a new array with a transformation applied on each item in the original array, whereas the `map()` method iterates through an array with no return value.\n\n1. [Reference map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)\n2. [Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q85. What is the difference between the <code>map()</code> and the <code>forEach()</code> methods on the Array prototype?</h4>",
      text: "Q85. What is the difference between the map() and the forEach() methods on the Array prototype?",
    },
    variants: [
      {
        isCorrect: false,
        html: "There is no difference.",
        text: "There is no difference.",
      },
      {
        isCorrect: false,
        html: "The <code>forEach()</code> method returns a single output value, whereas the <code>map()</code> method performs operation on each value in the array.",
        text: "The forEach() method returns a single output value, whereas the map() method performs operation on each value in the array.",
      },
      {
        isCorrect: true,
        html: "The map() methods returns a new array with a transformation applied on each item in the original array, whereas the <code>forEach()</code> method iterates through an array with no return value.",
        text: "The map() methods returns a new array with a transformation applied on each item in the original array, whereas the forEach() method iterates through an array with no return value.",
      },
      {
        isCorrect: false,
        html: "The <code>forEach()</code> methods returns a new array with a transformation applied on each item in the original array, whereas the <code>map()</code> method iterates through an array with no return value.",
        text: "The forEach() methods returns a new array with a transformation applied on each item in the original array, whereas the map() method iterates through an array with no return value.",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map\">Reference map</a>",
      text: "Reference map",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q86. Which concept does this code illustrate?\n\n```js\nfunction makeAdder(x) {\n  return function (y) {\n    return x + y;\n  };\n}\n\nvar addFive = makeAdder(5);\nconsole.log(addFive(3));\n```\n\n- [ ] overloading\n- [ ] closure\n- [x] currying\n- [ ] overriding\n\n[Reference currying](https://javascript.info/currying-partials)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q86. Which concept does this code illustrate?</h4>",
      text: "Q86. Which concept does this code illustrate?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">function</span> <span class=\"token function\">makeAdder</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">x</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">y</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> x <span class=\"token operator\">+</span> y<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">var</span> addFive <span class=\"token operator\">=</span> <span class=\"token function\">makeAdder</span><span class=\"token punctuation\">(</span><span class=\"token number\">5</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token function\">addFive</span><span class=\"token punctuation\">(</span><span class=\"token number\">3</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "function makeAdder(x) {\n  return function (y) {\n    return x + y;\n  };\n}\n\nvar addFive = makeAdder(5);\nconsole.log(addFive(3));\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "overloading",
        text: "overloading",
      },
      {
        isCorrect: false,
        html: "closure",
        text: "closure",
      },
      {
        isCorrect: true,
        html: "currying",
        text: "currying",
      },
      {
        isCorrect: false,
        html: "overriding",
        text: "overriding",
      },
    ],
    reference: {
      html: "<a href=\"https://javascript.info/currying-partials\">Reference currying</a>",
      text: "Reference currying",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q87. Which tag pair is used in HTML to embed JavaScript?\n\n- [x] `<script></script>`\n- [ ] `<js></js>`\n- [ ] `<javascript></javascript>`\n- [ ] `<code></code>`\n\n[Reference add js to html file](https://www.w3schools.com/tags/tag_script.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q87. Which tag pair is used in HTML to embed JavaScript?</h4>",
      text: "Q87. Which tag pair is used in HTML to embed JavaScript?",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>&lt;script&gt;&lt;/script&gt;</code>",
        text: "<script></script>",
      },
      {
        isCorrect: false,
        html: "<code>&lt;js&gt;&lt;/js&gt;</code>",
        text: "<js></js>",
      },
      {
        isCorrect: false,
        html: "<code>&lt;javascript&gt;&lt;/javascript&gt;</code>",
        text: "<javascript></javascript>",
      },
      {
        isCorrect: false,
        html: "<code>&lt;code&gt;&lt;/code&gt;</code>",
        text: "<code></code>",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/tags/tag_script.asp\">Reference add js to html file</a>",
      text: "Reference add js to html file",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q88. If your app receives data from a third-party API, which HTTP response header must the server specify to allow exceptions to the same-origin policy?\n\n- [ ] Security-Mode\n- [x] Access-Control-Allow-Origin\n- [ ] Different-Origin\n- [ ] Same-Origin\n\n[Reference Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q88. If your app receives data from a third-party API, which HTTP response header must the server specify to allow exceptions to the same-origin policy?</h4>",
      text: "Q88. If your app receives data from a third-party API, which HTTP response header must the server specify to allow exceptions to the same-origin policy?",
    },
    variants: [
      {
        isCorrect: false,
        html: "Security-Mode",
        text: "Security-Mode",
      },
      {
        isCorrect: true,
        html: "Access-Control-Allow-Origin",
        text: "Access-Control-Allow-Origin",
      },
      {
        isCorrect: false,
        html: "Different-Origin",
        text: "Different-Origin",
      },
      {
        isCorrect: false,
        html: "Same-Origin",
        text: "Same-Origin",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS\">Reference Cross-Origin Resource Sharing</a>",
      text: "Reference Cross-Origin Resource Sharing",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q90. What is the output of this code?\n\n```js\nlet rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo'];\nrainForests.splice(0, 2);\nconsole.log(rainForests);\n```\n\n- [ ] `[\"Amazon\",\"Borneo\",\"Cerrado\",\"Congo\"]`\n- [x] `[\"Cerrado\", \"Congo\"]`\n- [ ] `[\"Congo\"]`\n- [ ] `[\"Amazon\",\"Borneo\"]`\n\n[Reference array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q90. What is the output of this code?</h4>",
      text: "Q90. What is the output of this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> rainForests <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Amazon'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Borneo'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Cerrado'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Congo'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\nrainForests<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>rainForests<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "let rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo'];\nrainForests.splice(0, 2);\nconsole.log(rainForests);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>[\"Amazon\",\"Borneo\",\"Cerrado\",\"Congo\"]</code>",
        text: "[\"Amazon\",\"Borneo\",\"Cerrado\",\"Congo\"]",
      },
      {
        isCorrect: true,
        html: "<code>[\"Cerrado\", \"Congo\"]</code>",
        text: "[\"Cerrado\", \"Congo\"]",
      },
      {
        isCorrect: false,
        html: "<code>[\"Congo\"]</code>",
        text: "[\"Congo\"]",
      },
      {
        isCorrect: false,
        html: "<code>[\"Amazon\",\"Borneo\"]</code>",
        text: "[\"Amazon\",\"Borneo\"]",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array\">Reference array methods</a>",
      text: "Reference array methods",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q91. Which missing line would allow you to create five variables(one,two,three,four,five) that correspond to their numerical values (1,2,3,4,5)?\n\n```js\nconst numbers = [1, 2, 3, 4, 5];\n//MISSING LINE\n```\n\n- [x] `const [one,two,three,four,five]=numbers`\n- [ ] `const {one,two,three,four,five}=numbers`\n- [ ] `const [one,two,three,four,five]=[numbers]`\n- [ ] `const {one,two,three,four,five}={numbers}`\n\n[Reference array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q91. Which missing line would allow you to create five variables(one,two,three,four,five) that correspond to their numerical values (1,2,3,4,5)?</h4>",
      text: "Q91. Which missing line would allow you to create five variables(one,two,three,four,five) that correspond to their numerical values (1,2,3,4,5)?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> numbers <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span> <span class=\"token number\">5</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\">//MISSING LINE</span>\n</code></pre>",
      text: "const numbers = [1, 2, 3, 4, 5];\n//MISSING LINE\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>const [one,two,three,four,five]=numbers</code>",
        text: "const [one,two,three,four,five]=numbers",
      },
      {
        isCorrect: false,
        html: "<code>const {one,two,three,four,five}=numbers</code>",
        text: "const {one,two,three,four,five}=numbers",
      },
      {
        isCorrect: false,
        html: "<code>const [one,two,three,four,five]=[numbers]</code>",
        text: "const [one,two,three,four,five]=[numbers]",
      },
      {
        isCorrect: false,
        html: "<code>const {one,two,three,four,five}={numbers}</code>",
        text: "const {one,two,three,four,five}={numbers}",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment\">Reference array destructuring</a>",
      text: "Reference array destructuring",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q92. What will this code print?\n\n```js\nconst obj = {\n  a: 1,\n  b: 2,\n  c: 3,\n};\n\nconst obj2 = {\n  ...obj,\n  a: 0,\n};\n\nconsole.log(obj2.a, obj2.b);\n```\n\n- [ ] Nothing, it will throw an error\n- [x] 0 2\n- [ ] undefined 2\n- [ ] undefined 2\n\n[Reference spread syntax es6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q92. What will this code print?</h4>",
      text: "Q92. What will this code print?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token literal-property property\">a</span><span class=\"token operator\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n  <span class=\"token literal-property property\">b</span><span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n  <span class=\"token literal-property property\">c</span><span class=\"token operator\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> obj2 <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token operator\">...</span>obj<span class=\"token punctuation\">,</span>\n  <span class=\"token literal-property property\">a</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>obj2<span class=\"token punctuation\">.</span>a<span class=\"token punctuation\">,</span> obj2<span class=\"token punctuation\">.</span>b<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const obj = {\n  a: 1,\n  b: 2,\n  c: 3,\n};\n\nconst obj2 = {\n  ...obj,\n  a: 0,\n};\n\nconsole.log(obj2.a, obj2.b);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "Nothing, it will throw an error",
        text: "Nothing, it will throw an error",
      },
      {
        isCorrect: true,
        html: "0 2",
        text: "0 2",
      },
      {
        isCorrect: false,
        html: "undefined 2",
        text: "undefined 2",
      },
      {
        isCorrect: false,
        html: "undefined 2",
        text: "undefined 2",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax\">Reference spread syntax es6</a>",
      text: "Reference spread syntax es6",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q93. Which line could you add to this code to print \"jaguar\" to the console?\n\n```js\nlet animals = ['jaguar', 'eagle'];\n//Missing Line\nconsole.log(animals.pop()); //Prints jaguar\n```\n\n- [ ] `animals.filter(e => e === \"jaguar\");`\n- [x] `animals.reverse();`\n- [ ] `animals.shift();`\n- [x] `animals.pop();`\n\n**Note:** `this question has two correct answers.`\n\n[Reference Javascript Array Reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q93. Which line could you add to this code to print \"jaguar\" to the console?</h4>",
      text: "Q93. Which line could you add to this code to print \"jaguar\" to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> animals <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'jaguar'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'eagle'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\">//Missing Line</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>animals<span class=\"token punctuation\">.</span><span class=\"token function\">pop</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">//Prints jaguar</span>\n</code></pre>",
      text: "let animals = ['jaguar', 'eagle'];\n//Missing Line\nconsole.log(animals.pop()); //Prints jaguar\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>animals.filter(e =&gt; e === \"jaguar\");</code>",
        text: "animals.filter(e => e === \"jaguar\");",
      },
      {
        isCorrect: true,
        html: "<code>animals.reverse();</code>",
        text: "animals.reverse();",
      },
      {
        isCorrect: false,
        html: "<code>animals.shift();</code>",
        text: "animals.shift();",
      },
      {
        isCorrect: true,
        html: "<code>animals.pop();</code>",
        text: "animals.pop();",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse\">Reference Javascript Array Reverse</a>",
      text: "Reference Javascript Array Reverse",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q94. What line is missing from this code?\n\n```js\n//Missing Line\nfor (var i = 0; i < vowels.length; i++) {\n  console.log(vowels[i]);\n  //Each letter printed on a separate line as follows;\n  //a\n  //e\n  //i\n  //o\n  //u\n}\n```\n\n- [ ] `let vowels = \"aeiou\".toArray();`\n- [ ] `let vowels = Array.of(\"aeiou\");`\n- [ ] `let vowels = {\"a\", \"e\", \"i\", \"o\", \"u\"};`\n- [x] `let vowels = \"aeiou\";`\n\n[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q94. What line is missing from this code?</h4>",
      text: "Q94. What line is missing from this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token comment\">//Missing Line</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">var</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> vowels<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>vowels<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token comment\">//Each letter printed on a separate line as follows;</span>\n  <span class=\"token comment\">//a</span>\n  <span class=\"token comment\">//e</span>\n  <span class=\"token comment\">//i</span>\n  <span class=\"token comment\">//o</span>\n  <span class=\"token comment\">//u</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      text: "//Missing Line\nfor (var i = 0; i < vowels.length; i++) {\n  console.log(vowels[i]);\n  //Each letter printed on a separate line as follows;\n  //a\n  //e\n  //i\n  //o\n  //u\n}\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>let vowels = \"aeiou\".toArray();</code>",
        text: "let vowels = \"aeiou\".toArray();",
      },
      {
        isCorrect: false,
        html: "<code>let vowels = Array.of(\"aeiou\");</code>",
        text: "let vowels = Array.of(\"aeiou\");",
      },
      {
        isCorrect: false,
        html: "<code>let vowels = {\"a\", \"e\", \"i\", \"o\", \"u\"};</code>",
        text: "let vowels = {\"a\", \"e\", \"i\", \"o\", \"u\"};",
      },
      {
        isCorrect: true,
        html: "<code>let vowels = \"aeiou\";</code>",
        text: "let vowels = \"aeiou\";",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_arrays.asp\">Reference working with arrays</a>",
      text: "Reference working with arrays",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q95. What will be logged to the console?\n\n```js\nconst x = 6 % 2;\nconst y = x ? 'One' : 'Two';\nconsole.log(y);\n```\n\n- [ ] undefined\n- [ ] One\n- [ ] true\n- [x] Two\n\n**Note:** `this question is same with Q46.`\n[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q95. What will be logged to the console?</h4>",
      text: "Q95. What will be logged to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> x <span class=\"token operator\">=</span> <span class=\"token number\">6</span> <span class=\"token operator\">%</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> y <span class=\"token operator\">=</span> x <span class=\"token operator\">?</span> <span class=\"token string\">'One'</span> <span class=\"token operator\">:</span> <span class=\"token string\">'Two'</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>y<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const x = 6 % 2;\nconst y = x ? 'One' : 'Two';\nconsole.log(y);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "undefined",
        text: "undefined",
      },
      {
        isCorrect: false,
        html: "One",
        text: "One",
      },
      {
        isCorrect: false,
        html: "true",
        text: "true",
      },
      {
        isCorrect: true,
        html: "Two",
        text: "Two",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator\">Reference ternary operator js</a>",
      text: "Reference ternary operator js",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q96. How would you access the word It from this multidimensional array?\n\n`let matrix = [[\"You\",\"Can\"],[\"Do\",\"It\"],[\"!\",\"!\",\"!\"]];`\n\n- [ ] `matrix[1[2]]`\n- [x] `matrix[1][1]`\n- [ ] `matrix[1,2]`\n- [ ] `matrix[1][2]`\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q96. How would you access the word It from this multidimensional array?</h4>",
      text: "Q96. How would you access the word It from this multidimensional array?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>matrix[1[2]]</code>",
        text: "matrix[1[2]]",
      },
      {
        isCorrect: true,
        html: "<code>matrix[1][1]</code>",
        text: "matrix[1][1]",
      },
      {
        isCorrect: false,
        html: "<code>matrix[1,2]</code>",
        text: "matrix[1,2]",
      },
      {
        isCorrect: false,
        html: "<code>matrix[1][2]</code>",
        text: "matrix[1][2]",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q97. What does this code do?\n\n```js\nconst animals = ['Rabbit', 'Dog', 'Cat'];\nanimals.unshift('Lizard');\n```\n\n- [x] It adds \"Lizard\" to the start of the animals array.\n- [ ] It adds \"Lizard\" to the end of the animals array.\n- [ ] It replaces \"Rabbit\" with \"Lizard\" in the animals array.\n- [ ] It replaces \"Cat\" with \"Lizard\" in the animals array.\n\n[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q97. What does this code do?</h4>",
      text: "Q97. What does this code do?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> animals <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Rabbit'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Dog'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Cat'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\nanimals<span class=\"token punctuation\">.</span><span class=\"token function\">unshift</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Lizard'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const animals = ['Rabbit', 'Dog', 'Cat'];\nanimals.unshift('Lizard');\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "It adds \"Lizard\" to the start of the animals array.",
        text: "It adds \"Lizard\" to the start of the animals array.",
      },
      {
        isCorrect: false,
        html: "It adds \"Lizard\" to the end of the animals array.",
        text: "It adds \"Lizard\" to the end of the animals array.",
      },
      {
        isCorrect: false,
        html: "It replaces \"Rabbit\" with \"Lizard\" in the animals array.",
        text: "It replaces \"Rabbit\" with \"Lizard\" in the animals array.",
      },
      {
        isCorrect: false,
        html: "It replaces \"Cat\" with \"Lizard\" in the animals array.",
        text: "It replaces \"Cat\" with \"Lizard\" in the animals array.",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_arrays.asp\">Reference working with arrays</a>",
      text: "Reference working with arrays",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q98. What is the output of this code?\n\n```js\nlet x = 6 + 3 + '3';\nconsole.log(x);\n```\n\n- [x] 93\n- [ ] 12\n- [ ] 66\n- [ ] 633\n\n[Reference type coercion](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q98. What is the output of this code?</h4>",
      text: "Q98. What is the output of this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> x <span class=\"token operator\">=</span> <span class=\"token number\">6</span> <span class=\"token operator\">+</span> <span class=\"token number\">3</span> <span class=\"token operator\">+</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>x<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "let x = 6 + 3 + '3';\nconsole.log(x);\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "93",
        text: "93",
      },
      {
        isCorrect: false,
        html: "12",
        text: "12",
      },
      {
        isCorrect: false,
        html: "66",
        text: "66",
      },
      {
        isCorrect: false,
        html: "633",
        text: "633",
      },
    ],
    reference: {
      html: "<a href=\"https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/\">Reference type coercion</a>",
      text: "Reference type coercion",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q99. Which statement can take a single expression as input and then look through a number of choices until one that matches that value is found?\n\n- [ ] else\n- [ ] when\n- [ ] if\n- [x] switch\n\n[Reference switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q99. Which statement can take a single expression as input and then look through a number of choices until one that matches that value is found?</h4>",
      text: "Q99. Which statement can take a single expression as input and then look through a number of choices until one that matches that value is found?",
    },
    variants: [
      {
        isCorrect: false,
        html: "else",
        text: "else",
      },
      {
        isCorrect: false,
        html: "when",
        text: "when",
      },
      {
        isCorrect: false,
        html: "if",
        text: "if",
      },
      {
        isCorrect: true,
        html: "switch",
        text: "switch",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch\">Reference switch</a>",
      text: "Reference switch",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q100. Which statement prints \"roar\" to the console?\n\n```js\nvar sound = 'grunt';\nvar bear = { sound: 'roar' };\nfunction roar() {\n  console.log(this.sound);\n}\n```\n\n- [ ] `bear.bind(roar);`\n- [ ] `roar.bind(bear);`\n- [x] `roar.apply(bear);`\n- [ ] `bear[roar]();`\n\n1. [Reference Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)\n2. [Reference this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)\n3. [Reference bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q100. Which statement prints \"roar\" to the console?</h4>",
      text: "Q100. Which statement prints \"roar\" to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">var</span> sound <span class=\"token operator\">=</span> <span class=\"token string\">'grunt'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> bear <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token literal-property property\">sound</span><span class=\"token operator\">:</span> <span class=\"token string\">'roar'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">roar</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>sound<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      text: "var sound = 'grunt';\nvar bear = { sound: 'roar' };\nfunction roar() {\n  console.log(this.sound);\n}\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>bear.bind(roar);</code>",
        text: "bear.bind(roar);",
      },
      {
        isCorrect: false,
        html: "<code>roar.bind(bear);</code>",
        text: "roar.bind(bear);",
      },
      {
        isCorrect: true,
        html: "<code>roar.apply(bear);</code>",
        text: "roar.apply(bear);",
      },
      {
        isCorrect: false,
        html: "<code>bear[roar]();</code>",
        text: "bear[roar]();",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply\">Reference Apply</a>",
      text: "Reference Apply",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q101. Which choice is a valid example of an arrow function, assuming c is defined in the outer scope?\n\n- [ ] `a, b => { return c; }`\n- [ ] `a, b => c`\n- [ ] `{ a, b } => c`\n- [x] `(a,b) => c`\n\n[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q101. Which choice is a valid example of an arrow function, assuming c is defined in the outer scope?</h4>",
      text: "Q101. Which choice is a valid example of an arrow function, assuming c is defined in the outer scope?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>a, b =&gt; { return c; }</code>",
        text: "a, b => { return c; }",
      },
      {
        isCorrect: false,
        html: "<code>a, b =&gt; c</code>",
        text: "a, b => c",
      },
      {
        isCorrect: false,
        html: "<code>{ a, b } =&gt; c</code>",
        text: "{ a, b } => c",
      },
      {
        isCorrect: true,
        html: "<code>(a,b) =&gt; c</code>",
        text: "(a,b) => c",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions\">Reference arrow functions</a>",
      text: "Reference arrow functions",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q102. Which statement correctly imports this code from some-file.js?\n\n```js\n//some-file.js\nexport const printMe = (str) => console.log(str);\n```\n\n- [ ] `import printMe from './some-file';`\n- [x] `import { printMe } from './some-file';`\n- [ ] `import default as printMe from './some-file';`\n- [ ] `const printMe = import './some-file';`\n\n[Reference importing libraries in javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q102. Which statement correctly imports this code from some-file.js?</h4>",
      text: "Q102. Which statement correctly imports this code from some-file.js?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token comment\">//some-file.js</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">const</span> <span class=\"token function-variable function\">printMe</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">str</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>str<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "//some-file.js\nexport const printMe = (str) => console.log(str);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>import printMe from './some-file';</code>",
        text: "import printMe from './some-file';",
      },
      {
        isCorrect: true,
        html: "<code>import { printMe } from './some-file';</code>",
        text: "import { printMe } from './some-file';",
      },
      {
        isCorrect: false,
        html: "<code>import default as printMe from './some-file';</code>",
        text: "import default as printMe from './some-file';",
      },
      {
        isCorrect: false,
        html: "<code>const printMe = import './some-file';</code>",
        text: "const printMe = import './some-file';",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import\">Reference importing libraries in javascript</a>",
      text: "Reference importing libraries in javascript",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q103. What will be the output of this code?\n\n```js\nconst arr1 = [2, 4, 6];\nconst arr2 = [3, 5, 7];\n\nconsole.log([...arr1, ...arr2]);\n```\n\n- [ ] `[2, 3, 4, 5, 6, 7]`\n- [ ] `[3,5,7,2,4,6]`\n- [ ] `[3, 5, 7, 2, 4, 6]`\n- [ ] `[[2, 4, 6], [3, 5, 7]]`\n- [x] `[2, 4, 6, 3, 5, 7]`\n\n[Reference spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q103. What will be the output of this code?</h4>",
      text: "Q103. What will be the output of this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> arr1 <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token number\">2</span><span class=\"token punctuation\">,</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span> <span class=\"token number\">6</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> arr2 <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token number\">3</span><span class=\"token punctuation\">,</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span> <span class=\"token number\">7</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>arr1<span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>arr2<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const arr1 = [2, 4, 6];\nconst arr2 = [3, 5, 7];\n\nconsole.log([...arr1, ...arr2]);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>[2, 3, 4, 5, 6, 7]</code>",
        text: "[2, 3, 4, 5, 6, 7]",
      },
      {
        isCorrect: false,
        html: "<code>[3,5,7,2,4,6]</code>",
        text: "[3,5,7,2,4,6]",
      },
      {
        isCorrect: false,
        html: "<code>[3, 5, 7, 2, 4, 6]</code>",
        text: "[3, 5, 7, 2, 4, 6]",
      },
      {
        isCorrect: false,
        html: "<code>[[2, 4, 6], [3, 5, 7]]</code>",
        text: "[[2, 4, 6], [3, 5, 7]]",
      },
      {
        isCorrect: true,
        html: "<code>[2, 4, 6, 3, 5, 7]</code>",
        text: "[2, 4, 6, 3, 5, 7]",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax\">Reference spread syntax</a>",
      text: "Reference spread syntax",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q104. Which method call is chained to handle a successful response returned by `fetch()`?\n\n- [ ] `done()`\n- [x] `then()`\n- [ ] `finally()`\n- [ ] `catch()`\n\n[Reference fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q104. Which method call is chained to handle a successful response returned by <code>fetch()</code>?</h4>",
      text: "Q104. Which method call is chained to handle a successful response returned by fetch()?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>done()</code>",
        text: "done()",
      },
      {
        isCorrect: true,
        html: "<code>then()</code>",
        text: "then()",
      },
      {
        isCorrect: false,
        html: "<code>finally()</code>",
        text: "finally()",
      },
      {
        isCorrect: false,
        html: "<code>catch()</code>",
        text: "catch()",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch\">Reference fetch</a>",
      text: "Reference fetch",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q105. Which choice is not an array method?\n\n- [ ] `array.slice()`\n- [ ] `array.shift()`\n- [ ] `array.push()`\n- [x] `array.replace()`\n\n[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q105. Which choice is not an array method?</h4>",
      text: "Q105. Which choice is not an array method?",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>array.slice()</code>",
        text: "array.slice()",
      },
      {
        isCorrect: false,
        html: "<code>array.shift()</code>",
        text: "array.shift()",
      },
      {
        isCorrect: false,
        html: "<code>array.push()</code>",
        text: "array.push()",
      },
      {
        isCorrect: true,
        html: "<code>array.replace()</code>",
        text: "array.replace()",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_arrays.asp\">Reference working with arrays</a>",
      text: "Reference working with arrays",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q106. Which JavaScript loop ensures that at least a singular iteration will happen?\n\n- [x] do…while\n- [ ] forEach\n- [ ] while\n- [ ] for\n\n[Reference loops in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q106. Which JavaScript loop ensures that at least a singular iteration will happen?</h4>",
      text: "Q106. Which JavaScript loop ensures that at least a singular iteration will happen?",
    },
    variants: [
      {
        isCorrect: true,
        html: "do…while",
        text: "do…while",
      },
      {
        isCorrect: false,
        html: "forEach",
        text: "forEach",
      },
      {
        isCorrect: false,
        html: "while",
        text: "while",
      },
      {
        isCorrect: false,
        html: "for",
        text: "for",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while\">Reference loops in js</a>",
      text: "Reference loops in js",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q107. What will be logged to the console?\n\n```js\nconsole.log(typeof 'blueberry');\n```\n\n- [x] `string`\n- [ ] `array`\n- [ ] `Boolean`\n- [ ] `object`\n\n[Reference what is typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q107. What will be logged to the console?</h4>",
      text: "Q107. What will be logged to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\">console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">typeof</span> <span class=\"token string\">'blueberry'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "console.log(typeof 'blueberry');\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>string</code>",
        text: "string",
      },
      {
        isCorrect: false,
        html: "<code>array</code>",
        text: "array",
      },
      {
        isCorrect: false,
        html: "<code>Boolean</code>",
        text: "Boolean",
      },
      {
        isCorrect: false,
        html: "<code>object</code>",
        text: "object",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof\">Reference what is typeof</a>",
      text: "Reference what is typeof",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q108. What is the output that is printed when the div containing the text \"Click Here\" is clicked?\n\n```html\n//HTML Markup\n<div id=\"A\">\n  <div id=\"B\">\n    <div id=\"C\">Click Here</div>\n  </div>\n</div>\n```\n\n```js\n//JavaScript\ndocument.querySelectorAll('div').forEach((e) => {\n  e.onclick = (e) => console.log(e.currentTarget.id);\n});\n```\n\n- [x] C B A\n- [ ] A\n- [ ] C\n- [ ] A B C\n\n1. [Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)\n2. [Reference events](https://developer.mozilla.org/en-US/docs/Web/Events)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q108. What is the output that is printed when the div containing the text \"Click Here\" is clicked?</h4>",
      text: "Q108. What is the output that is printed when the div containing the text \"Click Here\" is clicked?",
    },
    preformated: {
      language: "html",
      html: "<pre><code class=\"language-html\">//HTML Markup\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>A<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>B<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>C<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Click Here<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n</code></pre>",
      text: "//HTML Markup\n<div id=\"A\">\n  <div id=\"B\">\n    <div id=\"C\">Click Here</div>\n  </div>\n</div>\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "C B A",
        text: "C B A",
      },
      {
        isCorrect: false,
        html: "A",
        text: "A",
      },
      {
        isCorrect: false,
        html: "C",
        text: "C",
      },
      {
        isCorrect: false,
        html: "A B C",
        text: "A B C",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector\">Reference query selector</a>",
      text: "Reference query selector",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q109. What will this code log to the console?\n\n```js\nconst myNumbers = [1, 2, 3, 4, 5, 6, 7];\nconst myFunction = (arr) => {\n  return arr.map((x) => x + 3).filter((x) => x < 7);\n};\nconsole.log(myFunction(myNumbers));\n```\n\n- [ ] `[4,5,6,7,8,9,10]`\n- [ ] `[4,5,6,7]`\n- [ ] `[1,2,3,4,5,6]`\n- [x] `[4,5,6]`\n\n[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q109. What will this code log to the console?</h4>",
      text: "Q109. What will this code log to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> myNumbers <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span> <span class=\"token number\">7</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">myFunction</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">arr</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> arr<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">x</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> x <span class=\"token operator\">+</span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">x</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> x <span class=\"token operator\">&lt;</span> <span class=\"token number\">7</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token function\">myFunction</span><span class=\"token punctuation\">(</span>myNumbers<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const myNumbers = [1, 2, 3, 4, 5, 6, 7];\nconst myFunction = (arr) => {\n  return arr.map((x) => x + 3).filter((x) => x < 7);\n};\nconsole.log(myFunction(myNumbers));\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>[4,5,6,7,8,9,10]</code>",
        text: "[4,5,6,7,8,9,10]",
      },
      {
        isCorrect: false,
        html: "<code>[4,5,6,7]</code>",
        text: "[4,5,6,7]",
      },
      {
        isCorrect: false,
        html: "<code>[1,2,3,4,5,6]</code>",
        text: "[1,2,3,4,5,6]",
      },
      {
        isCorrect: true,
        html: "<code>[4,5,6]</code>",
        text: "[4,5,6]",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/js/js_functions.asp\">Reference functions in javascript</a>",
      text: "Reference functions in javascript",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q110. What does this code print to the console?\n\n```js\nlet rainForestAcres = 10;\nlet animals = 0;\n\nwhile (rainForestAcres < 13 || animals <= 2) {\n  rainForestAcres++;\n  animals += 2;\n}\n\nconsole.log(animals);\n```\n\n- [ ] 2\n- [ ] 4\n- [x] 6\n- [ ] 8\n\n[Reference MDN JavaScript Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q110. What does this code print to the console?</h4>",
      text: "Q110. What does this code print to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> rainForestAcres <span class=\"token operator\">=</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> animals <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">while</span> <span class=\"token punctuation\">(</span>rainForestAcres <span class=\"token operator\">&lt;</span> <span class=\"token number\">13</span> <span class=\"token operator\">||</span> animals <span class=\"token operator\">&lt;=</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  rainForestAcres<span class=\"token operator\">++</span><span class=\"token punctuation\">;</span>\n  animals <span class=\"token operator\">+=</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>animals<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "let rainForestAcres = 10;\nlet animals = 0;\n\nwhile (rainForestAcres < 13 || animals <= 2) {\n  rainForestAcres++;\n  animals += 2;\n}\n\nconsole.log(animals);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "2",
        text: "2",
      },
      {
        isCorrect: false,
        html: "4",
        text: "4",
      },
      {
        isCorrect: true,
        html: "6",
        text: "6",
      },
      {
        isCorrect: false,
        html: "8",
        text: "8",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code\">Reference MDN JavaScript Looping code</a>",
      text: "Reference MDN JavaScript Looping code",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q111. Which snippet could you add to this code to print \"YOU GOT THIS\" to the console?\n\n```js\nlet cipherText = [...'YZOGUT QGMORTZ MTRHTILS'];\nlet plainText = '';\n\n/* Missing Snippet */\n\nconsole.log(plainText); //Prints YOU GOT THIS\n```\n\n- [ ] A\n\n```js\nfor (let key of cipherText.keys()) {\n  plainText += key % 2 === 0 ? key : ' ';\n}\n```\n\n- [ ] B\n\n```js\nfor (let [index, value] of cipherText.entries()) {\n  plainText += index % 2 !== 0 ? value : '';\n}\n```\n\n- [x] C\n\n```js\nfor (let [index, value] of cipherText.entries()) {\n  plainText += index % 2 === 0 ? value : '';\n}\n```\n\n- [ ] D\n\n```js\nfor (let value of cipherText) {\n  plainText += value;\n}\n```\n\n1. [Reference MDN JavaScript Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)\n2. [Reference MDN JavaScript Array entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)\n3. [Reference MDN JavaScript Remainder/Modulo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q111. Which snippet could you add to this code to print \"YOU GOT THIS\" to the console?</h4>",
      text: "Q111. Which snippet could you add to this code to print \"YOU GOT THIS\" to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> cipherText <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token string\">'YZOGUT QGMORTZ MTRHTILS'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> plainText <span class=\"token operator\">=</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">/* Missing Snippet */</span>\n\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>plainText<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">//Prints YOU GOT THIS</span>\n</code></pre>",
      text: "let cipherText = [...'YZOGUT QGMORTZ MTRHTILS'];\nlet plainText = '';\n\n/* Missing Snippet */\n\nconsole.log(plainText); //Prints YOU GOT THIS\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "A<br><pre><code class=\"language-js\"><span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> key <span class=\"token keyword\">of</span> cipherText<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  plainText <span class=\"token operator\">+=</span> key <span class=\"token operator\">%</span> <span class=\"token number\">2</span> <span class=\"token operator\">===</span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> key <span class=\"token operator\">:</span> <span class=\"token string\">' '</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
        text: "Afor (let key of cipherText.keys()) {\n  plainText += key % 2 === 0 ? key : ' ';\n}\n",
      },
      {
        isCorrect: false,
        html: "B<br><pre><code class=\"language-js\"><span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> <span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">]</span> <span class=\"token keyword\">of</span> cipherText<span class=\"token punctuation\">.</span><span class=\"token function\">entries</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  plainText <span class=\"token operator\">+=</span> index <span class=\"token operator\">%</span> <span class=\"token number\">2</span> <span class=\"token operator\">!==</span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> value <span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
        text: "Bfor (let [index, value] of cipherText.entries()) {\n  plainText += index % 2 !== 0 ? value : '';\n}\n",
      },
      {
        isCorrect: true,
        html: "C<br><pre><code class=\"language-js\"><span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> <span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">]</span> <span class=\"token keyword\">of</span> cipherText<span class=\"token punctuation\">.</span><span class=\"token function\">entries</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  plainText <span class=\"token operator\">+=</span> index <span class=\"token operator\">%</span> <span class=\"token number\">2</span> <span class=\"token operator\">===</span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> value <span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
        text: "Cfor (let [index, value] of cipherText.entries()) {\n  plainText += index % 2 === 0 ? value : '';\n}\n",
      },
      {
        isCorrect: false,
        html: "D<br><pre><code class=\"language-js\"><span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> value <span class=\"token keyword\">of</span> cipherText<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  plainText <span class=\"token operator\">+=</span> value<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
        text: "Dfor (let value of cipherText) {\n  plainText += value;\n}\n",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment\">Reference MDN JavaScript Destructuring</a>",
      text: "Reference MDN JavaScript Destructuring",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q112. Which Pokemon will be logged to the console?\n\n```js\nvar pokedex = ['Snorlax', 'Jigglypuff', 'Charmander', 'Squirtle'];\npokedex.pop();\nconsole.log(pokedex.pop());\n```\n\n- [x] Charmander\n- [ ] Jigglypuff\n- [ ] Snorlax\n- [ ] Squirtle\n\n**Explanation**: `The pop() method removes the last element from an array and returns that element. This method changes the length of the array.`\n\n[Reference Array.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q112. Which Pokemon will be logged to the console?</h4>",
      text: "Q112. Which Pokemon will be logged to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">var</span> pokedex <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Snorlax'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Jigglypuff'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Charmander'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Squirtle'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\npokedex<span class=\"token punctuation\">.</span><span class=\"token function\">pop</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>pokedex<span class=\"token punctuation\">.</span><span class=\"token function\">pop</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "var pokedex = ['Snorlax', 'Jigglypuff', 'Charmander', 'Squirtle'];\npokedex.pop();\nconsole.log(pokedex.pop());\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "Charmander",
        text: "Charmander",
      },
      {
        isCorrect: false,
        html: "Jigglypuff",
        text: "Jigglypuff",
      },
      {
        isCorrect: false,
        html: "Snorlax",
        text: "Snorlax",
      },
      {
        isCorrect: false,
        html: "Squirtle",
        text: "Squirtle",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop\">Reference Array.pop</a>",
      text: "Reference Array.pop",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q113. Which statement can be used to select the element from the DOM containing the text \"The LinkedIn Learning library has great JavaScript courses\" from this markup?\n\n```html\n<h1 class=\"content\">LinkedIn Learning</h1>\n<div class=\"content\">\n  <span class=\"content\">The LinkedIn Learning library has great JavaScript courses!</span>\n</div>\n```\n\n- [ ] document.querySelector(\"div.content\")\n- [x] document.querySelector(\"span.content\")\n- [ ] document.querySelector(\".content\")\n- [ ] document.querySelector(\"div.span\")\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q113. Which statement can be used to select the element from the DOM containing the text \"The LinkedIn Learning library has great JavaScript courses\" from this markup?</h4>",
      text: "Q113. Which statement can be used to select the element from the DOM containing the text \"The LinkedIn Learning library has great JavaScript courses\" from this markup?",
    },
    preformated: {
      language: "html",
      html: "<pre><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h1</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>content<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>LinkedIn Learning<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h1</span><span class=\"token punctuation\">&gt;</span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>content<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>content<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>The LinkedIn Learning library has great JavaScript courses!<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">&gt;</span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n</code></pre>",
      text: "<h1 class=\"content\">LinkedIn Learning</h1>\n<div class=\"content\">\n  <span class=\"content\">The LinkedIn Learning library has great JavaScript courses!</span>\n</div>\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "document.querySelector(\"div.content\")",
        text: "document.querySelector(\"div.content\")",
      },
      {
        isCorrect: true,
        html: "document.querySelector(\"span.content\")",
        text: "document.querySelector(\"span.content\")",
      },
      {
        isCorrect: false,
        html: "document.querySelector(\".content\")",
        text: "document.querySelector(\".content\")",
      },
      {
        isCorrect: false,
        html: "document.querySelector(\"div.span\")",
        text: "document.querySelector(\"div.span\")",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q114. Which value is not falsey?\n\n- [x] `[]`\n- [ ] `undefined`\n- [ ] `0`\n- [ ] `null`\n\n[Reference Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q114. Which value is not falsey?</h4>",
      text: "Q114. Which value is not falsey?",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>[]</code>",
        text: "[]",
      },
      {
        isCorrect: false,
        html: "<code>undefined</code>",
        text: "undefined",
      },
      {
        isCorrect: false,
        html: "<code>0</code>",
        text: "0",
      },
      {
        isCorrect: false,
        html: "<code>null</code>",
        text: "null",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Glossary/Falsy\">Reference Falsy</a>",
      text: "Reference Falsy",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q115. What line of code causes this code segment to throw an error?\n\n```js\nconst lion = 1;\nlet tiger = 2;\nvar bear;\n\n++lion;\nbear += lion + tiger;\ntiger++;\n```\n\n- [x] `line 5, because lion cannot be reassigned a value`\n- [ ] `line 6, because the += operator cannot be used with the undefined variable bear`\n- [ ] `line 5, because the prefix (++) operator does not exist in JavaScript`\n- [ ] `line 3, because the variable bear is left undefined`\n\n1. [Reference const in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)\n2. [Reference TypeError: invalid assignment to const \"x\"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q115. What line of code causes this code segment to throw an error?</h4>",
      text: "Q115. What line of code causes this code segment to throw an error?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> lion <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> tiger <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> bear<span class=\"token punctuation\">;</span>\n\n<span class=\"token operator\">++</span>lion<span class=\"token punctuation\">;</span>\nbear <span class=\"token operator\">+=</span> lion <span class=\"token operator\">+</span> tiger<span class=\"token punctuation\">;</span>\ntiger<span class=\"token operator\">++</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const lion = 1;\nlet tiger = 2;\nvar bear;\n\n++lion;\nbear += lion + tiger;\ntiger++;\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>line 5, because lion cannot be reassigned a value</code>",
        text: "line 5, because lion cannot be reassigned a value",
      },
      {
        isCorrect: false,
        html: "<code>line 6, because the += operator cannot be used with the undefined variable bear</code>",
        text: "line 6, because the += operator cannot be used with the undefined variable bear",
      },
      {
        isCorrect: false,
        html: "<code>line 5, because the prefix (++) operator does not exist in JavaScript</code>",
        text: "line 5, because the prefix (++) operator does not exist in JavaScript",
      },
      {
        isCorrect: false,
        html: "<code>line 3, because the variable bear is left undefined</code>",
        text: "line 3, because the variable bear is left undefined",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const\">Reference const in js</a>",
      text: "Reference const in js",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q116. What will be the value of `result` after running this code?\n\n```js\nconst person = { name: 'Dave', age: 40, hairColor: 'blue' };\nconst result = Object.keys(person).map((x) => x.toUpperCase());\n```\n\n- [ ] It will throw a TypeError.\n- [ ] `[\"Name\", \"Age\", \"HairColor\"]`\n- [ ] `[\"DAVE\", 40, \"BLUE\"]`\n- [x] `[\"NAME\", \"AGE\", \"HAIRCOLOR\"]`\n\n1. [Reference Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)\n2. [Reference Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)\n3. [Reference String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q116. What will be the value of <code>result</code> after running this code?</h4>",
      text: "Q116. What will be the value of result after running this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> person <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token literal-property property\">name</span><span class=\"token operator\">:</span> <span class=\"token string\">'Dave'</span><span class=\"token punctuation\">,</span> <span class=\"token literal-property property\">age</span><span class=\"token operator\">:</span> <span class=\"token number\">40</span><span class=\"token punctuation\">,</span> <span class=\"token literal-property property\">hairColor</span><span class=\"token operator\">:</span> <span class=\"token string\">'blue'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> result <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>person<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">x</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> x<span class=\"token punctuation\">.</span><span class=\"token function\">toUpperCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const person = { name: 'Dave', age: 40, hairColor: 'blue' };\nconst result = Object.keys(person).map((x) => x.toUpperCase());\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "It will throw a TypeError.",
        text: "It will throw a TypeError.",
      },
      {
        isCorrect: false,
        html: "<code>[\"Name\", \"Age\", \"HairColor\"]</code>",
        text: "[\"Name\", \"Age\", \"HairColor\"]",
      },
      {
        isCorrect: false,
        html: "<code>[\"DAVE\", 40, \"BLUE\"]</code>",
        text: "[\"DAVE\", 40, \"BLUE\"]",
      },
      {
        isCorrect: true,
        html: "<code>[\"NAME\", \"AGE\", \"HAIRCOLOR\"]</code>",
        text: "[\"NAME\", \"AGE\", \"HAIRCOLOR\"]",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys\">Reference Object.keys()</a>",
      text: "Reference Object.keys()",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q117. Which snippet could you insert to this code to print \"swim\" to the console?\n\n```js\nlet animals = [\"eagle\", \"osprey\", \"salmon\"];\nlet key = animal => animal === \"salmon\";\n\nif(/* Insert Snippet Here */){\n  console.log(\"swim\");\n}\n```\n\n- [ ] `animals.every(key)`\n- [ ] `animals.some(key).length === 1`\n- [ ] `animals.filter(key) === true`\n- [x] `animals.some(key)`\n\n[Reference Array.prototype.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q117. Which snippet could you insert to this code to print \"swim\" to the console?</h4>",
      text: "Q117. Which snippet could you insert to this code to print \"swim\" to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> animals <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">\"eagle\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"osprey\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"salmon\"</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> <span class=\"token function-variable function\">key</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">animal</span> <span class=\"token operator\">=&gt;</span> animal <span class=\"token operator\">===</span> <span class=\"token string\">\"salmon\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">if</span><span class=\"token punctuation\">(</span><span class=\"token comment\">/* Insert Snippet Here */</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"swim\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      text: "let animals = [\"eagle\", \"osprey\", \"salmon\"];\nlet key = animal => animal === \"salmon\";\n\nif(/* Insert Snippet Here */){\n  console.log(\"swim\");\n}\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>animals.every(key)</code>",
        text: "animals.every(key)",
      },
      {
        isCorrect: false,
        html: "<code>animals.some(key).length === 1</code>",
        text: "animals.some(key).length === 1",
      },
      {
        isCorrect: false,
        html: "<code>animals.filter(key) === true</code>",
        text: "animals.filter(key) === true",
      },
      {
        isCorrect: true,
        html: "<code>animals.some(key)</code>",
        text: "animals.some(key)",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some\">Reference Array.prototype.some</a>",
      text: "Reference Array.prototype.some",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q118. What is the output of this code?\n\n```js\nclass RainForest {\n  static minimumRainFall = 60;\n}\n\nlet congo = new RainForest();\nRainForest.minimumRainFall = 80;\nconsole.log(congo.minimumRainFall);\n```\n\n- [x] `undefined`\n- [ ] `None of these answers, as static is not a feature in Javascript.`\n- [ ] `60`\n- [ ] `80`\n\n[Reference Classes static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q118. What is the output of this code?</h4>",
      text: "Q118. What is the output of this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">class</span> <span class=\"token class-name\">RainForest</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">static</span> minimumRainFall <span class=\"token operator\">=</span> <span class=\"token number\">60</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">let</span> congo <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">RainForest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nRainForest<span class=\"token punctuation\">.</span>minimumRainFall <span class=\"token operator\">=</span> <span class=\"token number\">80</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>congo<span class=\"token punctuation\">.</span>minimumRainFall<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "class RainForest {\n  static minimumRainFall = 60;\n}\n\nlet congo = new RainForest();\nRainForest.minimumRainFall = 80;\nconsole.log(congo.minimumRainFall);\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>undefined</code>",
        text: "undefined",
      },
      {
        isCorrect: false,
        html: "<code>None of these answers, as static is not a feature in Javascript.</code>",
        text: "None of these answers, as static is not a feature in Javascript.",
      },
      {
        isCorrect: false,
        html: "<code>60</code>",
        text: "60",
      },
      {
        isCorrect: false,
        html: "<code>80</code>",
        text: "80",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static\">Reference Classes static</a>",
      text: "Reference Classes static",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q119. How can you attempt to access the property `a.b` on `obj` without throwing an error if a is undefined?\n\n```js\nlet obj = {};\n```\n\n- [ ] `obj?.a.b`\n- [x] `obj.a?.b`\n- [ ] `obj[a][b]`\n- [ ] `obj.?a.?b`\n\n[Reference Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q119. How can you attempt to access the property <code>a.b</code> on <code>obj</code> without throwing an error if a is undefined?</h4>",
      text: "Q119. How can you attempt to access the property a.b on obj without throwing an error if a is undefined?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "let obj = {};\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>obj?.a.b</code>",
        text: "obj?.a.b",
      },
      {
        isCorrect: true,
        html: "<code>obj.a?.b</code>",
        text: "obj.a?.b",
      },
      {
        isCorrect: false,
        html: "<code>obj[a][b]</code>",
        text: "obj[a][b]",
      },
      {
        isCorrect: false,
        html: "<code>obj.?a.?b</code>",
        text: "obj.?a.?b",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining\">Reference Optional chaining (?.)</a>",
      text: "Reference Optional chaining (?.)",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q120. What happens when you run this code?\n\n```js\nif (true) {\n  var x = 5;\n  const y = 6;\n  let z = 7;\n}\nconsole.log(x + y + z);\n```\n\n- [ ] It will throw a `ReferenceError` about `x`.\n- [ ] It will print `18`.\n- [ ] It will print `undefined`.\n- [x] It will throw a `ReferenceError` about `y`.\n\n[Reference let statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q120. What happens when you run this code?</h4>",
      text: "Q120. What happens when you run this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">var</span> x <span class=\"token operator\">=</span> <span class=\"token number\">5</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> y <span class=\"token operator\">=</span> <span class=\"token number\">6</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">let</span> z <span class=\"token operator\">=</span> <span class=\"token number\">7</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>x <span class=\"token operator\">+</span> y <span class=\"token operator\">+</span> z<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "if (true) {\n  var x = 5;\n  const y = 6;\n  let z = 7;\n}\nconsole.log(x + y + z);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "It will throw a <code>ReferenceError</code> about <code>x</code>.",
        text: "It will throw a ReferenceError about x.",
      },
      {
        isCorrect: false,
        html: "It will print <code>18</code>.",
        text: "It will print 18.",
      },
      {
        isCorrect: false,
        html: "It will print <code>undefined</code>.",
        text: "It will print undefined.",
      },
      {
        isCorrect: true,
        html: "It will throw a <code>ReferenceError</code> about <code>y</code>.",
        text: "It will throw a ReferenceError about y.",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let\">Reference let statement</a>",
      text: "Reference let statement",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q121. What does this code print to the console?\n\n```js\nconst x = [1, 2];\nconst y = [5, 7];\nconst z = [...x, ...y];\nconsole.log(z);\n```\n\n- [x] `[1,2,5,7]`\n- [ ] `[[1, 2], [5, 7]]`\n- [ ] `[2,7]`\n- [ ] `[2,1,7,5]`\n\n[Reference spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q121. What does this code print to the console?</h4>",
      text: "Q121. What does this code print to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> x <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> y <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token number\">5</span><span class=\"token punctuation\">,</span> <span class=\"token number\">7</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> z <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>x<span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>y<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>z<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const x = [1, 2];\nconst y = [5, 7];\nconst z = [...x, ...y];\nconsole.log(z);\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "<code>[1,2,5,7]</code>",
        text: "[1,2,5,7]",
      },
      {
        isCorrect: false,
        html: "<code>[[1, 2], [5, 7]]</code>",
        text: "[[1, 2], [5, 7]]",
      },
      {
        isCorrect: false,
        html: "<code>[2,7]</code>",
        text: "[2,7]",
      },
      {
        isCorrect: false,
        html: "<code>[2,1,7,5]</code>",
        text: "[2,1,7,5]",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax\">Reference spread syntax (...)</a>",
      text: "Reference spread syntax (...)",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q122. Given this code, which statement will evaluate to false?\n\n```js\nconst a = { x: 1 };\nconst b = { x: 1 };\n```\n\n- [ ] `a['x'] === b['x']`\n- [ ] `a != b`\n- [x] `a === b`\n- [ ] `a.x === b.x`\n\n[Reference](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q122. Given this code, which statement will evaluate to false?</h4>",
      text: "Q122. Given this code, which statement will evaluate to false?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> a <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token literal-property property\">x</span><span class=\"token operator\">:</span> <span class=\"token number\">1</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> b <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token literal-property property\">x</span><span class=\"token operator\">:</span> <span class=\"token number\">1</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const a = { x: 1 };\nconst b = { x: 1 };\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>a['x'] === b['x']</code>",
        text: "a['x'] === b['x']",
      },
      {
        isCorrect: false,
        html: "<code>a != b</code>",
        text: "a != b",
      },
      {
        isCorrect: true,
        html: "<code>a === b</code>",
        text: "a === b",
      },
      {
        isCorrect: false,
        html: "<code>a.x === b.x</code>",
        text: "a.x === b.x",
      },
    ],
    reference: {
      html: "<a href=\"http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q123. What will this code log to the console?\n\n```js\nconsole.log(typeof 41.1);\n```\n\n- [ ] `Nothing. It resuults in a ReferenceError.`\n- [ ] `decimal`\n- [ ] `float`\n- [x] `number`\n\n[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#basic_usage)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q123. What will this code log to the console?</h4>",
      text: "Q123. What will this code log to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\">console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">typeof</span> <span class=\"token number\">41.1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "console.log(typeof 41.1);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>Nothing. It resuults in a ReferenceError.</code>",
        text: "Nothing. It resuults in a ReferenceError.",
      },
      {
        isCorrect: false,
        html: "<code>decimal</code>",
        text: "decimal",
      },
      {
        isCorrect: false,
        html: "<code>float</code>",
        text: "float",
      },
      {
        isCorrect: true,
        html: "<code>number</code>",
        text: "number",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#basic_usage\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q124. What is the output of this code?\n\n```js\nlet scores = [];\nscores.push(1, 2);\nscores.pop();\nscores.push(3, 4);\nscores.pop();\nscore = scores.reduce((a, b) => a + b);\nconsole.log(score);\n```\n\n- [ ] `3`\n- [x] `4`\n- [ ] `6`\n- [ ] `7`\n\n1. [Reference Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)\n2. [Reference Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)\n3. [Reference Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q124. What is the output of this code?</h4>",
      text: "Q124. What is the output of this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> scores <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\nscores<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nscores<span class=\"token punctuation\">.</span><span class=\"token function\">pop</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nscores<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token number\">3</span><span class=\"token punctuation\">,</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nscores<span class=\"token punctuation\">.</span><span class=\"token function\">pop</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nscore <span class=\"token operator\">=</span> scores<span class=\"token punctuation\">.</span><span class=\"token function\">reduce</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">a<span class=\"token punctuation\">,</span> b</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> a <span class=\"token operator\">+</span> b<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>score<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "let scores = [];\nscores.push(1, 2);\nscores.pop();\nscores.push(3, 4);\nscores.pop();\nscore = scores.reduce((a, b) => a + b);\nconsole.log(score);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>3</code>",
        text: "3",
      },
      {
        isCorrect: true,
        html: "<code>4</code>",
        text: "4",
      },
      {
        isCorrect: false,
        html: "<code>6</code>",
        text: "6",
      },
      {
        isCorrect: false,
        html: "<code>7</code>",
        text: "7",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push\">Reference Array.prototype.push()</a>",
      text: "Reference Array.prototype.push()",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q125. What does this code print to the console?\n\n```js\nlet bear = {\n  sound: 'roar',\n  roar() {\n    console.log(this.sound);\n  },\n};\n\nbear.sound = 'grunt';\nlet bearSound = bear.roar;\nbearSound();\n```\n\n- [ ] `Nothing is printed to the console.`\n- [ ] `grunt`\n- [x] `undefined`\n- [ ] `roar`\n\n[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q125. What does this code print to the console?</h4>",
      text: "Q125. What does this code print to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> bear <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token literal-property property\">sound</span><span class=\"token operator\">:</span> <span class=\"token string\">'roar'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">roar</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>sound<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nbear<span class=\"token punctuation\">.</span>sound <span class=\"token operator\">=</span> <span class=\"token string\">'grunt'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> bearSound <span class=\"token operator\">=</span> bear<span class=\"token punctuation\">.</span>roar<span class=\"token punctuation\">;</span>\n<span class=\"token function\">bearSound</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "let bear = {\n  sound: 'roar',\n  roar() {\n    console.log(this.sound);\n  },\n};\n\nbear.sound = 'grunt';\nlet bearSound = bear.roar;\nbearSound();\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>Nothing is printed to the console.</code>",
        text: "Nothing is printed to the console.",
      },
      {
        isCorrect: false,
        html: "<code>grunt</code>",
        text: "grunt",
      },
      {
        isCorrect: true,
        html: "<code>undefined</code>",
        text: "undefined",
      },
      {
        isCorrect: false,
        html: "<code>roar</code>",
        text: "roar",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q126. What is the output of this code?\n\n```js\nvar cat = { name: 'Athena' };\n\nfunction swap(feline) {\n  feline.name = 'Wild';\n  feline = { name: 'Tabby' };\n}\n\nswap(cat);\nconsole.log(cat.name);\n```\n\n- [ ] undefined\n- [x] Wild\n- [ ] Tabby\n- [ ] Athena\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q126. What is the output of this code?</h4>",
      text: "Q126. What is the output of this code?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">var</span> cat <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token literal-property property\">name</span><span class=\"token operator\">:</span> <span class=\"token string\">'Athena'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">swap</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">feline</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  feline<span class=\"token punctuation\">.</span>name <span class=\"token operator\">=</span> <span class=\"token string\">'Wild'</span><span class=\"token punctuation\">;</span>\n  feline <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token literal-property property\">name</span><span class=\"token operator\">:</span> <span class=\"token string\">'Tabby'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token function\">swap</span><span class=\"token punctuation\">(</span>cat<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>cat<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "var cat = { name: 'Athena' };\n\nfunction swap(feline) {\n  feline.name = 'Wild';\n  feline = { name: 'Tabby' };\n}\n\nswap(cat);\nconsole.log(cat.name);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "undefined",
        text: "undefined",
      },
      {
        isCorrect: true,
        html: "Wild",
        text: "Wild",
      },
      {
        isCorrect: false,
        html: "Tabby",
        text: "Tabby",
      },
      {
        isCorrect: false,
        html: "Athena",
        text: "Athena",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q127. What will this code output to the log?\n\n```js\nvar thing;\nlet func = (str = 'no arg') => {\n  console.log(str);\n};\nfunc(thing);\nfunc(null);\n```\n\n- [ ] null no arg\n- [ ] no arg no arg\n- [ ] null null\n- [x] no arg null\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q127. What will this code output to the log?</h4>",
      text: "Q127. What will this code output to the log?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">var</span> thing<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> func <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>str <span class=\"token operator\">=</span> <span class=\"token string\">'no arg'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>str<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">func</span><span class=\"token punctuation\">(</span>thing<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">func</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">null</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "var thing;\nlet func = (str = 'no arg') => {\n  console.log(str);\n};\nfunc(thing);\nfunc(null);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "null no arg",
        text: "null no arg",
      },
      {
        isCorrect: false,
        html: "no arg no arg",
        text: "no arg no arg",
      },
      {
        isCorrect: false,
        html: "null null",
        text: "null null",
      },
      {
        isCorrect: true,
        html: "no arg null",
        text: "no arg null",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q128. What will this code print to the console?\n\n```js\nconst myFunc = () => {\n  const a = 2;\n  return () => console.log('a is ' + a);\n};\nconst a = 1;\nconst test = myFunc();\ntest();\n```\n\n- [ ] a is 1\n- [ ] a is undefined\n- [ ] It won't print anything.\n- [x] a is 2\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q128. What will this code print to the console?</h4>",
      text: "Q128. What will this code print to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> <span class=\"token function-variable function\">myFunc</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> a <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'a is '</span> <span class=\"token operator\">+</span> a<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> a <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> test <span class=\"token operator\">=</span> <span class=\"token function\">myFunc</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">test</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const myFunc = () => {\n  const a = 2;\n  return () => console.log('a is ' + a);\n};\nconst a = 1;\nconst test = myFunc();\ntest();\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "a is 1",
        text: "a is 1",
      },
      {
        isCorrect: false,
        html: "a is undefined",
        text: "a is undefined",
      },
      {
        isCorrect: false,
        html: "It won't print anything.",
        text: "It won't print anything.",
      },
      {
        isCorrect: true,
        html: "a is 2",
        text: "a is 2",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q129. What will this code print to the console?\n\n```js\nconst myFunc = (num1, num2 = 2, num3 = 2) => {\n  return num1 + num2 + num3;\n};\nlet values = [1, 5];\nconst test = myFunc(2, ...values);\nconsole.log(test);\n```\n\n- [x] 8\n- [ ] 6\n- [ ] 2\n- [ ] 12\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q129. What will this code print to the console?</h4>",
      text: "Q129. What will this code print to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> <span class=\"token function-variable function\">myFunc</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">num1<span class=\"token punctuation\">,</span> num2 <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> num3 <span class=\"token operator\">=</span> <span class=\"token number\">2</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=&gt;</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> num1 <span class=\"token operator\">+</span> num2 <span class=\"token operator\">+</span> num3<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> values <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token number\">5</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> test <span class=\"token operator\">=</span> <span class=\"token function\">myFunc</span><span class=\"token punctuation\">(</span><span class=\"token number\">2</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>test<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const myFunc = (num1, num2 = 2, num3 = 2) => {\n  return num1 + num2 + num3;\n};\nlet values = [1, 5];\nconst test = myFunc(2, ...values);\nconsole.log(test);\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "8",
        text: "8",
      },
      {
        isCorrect: false,
        html: "6",
        text: "6",
      },
      {
        isCorrect: false,
        html: "2",
        text: "2",
      },
      {
        isCorrect: false,
        html: "12",
        text: "12",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q130. Which code would you use to access the Irish flag?\n\n```js\nvar flagsJSON =\n  '{ \"countries\" : [' +\n  '{ \"country\":\"Ireland\" , \"flag\":\"🇮🇪\" },' +\n  '{ \"country\":\"Serbia\" , \"flag\":\"🇷🇸\" },' +\n  '{ \"country\":\"Peru\" , \"flag\":\"🇵🇪\" } ]}';\n\nvar flagDatabase = JSON.parse(flagsJSON);\n```\n\n- [ ] flagDatabase.countries[1].flag\n- [x] flagDatabase.countries[0].flag\n- [ ] flagDatabase[1].flag\n- [ ] flagsJSON.countries[0].flag\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q130. Which code would you use to access the Irish flag?</h4>",
      text: "Q130. Which code would you use to access the Irish flag?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">var</span> flagsJSON <span class=\"token operator\">=</span>\n  <span class=\"token string\">'{ \"countries\" : ['</span> <span class=\"token operator\">+</span>\n  <span class=\"token string\">'{ \"country\":\"Ireland\" , \"flag\":\"🇮🇪\" },'</span> <span class=\"token operator\">+</span>\n  <span class=\"token string\">'{ \"country\":\"Serbia\" , \"flag\":\"🇷🇸\" },'</span> <span class=\"token operator\">+</span>\n  <span class=\"token string\">'{ \"country\":\"Peru\" , \"flag\":\"🇵🇪\" } ]}'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">var</span> flagDatabase <span class=\"token operator\">=</span> <span class=\"token constant\">JSON</span><span class=\"token punctuation\">.</span><span class=\"token function\">parse</span><span class=\"token punctuation\">(</span>flagsJSON<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "var flagsJSON =\n  '{ \"countries\" : [' +\n  '{ \"country\":\"Ireland\" , \"flag\":\"🇮🇪\" },' +\n  '{ \"country\":\"Serbia\" , \"flag\":\"🇷🇸\" },' +\n  '{ \"country\":\"Peru\" , \"flag\":\"🇵🇪\" } ]}';\n\nvar flagDatabase = JSON.parse(flagsJSON);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "flagDatabase.countries[1].flag",
        text: "flagDatabase.countries[1].flag",
      },
      {
        isCorrect: true,
        html: "flagDatabase.countries[0].flag",
        text: "flagDatabase.countries[0].flag",
      },
      {
        isCorrect: false,
        html: "flagDatabase[1].flag",
        text: "flagDatabase[1].flag",
      },
      {
        isCorrect: false,
        html: "flagsJSON.countries[0].flag",
        text: "flagsJSON.countries[0].flag",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q131. Which snippet allows the acresOfRainForest variable to increase?\n\n```js\nlet conservation = true;\nlet deforestation = false;\nlet acresOfRainForest = 100;\nif (/* Snipped goes here */){\n    ++acresOfRainForest;\n}\n```\n\n- [x] conservation && !deforestation\n- [ ] !deforestation && !conservation\n- [ ] !conservation || deforestation\n- [ ] deforestation && conservation || deforestation\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q131. Which snippet allows the acresOfRainForest variable to increase?</h4>",
      text: "Q131. Which snippet allows the acresOfRainForest variable to increase?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> conservation <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> deforestation <span class=\"token operator\">=</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> acresOfRainForest <span class=\"token operator\">=</span> <span class=\"token number\">100</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token comment\">/* Snipped goes here */</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">{</span>\n    <span class=\"token operator\">++</span>acresOfRainForest<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      text: "let conservation = true;\nlet deforestation = false;\nlet acresOfRainForest = 100;\nif (/* Snipped goes here */){\n    ++acresOfRainForest;\n}\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "conservation &amp;&amp; !deforestation",
        text: "conservation && !deforestation",
      },
      {
        isCorrect: false,
        html: "!deforestation &amp;&amp; !conservation",
        text: "!deforestation && !conservation",
      },
      {
        isCorrect: false,
        html: "!conservation || deforestation",
        text: "!conservation || deforestation",
      },
      {
        isCorrect: false,
        html: "deforestation &amp;&amp; conservation || deforestation",
        text: "deforestation && conservation || deforestation",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q132. Which of these evaluate to true?\n\n- [x] Boolean(\"false\")\n- [ ] Boolean(\"\")\n- [ ] Boolean(0)\n- [ ] Boolean(NaN)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q132. Which of these evaluate to true?</h4>",
      text: "Q132. Which of these evaluate to true?",
    },
    variants: [
      {
        isCorrect: true,
        html: "Boolean(\"false\")",
        text: "Boolean(\"false\")",
      },
      {
        isCorrect: false,
        html: "Boolean(\"\")",
        text: "Boolean(\"\")",
      },
      {
        isCorrect: false,
        html: "Boolean(0)",
        text: "Boolean(0)",
      },
      {
        isCorrect: false,
        html: "Boolean(NaN)",
        text: "Boolean(NaN)",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q133. Which method converts a JSON string to a Javascript object?\n\n- [x] JSON.parse()\n- [ ] JSON.fromString();\n- [ ] JSON.stringify()\n- [ ] JSON.toObject()\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q133. Which method converts a JSON string to a Javascript object?</h4>",
      text: "Q133. Which method converts a JSON string to a Javascript object?",
    },
    variants: [
      {
        isCorrect: true,
        html: "JSON.parse()",
        text: "JSON.parse()",
      },
      {
        isCorrect: false,
        html: "JSON.fromString();",
        text: "JSON.fromString();",
      },
      {
        isCorrect: false,
        html: "JSON.stringify()",
        text: "JSON.stringify()",
      },
      {
        isCorrect: false,
        html: "JSON.toObject()",
        text: "JSON.toObject()",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q134. Which method do you use to attach one DOM mode to another?\n\n- [ ] attachNode()\n- [x] appendChild()\n- [ ] querySelector()\n- [ ] getNode()\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q134. Which method do you use to attach one DOM mode to another?</h4>",
      text: "Q134. Which method do you use to attach one DOM mode to another?",
    },
    variants: [
      {
        isCorrect: false,
        html: "attachNode()",
        text: "attachNode()",
      },
      {
        isCorrect: true,
        html: "appendChild()",
        text: "appendChild()",
      },
      {
        isCorrect: false,
        html: "querySelector()",
        text: "querySelector()",
      },
      {
        isCorrect: false,
        html: "getNode()",
        text: "getNode()",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q135. How would you add a data item named animal with a value of sloth to local storage for the current domain?\n\n- [ ] LocalStorage.setItem(\"animal\",\"sloth\");\n- [x] document.localStorage.setItem(\"animal\",\"sloth\");\n- [ ] localStorage.setItem({animal:\"sloth\"});\n- [ ] localStorage.setItem(\"animal\",\"sloth\");\n\n[Reference](https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q135. How would you add a data item named animal with a value of sloth to local storage for the current domain?</h4>",
      text: "Q135. How would you add a data item named animal with a value of sloth to local storage for the current domain?",
    },
    variants: [
      {
        isCorrect: false,
        html: "LocalStorage.setItem(\"animal\",\"sloth\");",
        text: "LocalStorage.setItem(\"animal\",\"sloth\");",
      },
      {
        isCorrect: true,
        html: "document.localStorage.setItem(\"animal\",\"sloth\");",
        text: "document.localStorage.setItem(\"animal\",\"sloth\");",
      },
      {
        isCorrect: false,
        html: "localStorage.setItem({animal:\"sloth\"});",
        text: "localStorage.setItem({animal:\"sloth\"});",
      },
      {
        isCorrect: false,
        html: "localStorage.setItem(\"animal\",\"sloth\");",
        text: "localStorage.setItem(\"animal\",\"sloth\");",
      },
    ],
    reference: {
      html: "<a href=\"https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q136. What value is printed to the console after this code execute?\n\n```js\nlet cat = Object.create({ type: 'lion' });\ncat.size = 'large';\n\nlet copyCat = { ...cat };\ncat.type = 'tiger';\n\nconsole.log(copyCat.type, copyCat.size);\n```\n\n- [ ] tiger large\n- [ ] lion undefined\n- [x] undefined large\n- [ ] lion large\n\n[Reference](https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q136. What value is printed to the console after this code execute?</h4>",
      text: "Q136. What value is printed to the console after this code execute?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> cat <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> <span class=\"token literal-property property\">type</span><span class=\"token operator\">:</span> <span class=\"token string\">'lion'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\ncat<span class=\"token punctuation\">.</span>size <span class=\"token operator\">=</span> <span class=\"token string\">'large'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">let</span> copyCat <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span>cat <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\ncat<span class=\"token punctuation\">.</span>type <span class=\"token operator\">=</span> <span class=\"token string\">'tiger'</span><span class=\"token punctuation\">;</span>\n\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>copyCat<span class=\"token punctuation\">.</span>type<span class=\"token punctuation\">,</span> copyCat<span class=\"token punctuation\">.</span>size<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "let cat = Object.create({ type: 'lion' });\ncat.size = 'large';\n\nlet copyCat = { ...cat };\ncat.type = 'tiger';\n\nconsole.log(copyCat.type, copyCat.size);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "tiger large",
        text: "tiger large",
      },
      {
        isCorrect: false,
        html: "lion undefined",
        text: "lion undefined",
      },
      {
        isCorrect: true,
        html: "undefined large",
        text: "undefined large",
      },
      {
        isCorrect: false,
        html: "lion large",
        text: "lion large",
      },
    ],
    reference: {
      html: "<a href=\"https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q137. What does this code print to the console?\n\n```js\nlet animals = [{ type: 'lion' }, 'tiger'];\nlet clones = animals.slice();\n\nclones[0].type = 'bear';\nclones[1] = 'sheep';\n\nconsole.log(animals[0].type, clones[0].type);\nconsole.log(animals[1], clones[1]);\n```\n\n- [x] bear bear\n      tiger sheep\n- [ ] lion bear\n      sheep sheep\n- [ ] bear bear\n      tiger tiger\n- [ ] lion bear\n      tiger sheep\n\n[Reference](https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q137. What does this code print to the console?</h4>",
      text: "Q137. What does this code print to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> animals <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> <span class=\"token literal-property property\">type</span><span class=\"token operator\">:</span> <span class=\"token string\">'lion'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'tiger'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> clones <span class=\"token operator\">=</span> animals<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nclones<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>type <span class=\"token operator\">=</span> <span class=\"token string\">'bear'</span><span class=\"token punctuation\">;</span>\nclones<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token string\">'sheep'</span><span class=\"token punctuation\">;</span>\n\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>animals<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>type<span class=\"token punctuation\">,</span> clones<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>type<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>animals<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> clones<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "let animals = [{ type: 'lion' }, 'tiger'];\nlet clones = animals.slice();\n\nclones[0].type = 'bear';\nclones[1] = 'sheep';\n\nconsole.log(animals[0].type, clones[0].type);\nconsole.log(animals[1], clones[1]);\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "bear bear\ntiger sheep",
        text: "bear bear\ntiger sheep",
      },
      {
        isCorrect: false,
        html: "lion bear\nsheep sheep",
        text: "lion bear\nsheep sheep",
      },
      {
        isCorrect: false,
        html: "bear bear\ntiger tiger",
        text: "bear bear\ntiger tiger",
      },
      {
        isCorrect: false,
        html: "lion bear\ntiger sheep",
        text: "lion bear\ntiger sheep",
      },
    ],
    reference: {
      html: "<a href=\"https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q138. What will be the output of the following code.\n\n```js\na=5;\nb=4;\nalert(a++(+(+(+b))));\n```\n\n- [ ] 18\n- [ ] 10\n- [x] 9\n- [ ] 20\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q138. What will be the output of the following code.</h4>",
      text: "Q138. What will be the output of the following code.",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\">a<span class=\"token operator\">=</span><span class=\"token number\">5</span><span class=\"token punctuation\">;</span>\nb<span class=\"token operator\">=</span><span class=\"token number\">4</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">alert</span><span class=\"token punctuation\">(</span>a<span class=\"token operator\">++</span><span class=\"token punctuation\">(</span><span class=\"token operator\">+</span><span class=\"token punctuation\">(</span><span class=\"token operator\">+</span><span class=\"token punctuation\">(</span><span class=\"token operator\">+</span>b<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "a=5;\nb=4;\nalert(a++(+(+(+b))));\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "18",
        text: "18",
      },
      {
        isCorrect: false,
        html: "10",
        text: "10",
      },
      {
        isCorrect: true,
        html: "9",
        text: "9",
      },
      {
        isCorrect: false,
        html: "20",
        text: "20",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q139. Which snippet could you add to this code to print \"{\"type\": \"tiger\"}\" to the console?\n\n```js\nlet cat = { type: \"tiger\", size: \"large\" };\n\nlet json = /* Snippet here */;\n\nconsole.log(json); // print {\"type\":\"tiger\"}\n```\n\n- [ ] `cat.toJSON(\"type\");`\n- [x] `JSON.stringify(cat, [\"type\"]);`\n- [ ] `JSON.stringify(cat);`\n- [ ] `JSON.stringify(cat, /type/);`\n\n[Reference](https://www.w3schools.com/jsref/jsref_stringify.asp)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q139. Which snippet could you add to this code to print \"{\"type\": \"tiger\"}\" to the console?</h4>",
      text: "Q139. Which snippet could you add to this code to print \"{\"type\": \"tiger\"}\" to the console?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-js\"><span class=\"token keyword\">let</span> cat <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token literal-property property\">type</span><span class=\"token operator\">:</span> <span class=\"token string\">\"tiger\"</span><span class=\"token punctuation\">,</span> <span class=\"token literal-property property\">size</span><span class=\"token operator\">:</span> <span class=\"token string\">\"large\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">let</span> json <span class=\"token operator\">=</span> <span class=\"token comment\">/* Snippet here */</span><span class=\"token punctuation\">;</span>\n\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>json<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// print {\"type\":\"tiger\"}</span>\n</code></pre>",
      text: "let cat = { type: \"tiger\", size: \"large\" };\n\nlet json = /* Snippet here */;\n\nconsole.log(json); // print {\"type\":\"tiger\"}\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "<code>cat.toJSON(\"type\");</code>",
        text: "cat.toJSON(\"type\");",
      },
      {
        isCorrect: true,
        html: "<code>JSON.stringify(cat, [\"type\"]);</code>",
        text: "JSON.stringify(cat, [\"type\"]);",
      },
      {
        isCorrect: false,
        html: "<code>JSON.stringify(cat);</code>",
        text: "JSON.stringify(cat);",
      },
      {
        isCorrect: false,
        html: "<code>JSON.stringify(cat, /type/);</code>",
        text: "JSON.stringify(cat, /type/);",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/jsref/jsref_stringify.asp\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q140. Which document method is not used to get a reference to a DOM node?\n\n- [x] document.getNode();\n- [ ] document.getElementsByClassName();\n- [ ] document.querySelectorAll();\n- [ ] document.querySelector();\n\n[Reference](<https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById#:~:text=querySelector()%20and%20Document.,element%20objects%20in%20the%20DOM.>)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q140. Which document method is not used to get a reference to a DOM node?</h4>",
      text: "Q140. Which document method is not used to get a reference to a DOM node?",
    },
    variants: [
      {
        isCorrect: true,
        html: "document.getNode();",
        text: "document.getNode();",
      },
      {
        isCorrect: false,
        html: "document.getElementsByClassName();",
        text: "document.getElementsByClassName();",
      },
      {
        isCorrect: false,
        html: "document.querySelectorAll();",
        text: "document.querySelectorAll();",
      },
      {
        isCorrect: false,
        html: "document.querySelector();",
        text: "document.querySelector();",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById#:~:text=querySelector()%20and%20Document.,element%20objects%20in%20the%20DOM.\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q141. In JavaScript, all objects inherit a built-in property from a **\\*\\*\\*\\***\\_\\_\\_**\\*\\*\\*\\***.\n\n- [ ] node\n- [ ] instance variable\n- [x] prototype\n- [ ] accessor\n\n[Reference](https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q141. In JavaScript, all objects inherit a built-in property from a <strong>****</strong>___<strong>****</strong>.</h4>",
      text: "Q141. In JavaScript, all objects inherit a built-in property from a ****___****.",
    },
    variants: [
      {
        isCorrect: false,
        html: "node",
        text: "node",
      },
      {
        isCorrect: false,
        html: "instance variable",
        text: "instance variable",
      },
      {
        isCorrect: true,
        html: "prototype",
        text: "prototype",
      },
      {
        isCorrect: false,
        html: "accessor",
        text: "accessor",
      },
    ],
    reference: {
      html: "<a href=\"https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q142. Which of the following are not server-side Javascript objects?\n\n- [ ] Date\n- [ ] FileUpload\n- [ ] Function\n- [x] All of the above\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q142. Which of the following are not server-side Javascript objects?</h4>",
      text: "Q142. Which of the following are not server-side Javascript objects?",
    },
    variants: [
      {
        isCorrect: false,
        html: "Date",
        text: "Date",
      },
      {
        isCorrect: false,
        html: "FileUpload",
        text: "FileUpload",
      },
      {
        isCorrect: false,
        html: "Function",
        text: "Function",
      },
      {
        isCorrect: true,
        html: "All of the above",
        text: "All of the above",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q143. What will be the output of the following code snippet?\n\n```javascript\nconst obj1 = { first: 20, second: 30, first: 50 };\nconsole.log(obj1);\n```\n\n- [ ] first: 30 , second: 50\n- [x] first: 50 , second: 30\n- [ ] first: 30 , second: 20\n- [ ] None of the above\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q143. What will be the output of the following code snippet?</h4>",
      text: "Q143. What will be the output of the following code snippet?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-javascript\"><span class=\"token keyword\">const</span> obj1 <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token literal-property property\">first</span><span class=\"token operator\">:</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span> <span class=\"token literal-property property\">second</span><span class=\"token operator\">:</span> <span class=\"token number\">30</span><span class=\"token punctuation\">,</span> <span class=\"token literal-property property\">first</span><span class=\"token operator\">:</span> <span class=\"token number\">50</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>obj1<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "const obj1 = { first: 20, second: 30, first: 50 };\nconsole.log(obj1);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "first: 30 , second: 50",
        text: "first: 30 , second: 50",
      },
      {
        isCorrect: true,
        html: "first: 50 , second: 30",
        text: "first: 50 , second: 30",
      },
      {
        isCorrect: false,
        html: "first: 30 , second: 20",
        text: "first: 30 , second: 20",
      },
      {
        isCorrect: false,
        html: "None of the above",
        text: "None of the above",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q144. Which object in Javascript doesn’t have a prototype?\n\n- [x] Base Object\n- [ ] All objects have prototype\n- [ ] None of the objects have prototype\n- [ ] None of the above\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q144. Which object in Javascript doesn’t have a prototype?</h4>",
      text: "Q144. Which object in Javascript doesn’t have a prototype?",
    },
    variants: [
      {
        isCorrect: true,
        html: "Base Object",
        text: "Base Object",
      },
      {
        isCorrect: false,
        html: "All objects have prototype",
        text: "All objects have prototype",
      },
      {
        isCorrect: false,
        html: "None of the objects have prototype",
        text: "None of the objects have prototype",
      },
      {
        isCorrect: false,
        html: "None of the above",
        text: "None of the above",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q145. What does … operator do in JS?\n\n- [x] Used to spread iterables to individual elements\n- [ ] Describe datatype of undefined\n- [ ] No such operator exists\n- [ ] None of the above\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q145. What does … operator do in JS?</h4>",
      text: "Q145. What does … operator do in JS?",
    },
    variants: [
      {
        isCorrect: true,
        html: "Used to spread iterables to individual elements",
        text: "Used to spread iterables to individual elements",
      },
      {
        isCorrect: false,
        html: "Describe datatype of undefined",
        text: "Describe datatype of undefined",
      },
      {
        isCorrect: false,
        html: "No such operator exists",
        text: "No such operator exists",
      },
      {
        isCorrect: false,
        html: "None of the above",
        text: "None of the above",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q146. How to stop an interval timer in Javascript?\n\n- [x] clearInterval\n- [ ] clearTimer\n- [ ] intervalOver\n- [ ] None of the above\n\n[Reference](https://www.interviewbit.com/javascript-mcq/)\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q146. How to stop an interval timer in Javascript?</h4>",
      text: "Q146. How to stop an interval timer in Javascript?",
    },
    variants: [
      {
        isCorrect: true,
        html: "clearInterval",
        text: "clearInterval",
      },
      {
        isCorrect: false,
        html: "clearTimer",
        text: "clearTimer",
      },
      {
        isCorrect: false,
        html: "intervalOver",
        text: "intervalOver",
      },
      {
        isCorrect: false,
        html: "None of the above",
        text: "None of the above",
      },
    ],
    reference: {
      html: "<a href=\"https://www.interviewbit.com/javascript-mcq/\">Reference</a>",
      text: "Reference",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q147. What will be the output of the following code snippet?\n\n```javascript\nprint(typeof NaN);\n```\n\n- [ ] Object\n- [x] Number\n- [ ] String\n- [ ] None of the above\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q147. What will be the output of the following code snippet?</h4>",
      text: "Q147. What will be the output of the following code snippet?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-javascript\"><span class=\"token function\">print</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">typeof</span> <span class=\"token number\">NaN</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "print(typeof NaN);\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "Object",
        text: "Object",
      },
      {
        isCorrect: true,
        html: "Number",
        text: "Number",
      },
      {
        isCorrect: false,
        html: "String",
        text: "String",
      },
      {
        isCorrect: false,
        html: "None of the above",
        text: "None of the above",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q148. What will be the output of the following code snippet?\n\n```javascript\n<script type=\"text/javascript\">a = 5 + \"9\"; document.write(a);</script>\n```\n\n- [ ] Compilation Error\n- [ ] 14\n- [ ] Runtime Error\n- [x] 59\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q148. What will be the output of the following code snippet?</h4>",
      text: "Q148. What will be the output of the following code snippet?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-javascript\"><span class=\"token operator\">&lt;</span>script type<span class=\"token operator\">=</span><span class=\"token string\">\"text/javascript\"</span><span class=\"token operator\">&gt;</span>a <span class=\"token operator\">=</span> <span class=\"token number\">5</span> <span class=\"token operator\">+</span> <span class=\"token string\">\"9\"</span><span class=\"token punctuation\">;</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">write</span><span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>script<span class=\"token operator\">&gt;</span>\n</code></pre>",
      text: "<script type=\"text/javascript\">a = 5 + \"9\"; document.write(a);</script>\n",
    },
    variants: [
      {
        isCorrect: false,
        html: "Compilation Error",
        text: "Compilation Error",
      },
      {
        isCorrect: false,
        html: "14",
        text: "14",
      },
      {
        isCorrect: false,
        html: "Runtime Error",
        text: "Runtime Error",
      },
      {
        isCorrect: true,
        html: "59",
        text: "59",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q149. Which of the following methods can be used to display data in some form using Javascript?\n\n- [ ] document.write()\n- [ ] console.log()\n- [ ] window.alert()\n- [x] all of the above\n\n",
    hasCode: false,
    question: {
      html: "<h4>Q149. Which of the following methods can be used to display data in some form using Javascript?</h4>",
      text: "Q149. Which of the following methods can be used to display data in some form using Javascript?",
    },
    variants: [
      {
        isCorrect: false,
        html: "document.write()",
        text: "document.write()",
      },
      {
        isCorrect: false,
        html: "console.log()",
        text: "console.log()",
      },
      {
        isCorrect: false,
        html: "window.alert()",
        text: "window.alert()",
      },
      {
        isCorrect: true,
        html: "all of the above",
        text: "all of the above",
      },
    ],
  },
  {
    topic: "JavaScript",
    raw: "#### Q150. What value is assigned to total after this code executes?\n\n```javascript\nfunction sum(num1, num2 = 2, num3 = 3) {\n  return num1 + num2 + num3;\n}\nlet values = [1, 5];\nlet total = sum(4, ...values);\n```\n\n- [x] 10\n- [ ] 6\n- [ ] 7\n- [ ] 8\n\n[Reference: Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)\n\n",
    hasCode: true,
    question: {
      html: "<h4>Q150. What value is assigned to total after this code executes?</h4>",
      text: "Q150. What value is assigned to total after this code executes?",
    },
    preformated: {
      language: "JavaScript",
      html: "<pre><code class=\"language-javascript\"><span class=\"token keyword\">function</span> <span class=\"token function\">sum</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">num1<span class=\"token punctuation\">,</span> num2 <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> num3 <span class=\"token operator\">=</span> <span class=\"token number\">3</span></span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> num1 <span class=\"token operator\">+</span> num2 <span class=\"token operator\">+</span> num3<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token keyword\">let</span> values <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token number\">5</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> total <span class=\"token operator\">=</span> <span class=\"token function\">sum</span><span class=\"token punctuation\">(</span><span class=\"token number\">4</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      text: "function sum(num1, num2 = 2, num3 = 3) {\n  return num1 + num2 + num3;\n}\nlet values = [1, 5];\nlet total = sum(4, ...values);\n",
    },
    variants: [
      {
        isCorrect: true,
        html: "10",
        text: "10",
      },
      {
        isCorrect: false,
        html: "6",
        text: "6",
      },
      {
        isCorrect: false,
        html: "7",
        text: "7",
      },
      {
        isCorrect: false,
        html: "8",
        text: "8",
      },
    ],
    reference: {
      html: "<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters\">Reference: Rest parameters</a>",
      text: "Reference: Rest parameters",
    },
  },
  {
    topic: "JavaScript",
    raw: "#### Q151. Which statement is applicable to the defer attribute of the HTML <script> tag?\n\n- [x] defer allows the browser to continue processing the page while the script loads in the background.\n- [ ] defer causes the script to be loaded from the backup content delivery network (CDN).\n- [ ] defer blocks the browser from processing HTML below the tag until the script is completely loaded.\n- [ ] defer lazy loads the script, causing it to download only when it is called by another script on the page.\n\n [Reference: defer html script attribute](https://www.w3schools.com/tags/att_script_defer.asp)\n  \n",
    hasCode: false,
    question: {
      html: "<h4>Q151. Which statement is applicable to the defer attribute of the HTML &lt;script&gt; tag?</h4>",
      text: "Q151. Which statement is applicable to the defer attribute of the HTML <script> tag?",
    },
    variants: [
      {
        isCorrect: true,
        html: "defer allows the browser to continue processing the page while the script loads in the background.",
        text: "defer allows the browser to continue processing the page while the script loads in the background.",
      },
      {
        isCorrect: false,
        html: "defer causes the script to be loaded from the backup content delivery network (CDN).",
        text: "defer causes the script to be loaded from the backup content delivery network (CDN).",
      },
      {
        isCorrect: false,
        html: "defer blocks the browser from processing HTML below the tag until the script is completely loaded.",
        text: "defer blocks the browser from processing HTML below the tag until the script is completely loaded.",
      },
      {
        isCorrect: false,
        html: "defer lazy loads the script, causing it to download only when it is called by another script on the page.",
        text: "defer lazy loads the script, causing it to download only when it is called by another script on the page.",
      },
    ],
    reference: {
      html: "<a href=\"https://www.w3schools.com/tags/att_script_defer.asp\">Reference: defer html script attribute</a>",
      text: "Reference: defer html script attribute",
    },
  },
];
