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
const operationButtons = document.querySelectorAll(".operation");

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
// Must use parseFloat to transform from a string to a number

// Function to call other functions on the numbers:
function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

// Function to display:
function updateDisplay() {
  display.textContent = currentNumber || "0";
}

// Handle number button clicks:
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentNumber += button.textContent;
    updateDisplay();
  });
});

// Handle operator clicks:
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    previousNumber = currentNumber;
    operator = button.textContent;
    currentNumber = "";
  });
});

// Handle clear button clicks:
clear.addEventListener("click", () => {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  updateDisplay();
});

// Decimal button clicks:
decimal.addEventListener("click", () => {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    updateDisplay();
  }
});

equal.addEventListener("click", () => {
  // Don't calculate if missing values:
  if (currentNumber === "" || previousNumber === "") {
    return;
  }

  // Convert from strings to numbers:
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);

  // Call operate() function:
  const result = operate(operator, prev, current);

  // Display the result:
  currentNumber = result.toString();
  updateDisplay();

  // Reset previous and operator - but keep current:
  previousNumber = "";
  operator = "";
});

// Console Tests:
console.log(add(5, 3));
console.log(subtract(3, 1));
console.log(multiply(3, 4));
console.log(divide(3, 4));
console.log(divide(3, 0));
