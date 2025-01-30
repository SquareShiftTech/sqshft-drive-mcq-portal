const Questions = [
  // Easy
  {
    id: 1,
    Ques: "What does HTML stand for?",
    quesImage: "",
    codeBlock: `
my_list = ['Multiple of 6' if i % 6 == 0 
           else 'Multiple of 2' if i % 2 == 0 
           else 'Multiple of 3' if i % 3 == 0 
           else i for i in range(1, 20)]
print(my_list)
    `,
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "HyperText Markup Language" },
      { id: "2", option: "HighText Machine Language" },
      { id: "3", option: "HighTexts Machine Language" },
      { id: "4", option: "HighTextRest Machine Language" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 2,
    Ques: "Which language is used for styling web pages?",
    quesImage: "",
    codeBlock:  `
    my_list = ['Multiple of 6' if i % 6 == 0 
               else 'Multiple of 2' if i % 2 == 0 
               else 'Multiple of 3' if i % 3 == 0 
               else i for i in range(1, 20)]
    print(my_list)
        `,
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "HTML" },
      { id: "2", option: "CSS" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 3,
    Ques: "What does the `console.log()` function do?",
    quesImage: "",
    codeBlock:  `
    my_list = ['Multiple of 6' if i % 6 == 0 
               else 'Multiple of 2' if i % 2 == 0 
               else 'Multiple of 3' if i % 3 == 0 
               else i for i in range(1, 20)]
    print(my_list)
        `,
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "Displays output in the console" },
      { id: "2", option: "Stops the program" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 4,
    Ques: "Which of the following is a JavaScript library?",
    quesImage: "",
    codeBlock:  `
    my_list = ['Multiple of 6' if i % 6 == 0 
               else 'Multiple of 2' if i % 2 == 0 
               else 'Multiple of 3' if i % 3 == 0 
               else i for i in range(1, 20)]
    print(my_list)
        `,
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "React" },
      { id: "2", option: "Django" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 5,
    Ques: "What does the `for` loop do?",
    quesImage: "",
    codeBlock:  `
    my_list = ['Multiple of 6' if i % 6 == 0 
               else 'Multiple of 2' if i % 2 == 0 
               else 'Multiple of 3' if i % 3 == 0 
               else i for i in range(1, 20)]
    print(my_list)
        `,
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "Repeats a block of code" },
      { id: "2", option: "Executes code once" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 6,
    Ques: "Which of the following is a backend framework?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "Node.js" },
      { id: "2", option: "Bootstrap" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 7,
    Ques: "What symbol is used to indicate an ID in CSS?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "#" },
      { id: "2", option: "." },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 8,
    Ques: "What does the `<script>` tag do in HTML?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "Links JavaScript code" },
      { id: "2", option: "Adds styles" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 9,
    Ques: "Which of these is used to create a function in JavaScript?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "def" },
      { id: "2", option: "function" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 10,
    Ques: "What is the correct syntax to declare a variable in JavaScript?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "var x = 10;" },
      { id: "2", option: "let x: 10;" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  // Medium
  {
    id: 11,
    Ques: "Which of the following methods can be used to fetch data from an API?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "medium",
    options: [
      { id: "1", option: "fetch()" },
      { id: "2", option: "getRequest()" },
      { id: "3", option: "AJAX" },
    ],
    answer: [{ id: "1" }, { id: "3" }],
    isMultiSelect: true,
  },
  {
    id: 12,
    Ques: "What is the output of `2 + '2'` in JavaScript?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "medium",
    options: [
      { id: "1", option: "22" },
      { id: "2", option: "4" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 13,
    Ques: "Which keyword is used to define a constant in JavaScript?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "medium",
    options: [
      { id: "1", option: "const" },
      { id: "2", option: "static" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 14,
    Ques: "What does the `this` keyword refer to in JavaScript?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "medium",
    options: [
      { id: "1", option: "The current object" },
      { id: "2", option: "Global context" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 15,
    Ques: "What is the purpose of the `map()` function?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "medium",
    options: [
      { id: "1", option: "Iterate and transform an array" },
      { id: "2", option: "Filter an array" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 16,
    Ques: "Which of the following is a correct way to create an object in JavaScript?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "medium",
    options: [
      { id: "1", option: "let obj = {};" },
      { id: "2", option: "let obj = [];" },
      { id: "3", option: "let obj = Object();" },
    ],
    answer: [{ id: "1" }, { id: "3" }],
    isMultiSelect: true,
  },
  {
    id: 17,
    Ques: "Which of the following statements is true about JavaScript promises?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "medium",
    options: [
      { id: "1", option: "Promises handle asynchronous operations." },
      {
        id: "2",
        option:
          "Promises can be in three states: pending, fulfilled, rejected.",
      },
      { id: "3", option: "Promises block the main thread." },
    ],
    answer: [{ id: "1" }, { id: "2" }],
    isMultiSelect: true,
  },
  {
    id: 18,
    Ques: "What is the result of `typeof NaN` in JavaScript?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "medium",
    options: [
      { id: "1", option: "number" },
      { id: "2", option: "NaN" },
      { id: "3", option: "undefined" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 19,
    Ques: "Which method is used to combine two or more arrays in JavaScript?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "medium",
    options: [
      { id: "1", option: "concat()" },
      { id: "2", option: "merge()" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 20,
    Ques: "Which event is triggered when an input field loses focus?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "medium",
    options: [
      { id: "1", option: "blur" },
      { id: "2", option: "change" },
      { id: "3", option: "focusout" },
    ],
    answer: [{ id: "1" }, { id: "3" }],
    isMultiSelect: true,
  },
  // hard
  {
    id: 21,
    Ques: "In JavaScript, which of the following methods can cause the loss of the 'this' context in a function?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "setTimeout()" },
      { id: "2", option: "bind()" },
      { id: "3", option: "call()" },
      { id: "4", option: "apply()" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 22,
    Ques: "What will be the output of the following JavaScript code snippet?\n\nconsole.log(0.1 + 0.2 === 0.3);",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "true" },
      { id: "2", option: "false" },
      { id: "3", option: "NaN" },
      { id: "4", option: "undefined" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 23,
    Ques: "In Node.js, which of the following modules is used to create HTTP servers?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "http" },
      { id: "2", option: "https" },
      { id: "3", option: "fs" },
      { id: "4", option: "url" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 24,
    Ques: "Which of the following JavaScript features can be used to handle asynchronous operations?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "Promises" },
      { id: "2", option: "async/await" },
      { id: "3", option: "setTimeout" },
      { id: "4", option: "all of the above" },
    ],
    answer: [{ id: "4" }],
    isMultiSelect: true,
  },
  {
    id: 25,
    Ques: "Which of the following will correctly create a shallow copy of an object in JavaScript?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "Object.create()" },
      { id: "2", option: "Object.assign()" },
      { id: "3", option: "JSON.parse(JSON.stringify())" },
      { id: "4", option: "Array.from()" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 26,
    Ques: "What is the main difference between `null` and `undefined` in JavaScript?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "`null` is a type, `undefined` is a value" },
      {
        id: "2",
        option: "`null` is an object, `undefined` is a primitive value",
      },
      {
        id: "3",
        option:
          "`undefined` is used to indicate an intentional absence of value",
      },
      { id: "4", option: "There is no difference" },
    ],
    answer: [{ id: "2" }, { id: "3" }],
    isMultiSelect: true,
  },
  {
    id: 27,
    Ques: "Which of the following statements about `Event Loop` in JavaScript is true?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "hard",
    options: [
      {
        id: "1",
        option: "It handles both synchronous and asynchronous operations",
      },
      { id: "2", option: "It executes code in parallel" },
      { id: "3", option: "It processes only synchronous operations" },
      { id: "4", option: "It runs in the background indefinitely" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 28,
    Ques: "In which of the following scenarios will a JavaScript `setTimeout()` function execute immediately?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "When the delay is set to 0" },
      { id: "2", option: "When the delay is set to 1" },
      { id: "3", option: "When the delay is set to infinity" },
      { id: "4", option: "When the delay is set to 1000 ms" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 29,
    Ques: "Which of the following statements about the `this` keyword in JavaScript is false?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "hard",
    options: [
      {
        id: "1",
        option: "`this` refers to the global object inside a regular function",
      },
      { id: "2", option: "`this` is undefined in arrow functions" },
      {
        id: "3",
        option: "`this` refers to the object that invoked the function",
      },
      { id: "4", option: "`this` can never be manually bound in JavaScript" },
    ],
    answer: [{ id: "4" }],
    isMultiSelect: false,
  },
  {
    id: 30,
    Ques: "Which of the following JavaScript methods can be used to resolve a promise?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "resolve()" },
      { id: "2", option: "reject()" },
      { id: "3", option: "then()" },
      { id: "4", option: "finally()" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  // logical -easy
  {
    id: 31,
    Ques: "Which number logically completes the series: 2, 5, 10, 17, __ ?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "easy",
    options: [
      { id: "1", option: "26" },
      { id: "2", option: "20" },
      { id: "3", option: "23" },
      { id: "4", option: "30" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 32,
    Ques: "If all roses are flowers, and all flowers are plants, which of the following statements is true?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "easy",
    options: [
      { id: "1", option: "All roses are plants" },
      { id: "2", option: "All plants are roses" },
      { id: "3", option: "Some plants are roses" },
      { id: "4", option: "No roses are plants" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 33,
    Ques: "Which of the following is the odd one out?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "medium",
    options: [
      { id: "1", option: "Cat" },
      { id: "2", option: "Dog" },
      { id: "3", option: "Elephant" },
      { id: "4", option: "Tiger" },
    ],
    answer: [{ id: "3" }],
    isMultiSelect: false,
  },
  {
    id: 34,
    Ques: "Find the next number in the series: 3, 6, 12, 24, __ ?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "medium",
    options: [
      { id: "1", option: "48" },
      { id: "2", option: "36" },
      { id: "3", option: "60" },
      { id: "4", option: "72" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 35,
    Ques: "If the day before yesterday was a Thursday, what day will it be 10 days after the day after tomorrow?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "medium",
    options: [
      { id: "1", option: "Saturday" },
      { id: "2", option: "Sunday" },
      { id: "3", option: "Friday" },
      { id: "4", option: "Thursday" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 36,
    Ques: "Which of the following logically follows the sequence: 1, 4, 9, 16, __ ?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "hard",
    options: [
      { id: "1", option: "25" },
      { id: "2", option: "20" },
      { id: "3", option: "18" },
      { id: "4", option: "27" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 37,
    Ques: "Which number logically completes the series: 1, 1, 2, 6, 24, __ ?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "hard",
    options: [
      { id: "1", option: "120" },
      { id: "2", option: "100" },
      { id: "3", option: "150" },
      { id: "4", option: "180" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 38,
    Ques: "In a certain code language, 'BASKET' is written as 'RAVXBG'. How would you write 'RACKET' in the same code language?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "hard",
    options: [
      { id: "1", option: "RAVXBG" },
      { id: "2", option: "ZSDXHV" },
      { id: "3", option: "DGLJHM" },
      { id: "4", option: "RAVYBG" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 39,
    Ques: "In a race, you overtake the person who is second. What position are you in now?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "hard",
    options: [
      { id: "1", option: "First" },
      { id: "2", option: "Second" },
      { id: "3", option: "Third" },
      { id: "4", option: "Fourth" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 40,
    Ques: "Which one of the following does not belong to the group?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "hard",
    options: [
      { id: "1", option: "Square" },
      { id: "2", option: "Rectangle" },
      { id: "3", option: "Circle" },
      { id: "4", option: "Triangle" },
    ],
    answer: [{ id: "3" }],
    isMultiSelect: false,
  },
  // Quants
  {
    id: 41,
    Ques: "What is the value of 15% of 250?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "easy",
    options: [
      { id: "1", option: "30" },
      { id: "2", option: "40" },
      { id: "3", option: "50" },
      { id: "4", option: "60" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 42,
    Ques: "If a car travels 120 kilometers in 2 hours, what is its average speed?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "easy",
    options: [
      { id: "1", option: "60 km/h" },
      { id: "2", option: "50 km/h" },
      { id: "3", option: "70 km/h" },
      { id: "4", option: "80 km/h" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 43,
    Ques: "What is the least common multiple (LCM) of 6, 8, and 12?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "medium",
    options: [
      { id: "1", option: "24" },
      { id: "2", option: "36" },
      { id: "3", option: "48" },
      { id: "4", option: "60" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 44,
    Ques: "If a box contains 5 red balls, 7 green balls, and 3 blue balls, what is the probability of drawing a red ball?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "medium",
    options: [
      { id: "1", option: "5/15" },
      { id: "2", option: "7/15" },
      { id: "3", option: "3/15" },
      { id: "4", option: "1/3" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 45,
    Ques: "A man can complete a task in 5 days. How long will it take him to complete the task if he works at half the speed?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "medium",
    options: [
      { id: "1", option: "10 days" },
      { id: "2", option: "15 days" },
      { id: "3", option: "20 days" },
      { id: "4", option: "25 days" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 46,
    Ques: "Which of the following numbers is a prime number?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "hard",
    options: [
      { id: "1", option: "29" },
      { id: "2", option: "30" },
      { id: "3", option: "32" },
      { id: "4", option: "35" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 47,
    Ques: "What is the square root of 144?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "hard",
    options: [
      { id: "1", option: "10" },
      { id: "2", option: "12" },
      { id: "3", option: "14" },
      { id: "4", option: "16" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 48,
    Ques: "The cost of 5 apples is $15. What is the cost of 8 apples?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "hard",
    options: [
      { id: "1", option: "$24" },
      { id: "2", option: "$30" },
      { id: "3", option: "$40" },
      { id: "4", option: "$45" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 49,
    Ques: "If the probability of an event happening is 3/5, what is the probability of the event not happening?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "hard",
    options: [
      { id: "1", option: "2/5" },
      { id: "2", option: "3/5" },
      { id: "3", option: "1/5" },
      { id: "4", option: "4/5" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 50,
    Ques: "Which of the following pairs are equal?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "hard",
    options: [
      { id: "1", option: "4 : 2" },
      { id: "2", option: "9 : 3" },
      { id: "3", option: "16 : 4" },
      { id: "4", option: "25 : 5" },
    ],
    answer: [{ id: "1" }, { id: "4" }],
    isMultiSelect: true,
  },
  {
    id: 51,
    Ques: "Which of the following are prime numbers?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "hard",
    options: [
      { id: "1", option: "17" },
      { id: "2", option: "21" },
      { id: "3", option: "19" },
      { id: "4", option: "22" },
    ],
    answer: [{ id: "1" }, { id: "3" }],
    isMultiSelect: true,
  },
];

module.exports = Questions;
