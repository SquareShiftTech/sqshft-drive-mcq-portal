const Questions = [
  // Easy 1-12
  {
    id: 1,
    Ques: "Which of the following data structures is non-linear? (multi-choice)",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "Stack" },
      { id: "2", option: "Array" },
      { id: "3", option: "Graph" },
      { id: "4", option: "Linked List" },
      { id: "5", option: "Tree" },
    ],
    answer: [{ id: "3" }, { id: "5" }],
    isMultiSelect: true,
  },
  {
    id: 2,
    Ques: "Which of the following series will be printed by the given pseudocode?",
    quesImage: "",
    codeBlock: `
  Integer a, b, c
  Set b = 4, c = 5
  for(each a from 2 to b)
    print c
    b = b - 1
    c = c + b
  End loop
    `,
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "5 8 10" },
      { id: "2", option: "5 8 10 11" },
      { id: "3", option: "Infinite" },
      { id: "4", option: "5 8" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 3,
    Ques: "Which of the following statement is correct to display all the cities with the condition, temperature, and humidity whose humidity is in the range of 60 to 75 from the 'weather' table? (multichoice)",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "SELECT * FROM weather WHERE humidity IN (60 to 75)" },
      {
        id: "2",
        option: "SELECT * FROM weather WHERE humidity BETWEEN 60 AND 75",
      },
      {
        id: "3",
        option: "SELECT * FROM weather WHERE humidity NOT IN (60 AND 75)",
      },
      {
        id: "4",
        option: "SELECT * FROM weather WHERE humidity NOT BETWEEN 60 AND 75",
      },
      {
        id: "5",
        option: "SELECT * FROM weather WHERE humidity >= 60 or humidity <= 75",
      },
      {
        id: "6",
        option: "SELECT * FROM weather WHERE humidity >= 60 AND humidity <= 75",
      },
    ],
    answer: [{ id: "2" }, { id: "6" }],
    isMultiSelect: true,
  },
  {
    id: 4,
    Ques: "Guess the output of this javascript code?",
    quesImage: "",
    codeBlock: `
  let x = [1, 2, 3];
  let y = [1, 2, 3];
  let z = y;
  
  console.log(x == y);
  console.log(x === y);
  console.log(z == y);
  console.log(z == x);
    `,
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "false false true false" },
      { id: "2", option: "false false false false" },
      { id: "3", option: "true true false true" },
      { id: "4", option: "false true false true" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 5,
    Ques: "Guess the output?",
    quesImage: "",
    codeBlock: `
  const arr = [1, 2, 3];
  arr.shift();
  console.log(arr);
    `,
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "[2, 3]" },
      { id: "2", option: "[1, 2]" },
      { id: "3", option: "[3]" },
      { id: "4", option: "[2, 3, 1]" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 6,
    Ques: "What is the worst-case time complexity of searching for an element in an unbalanced binary search tree (BST)?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "medium",
    options: [
      { id: "1", option: "O(1)" },
      { id: "2", option: "O(log n)" },
      { id: "3", option: "O(n)" },
      { id: "4", option: "O(n log n)" },
    ],
    answer: [{ id: "3" }],
    isMultiSelect: false,
  },
  {
    id: 7,
    Ques: "Which of the following is true about a class in Object-Oriented Programming?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "medium",
    options: [
      {
        id: "1",
        option: "A class defines the behavior and attributes of an object.",
      },
      { id: "2", option: "A class is a type of object." },
      { id: "3", option: "A class is a structure that stores data." },
      { id: "4", option: "None of the above." },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 8,
    Ques: "What will be the output of the program?",
    quesImage: "",
    codeBlock: `
  n = 999
  print(n & 1)
    `,
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "1" },
      { id: "2", option: "0" },
      { id: "3", option: "999" },
      { id: "4", option: "undefined" },
      { id: "5", option: "Syntax Error" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 9,
    Ques: "What will be the output of the following code?",
    quesImage: "",
    codeBlock: `
  a = 10
  const foo() {
      a = 5
      print(a)
  }
  foo()
  print(a)
    `,
    type: "prog",
    level: "easy",
    options: [
      { id: "1", option: "5 5" },
      { id: "2", option: "5 10" },
      { id: "3", option: "10 5" },
      { id: "4", option: "10 10" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 10,
    Ques: "What is the difference between forEach() and map()?",
    quesImage: "",
    codeBlock: "",
    type: "prog",
    level: "easy",
    options: [
      {
        id: "1",
        option: "map() modifies the original array, while forEach() does not.",
      },
      {
        id: "2",
        option: "forEach() returns a new array, while map() does not.",
      },
      {
        id: "3",
        option: "map() returns a new array, while forEach() does not.",
      },
      { id: "4", option: "There is no difference." },
    ],
    answer: [{ id: "3" }],
    isMultiSelect: false,
  },
  {
    id: 11,
    Ques: "What will be the output of the following Python program?",
    quesImage: "",
    codeBlock: `
  def func(s):
      r_s = ""
      i = len(s) - 1
      while i >= 0:
          r_s += s[i+1]
          i = i-1
      return r_s
  
  # Call the function
  print(func("hello"))
    `,
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "olleh" },
      { id: "2", option: "Index out of range" },
      { id: "3", option: "lleho" },
      { id: "4", option: "syntax error" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 12,
    Ques: "What will be the output of the following Python program?",
    quesImage: "",
    codeBlock: `
  a = "HELLO"
  b = a
  a += " WORLD"
  print(b)
    `,
    type: "prog",
    level: "hard",
    options: [
      { id: "1", option: "HELLO" },
      { id: "2", option: "HELLO WORLD" },
      { id: "3", option: "WORLD" },
      { id: "4", option: "HELLOWORLD" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  // LOGICAL 13-26
  {
    id: 13,
    Ques: "Tanya is older than Eric. Cliff is older than Tanya. Eric is older than Cliff. If the first two statements are true, the third statement is:",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "easy",
    options: [
      { id: "1", option: "True" },
      { id: "2", option: "False" },
      { id: "3", option: "Uncertain" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 14,
    Ques: "Five persons A, B, C, D, and E are sitting in a row facing you... If E occupies a corner position, then who is sitting in the centre?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "medium",
    options: [
      { id: "1", option: "A" },
      { id: "2", option: "B" },
      { id: "3", option: "C" },
      { id: "4", option: "D" },
      { id: "5", option: "E" },
    ],
    answer: [{ id: "4" }],
    isMultiSelect: false,
  },
  {
    id: 15,
    Ques: "Find the missing number in the sequence: 2, 6, 12, 20, __, 42",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "easy",
    options: [
      { id: "1", option: "30" },
      { id: "2", option: "32" },
      { id: "3", option: "36" },
      { id: "4", option: "40" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 16,
    Ques: "",
    quesImage: "",
    codeBlock: `
Statements:  
    All cats are dogs.  
    Some dogs are birds.  

Conclusions:  
    I. Some cats are birds.  
    II. All birds are cats.
`,
    type: "logical",
    level: "easy",
    options: [
      { id: "1", option: "Only Conclusion I follows" },
      { id: "2", option: "Only Conclusion II follows" },
      { id: "3", option: "Both follow" },
      { id: "4", option: "Neither follows" },
    ],
    answer: [{ id: "4" }],
    isMultiSelect: false,
  },
  {
    id: 17,
    Ques: "If MIRROR is coded as NJSQPS, how is WINDOW coded?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "easy",
    options: [
      { id: "1", option: "XKOEPQ" },
      { id: "2", option: "XJMQPX" },
      { id: "3", option: "XKNPQY" },
      { id: "4", option: "XJOCPX" },
    ],
    answer: [{ id: "4" }],
    isMultiSelect: false,
  },
  {
    id: 18,
    Ques: "A is the father of B. C is the daughter of B. D is the brother of C. How is D related to A?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "medium",
    options: [
      { id: "1", option: "Son" },
      { id: "2", option: "Grandson" },
      { id: "3", option: "Nephew" },
      { id: "4", option: "Cousin" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 19,
    Ques: "10 coaches of a passenger train have got derailed and have blocked the railway track from both ends. ",
    quesImage: "",
    codeBlock: `
    Courses of action:  
        I. The railway authorities should immediately send men and equipment and clear the spot.  
        II. All the trains running in both directions should be diverted immediately via other routes.
      `,
    type: "logical",
    level: "easy",
    options: [
      { id: "1", option: "If only I follows" },
      { id: "2", option: "If only II follows" },
      { id: "3", option: "If either I or II follows" },
      { id: "4", option: "If neither I nor II follows" },
      { id: "5", option: "If both I and II follow" },
    ],
    answer: [{ id: "5" }],
    isMultiSelect: false,
  },
  {
    id: 20,
    Ques: "If PINK is coded as 1691411, then RED will be coded as -",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "easy",
    options: [
      { id: "1", option: "1963" },
      { id: "2", option: "1854" },
      { id: "3", option: "1853" },
      { id: "4", option: "1954" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 21,
    Ques: "At the baseball game, Henry was sitting in seat 253. Marla was sitting to the right of Henry in seat 254. In the seat to the left of Henry was George. Inez was sitting to the left of George. Which seat is Inez sitting in?",
    quesImage: "",
    codeBlock: "",
    type: "logical",
    level: "medium",
    options: [
      { id: "1", option: "251" },
      { id: "2", option: "254" },
      { id: "3", option: "255" },
      { id: "4", option: "256" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 22,
    Ques: "Select three figures out of the following five figures which when fitted into each other would form a square.",
    quesImage:
      "https://images.javatpoint.com/reasoning/images/construction-of-shapes-q1.png",
    codeBlock: `
  Images of five figures (1, 2, 3, 4, 5) are provided. The goal is to identify which combination of figures, when fitted into each other, forms a square.
    `,
    type: "logical",
    level: "hard",
    options: [
      { id: "1", option: "1, 2, 4" },
      { id: "2", option: "1, 2, 5" },
      { id: "3", option: "5, 3, 1" },
      { id: "4", option: "2, 3, 4" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 23,
    Ques: "Which of the following series of figures follows the given rule? Rule: The closed figure loses its sides, and the open figure gains its sides as the series proceeds.",
    quesImage:
      "https://images.javatpoint.com/reasoning/images/rule-detection-q1.png",
    codeBlock: "",
    type: "logical",
    level: "hard",
    options: [
      { id: "1", option: "1" },
      { id: "2", option: "2" },
      { id: "3", option: "3" },
      { id: "4", option: "4" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 24,
    Ques: "  Peter is in the East of Tom and Tom is in the North of John. Mike is in the South of John then in which direction of Peter is Mike?",
    codeBlock: "",
    type: "logical",
    level: "medium",
    options: [
      { id: "1", option: "South-East" },
      { id: "2", option: "South-West" },
      { id: "3", option: "South" },
      { id: "4", option: "North-East" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 25,
    Ques: "P and Q are the married couple. X and Y are sisters. X is the sister of P. How is Y related to Q?",
    codeBlock: "",
    type: "logical",
    level: "medium",
    options: [
      { id: "1", option: "Sister" },
      { id: "2", option: "Cousin" },
      { id: "3", option: "Sister-in-law" },
      { id: "4", option: "Daughter-in-law" },
    ],
    answer: [{ id: "3" }],
    isMultiSelect: false,
  },
  {
    id: 26,
    Ques: "Count the number of rectangles in the below figure.",
    quesImage:
      "https://media.geeksforgeeks.org/wp-content/uploads/20230911093322/Analytical-reasoning-(20-images)-07.webp",
    codeBlock: "",
    type: "logical",
    level: "hard",
    options: [
      { id: "1", option: "19" },
      { id: "2", option: "16" },
      { id: "3", option: "30" },
      { id: "4", option: "34" },
    ],
    answer: [{ id: "4" }],
    isMultiSelect: false,
  },
  // QUANTS 27-42
  {
    id: 27,
    Ques: "A person has 4 coins each of different denominations. What is the number of different sums of money the person can form (using one or more coins at a time)?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "medium",
    options: [
      { id: "1", option: "15" },
      { id: "2", option: "16" },
      { id: "3", option: "12" },
      { id: "4", option: "11" },
    ],
    answer: [{ id: "1" }],
    isMultiSelect: false,
  },
  {
    id: 28,
    Ques: "If (2x - y) = 4 then (6x - 3y) =?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "easy",
    options: [
      { id: "1", option: "15" },
      { id: "2", option: "12" },
      { id: "3", option: "18" },
      { id: "4", option: "10" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 29,
    Ques: "A, B and C jointly thought of starting a business venture. It was agreed that A would invest Rs. 6500 for 6 months, B, Rs. 9100 for 5 months and C, Rs. 13,000 for 3 months. A wants to be the working member for which, he was to receive 5% of the profits. The profit earned was Rs. 8000. Calculate the share of B in the profit.",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "medium",
    options: [
      { id: "1", option: "Rs. 1900" },
      { id: "2", option: "Rs. 2660" },
      { id: "3", option: "Rs. 2800" },
      { id: "4", option: "Rs. 2840" },
    ],
    answer: [{ id: "3" }],
    isMultiSelect: false,
  },
  {
    id: 30,
    Ques: "A cow is tethered in the middle of the field with a 14-foot-long rope. If the cow grazes 100 sq. ft. per day, then approximately what time will be taken by the cow to graze the whole field? (Approx)",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "hard",
    options: [
      { id: "1", option: "2 days" },
      { id: "2", option: "6.15 days" },
      { id: "3", option: "18.5 days" },
      { id: "4", option: "24 days" },
      { id: "5", option: "None of these" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 31,
    Ques: "A man travelled 30% of his journey at a speed of 85 kmph and the rest of his journey at a speed of 33 kmph. Find his average speed throughout the journey.",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "medium",
    options: [
      { id: "1", option: "46.6 kmph" },
      { id: "2", option: "48.6 kmph" },
      { id: "3", option: "42.6 kmph" },
      { id: "4", option: "44.6 kmph" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 32,
    Ques: "A shopkeeper sold an article for Rs. 2500. If the cost price of the article is 2000, find the profit percent.",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "easy",
    options: [
      { id: "1", option: "23%" },
      { id: "2", option: "25%" },
      { id: "3", option: "27%" },
      { id: "4", option: "29%" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 33,
    Ques: "In a 500 m race, the ratio of the speeds of two participants A and B is 3:4. A has a start of 140 m. Then, A wins by?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "medium",
    options: [
      { id: "1", option: "60m" },
      { id: "2", option: "40m" },
      { id: "3", option: "20m" },
      { id: "4", option: "10m" },
    ],
    answer: [{ id: "3" }],
    isMultiSelect: false,
  },
  {
    id: 34,
    Ques: "What is the probability of getting an even number when a dice is rolled?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "easy",
    options: [
      { id: "1", option: "1/5" },
      { id: "2", option: "1/2" },
      { id: "3", option: "1/3" },
      { id: "4", option: "1/4" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 35,
    Ques: "To complete a work, a person A takes 10 days and another person B takes 15 days. If they work together, in how much time will they complete the work?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "easy",
    options: [
      { id: "1", option: "5 days" },
      { id: "2", option: "6 days" },
      { id: "3", option: "7 days" },
      { id: "4", option: "4 days" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 36,
    Ques: "Two friends A and B working together can complete an assignment in 4 days. If A can do the assignment alone in 12 days, in how many days can B alone do the assignment?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "easy",
    options: [
      { id: "1", option: "4 days" },
      { id: "2", option: "5 days" },
      { id: "3", option: "6 days" },
      { id: "4", option: "7 days" },
    ],
    answer: [{ id: "3" }],
    isMultiSelect: false,
  },
  {
    id: 37,
    Ques: "A bank provides a loan of ₹55,000 to a shopkeeper at a 5% compound rate of interest (Compounded annually). After 2 years the amount to be deposited by the shopkeeper is:",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "hard",
    options: [
      { id: "1", option: "₹62,526.50" },
      { id: "2", option: "₹65,259.75" },
      { id: "3", option: "₹60,637.50" },
      { id: "4", option: "₹55,825.75" },
    ],
    answer: [{ id: "3" }],
    isMultiSelect: false,
  },
  {
    id: 38,
    Ques: "Which of the following is a prime number?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "medium",
    options: [
      { id: "1", option: "517" },
      { id: "2", option: "559" },
      { id: "3", option: "571" },
      { id: "4", option: "533" },
    ],
    answer: [{ id: "3" }],
    isMultiSelect: false,
  },
  {
    id: 39,
    Ques: "In a class, the ratio of boys to girls is 5:3. If there are 40 boys, how many girls are there in the class?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "easy",
    options: [
      { id: "1", option: "22 girls" },
      { id: "2", option: "24 girls" },
      { id: "3", option: "23 girls" },
      { id: "4", option: "25 girls" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 40,
    Ques: "If a person can complete a task in 8 hours, how much of the task can they complete in 2 hours?",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "easy",
    options: [
      { id: "1", option: "2/3 task" },
      { id: "2", option: "1/4 task" },
      { id: "3", option: "1 task" },
      { id: "4", option: "1/3 task" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 41,
    Ques: "A and B take part in a 100 m race. A runs at 5 km per hour. A gives B a start of 8 m and still beats him by 8 seconds. The speed of B is:",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "medium",
    options: [
      { id: "1", option: "5.15 km/hr" },
      { id: "2", option: "4.14 km/hr" },
      { id: "3", option: "4.25 km/hr" },
      { id: "4", option: "4.41 km/hr" },
    ],
    answer: [{ id: "2" }],
    isMultiSelect: false,
  },
  {
    id: 42,
    Ques: "A drum of water is 2/5 full. When 38 liters are drawn from it, it is just 1/8 full. Find the total capacity of the drum in liters.",
    quesImage: "",
    codeBlock: "",
    type: "quants",
    level: "medium",
    options: [
      { id: "1", option: "135" },
      { id: "2", option: "137" },
      { id: "3", option: "138" },
      { id: "4", option: "140" },
    ],
    answer: [{ id: "3" }],
    isMultiSelect: false,
  },
];

module.exports = Questions;
