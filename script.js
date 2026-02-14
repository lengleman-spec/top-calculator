// global variables:
let currentNumber = "";
let previousNumber = "";
let operator = "";

// Selectors:
const display = document.getElementById("display");

const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".number");

// Addition function:
function add(a, b) {
  return a + b;
}

// Subtraction function:
function subtract(a, b) {
  return a - b;
}

// Multiplication function:
function multiply(a, b) {
  return a * b;
}

// Division function:
function divide(a, b) {
  if (b === 0) {
    return "Error";
  }
  return a / b;
}

// The DOM always gives you text as a string!!
// Must use parseFloat to transform from a string to a number:
function calculate() {
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);
  return subtract(prev, current);
}

// Console Tests:
console.log(add(5, 3));
console.log(subtract(3, 1));
console.log(multiply(3, 4));
console.log(divide(3, 4));
console.log(divide(3, 0));
