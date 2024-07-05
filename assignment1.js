// Lecture - 1

//Assignment 1:-  Create a command line argument-based calculator using Node.js that takes in mathematical operations and numbers as arguments from the terminal and provides the appropriate output.

//Solution is here

const crypto = require("crypto");
const args = process.argv.slice(2);

const operation = args[0];
const numbers = args.slice(1).map(Number);

function calculate(operation, numbers) {
  if (operation === "add") {
    return numbers.reduce((acc, num) => acc + num, 0);
  } else if (operation === "sub") {
    return numbers.reduce((acc, num) => acc - num);
  } else if (operation === "multi") {
    return numbers.reduce((acc, num) => acc * num, 1);
  } else if (operation === "divide") {
    return numbers.reduce((acc, num) => acc / num);
  }
}

const result = calculate(operation, numbers);
console.log(result);
