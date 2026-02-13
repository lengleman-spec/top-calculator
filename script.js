// function add(num1, num2) {
//   return num1 + num2;
// }
// Grabbing the display element:
const display = document.getElementById("display");

function appendNumber(num) {
  currentInput += num;
  display.textContent = currentInput;
}
