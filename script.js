// Grabbing the display element:
const display = document.getElementById("display");

// Calculator state:
let currentInput = "";
let previousInput = "";
let operator = "";

// Add a number or decimal
function appendNumber(num) {
  if (num === "." && currentInput.includes(".")) return;
  currentInput += num;
  display.textContent = currentInput;
}
