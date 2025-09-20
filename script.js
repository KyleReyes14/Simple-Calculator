const ac = document.querySelector(".ac");
const plus = document.getElementById("plus");
const equals = document.getElementById("equals");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divide = document.getElementById("divide");

const display = document.getElementById("calc-typed");
const operationDisplay = document.getElementById("calc-operation");
const btn = document.querySelectorAll("button");

document.addEventListener("DOMContentLoaded", function() {
    let currentInput = "0";

    btn.forEach(function(button) {
        button.addEventListener("click", () => {
            const value = button.textContent;
            if (!isNaN(value)) {
                if (currentInput === "0") {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
            }

            display.textContent = currentInput;
            if (button.classList.contains("ac")) {
                currentInput = "0";
                display.textContent = currentInput;
                operationDisplay.textContent = "";
            }
        });
    });
});
