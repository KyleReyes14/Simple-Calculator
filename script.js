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

            // handles numbers
            if (!isNaN(value)) { 
                if (currentInput === "0") {
                    currentInput = value;
                } else {
                    currentInput += value;
                }

            // handles AC
            } else if (button.classList.contains("ac")) {
                currentInput = "0";
                display.textContent = currentInput;
                operationDisplay.textContent = "";

            // handles operators
            } else if (button.classList.contains("opt")) { 
                if (value === "+") {
                    operationDisplay.textContent = currentInput + " +";
                    currentInput = "0";
                } else if (value === "−") {
                    operationDisplay.textContent = currentInput + " -";
                    currentInput = "0";
                } else if (value === "×") {
                    operationDisplay.textContent = currentInput + " ×";
                    currentInput = "0";
                } else if (value === "÷") {
                    operationDisplay.textContent = currentInput + " ÷";
                    currentInput = "0";
                }
            }
            display.textContent = currentInput;
        });
    });
});

