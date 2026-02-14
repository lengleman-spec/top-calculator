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

// Must use parseFloat to transform from a string to a number:
const prev = parseFloat(previousNumber);
const current = parseFloat(currentNumber);
const result = subtract(prev, current);

// Console Tests:
console.log(add(5, 3));
console.log(subtract(3, 1));
console.log(subtract(3, 1));
