// global variables:
let currentNumber = "";
let previousNumber = "";
let operator = "";

// Selectors
const display = document.getElementById("display");

const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".number");

// Addition function
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));
