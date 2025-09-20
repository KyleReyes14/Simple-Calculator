const ac = document.querySelector(".ac");
const plus = document.getElementById("plus");
const equals = document.getElementById("equals");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divide = document.getElementById("divide");
const percent = document.getElementById("percent");
const backspace = document.getElementById("backspace");

const display = document.getElementById("calc-typed");
const operationDisplay = document.getElementById("calc-operation");
const btn = document.querySelectorAll("button");

document.addEventListener("DOMContentLoaded", function() {
    let currentInput = "0";
    let operation = null;
    let previousInput = "";
    let result = 0;

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
                
            // limits input length to 12 characters
            if (currentInput.length > 12) {
                currentInput = currentInput.slice(0, 12);
            // handles AC
            } else if (button.classList.contains("ac")) {
                currentInput = "0";
                display.textContent = currentInput;
                operationDisplay.textContent = "";
                operation = null;
                previousInput = "";

            // handles operators
            } else if (button.classList.contains("opt")) { 
                if (value === "+") {
                    operationDisplay.textContent = currentInput + " +";
                    operation = "+";
                } else if (value === "-" || value === "-") { 
                    operationDisplay.textContent = currentInput + " -";
                    operation = "-";
                } else if (value === "x") {
                    operationDisplay.textContent = currentInput + " x";
                    operation = "*";
                } else if (value === "÷") {
                    operationDisplay.textContent = currentInput + " ÷";
                    operation = "/";
                }
                previousInput = currentInput;
                currentInput = "0";

            // handles equals
            } else if (button.id === "equals" || value === "=") {
                if (operation !== null && previousInput !== "") {
                    switch (operation) {
                        case "+":
                            result = parseFloat(previousInput) + parseFloat(currentInput);
                            break;
                        case "-":
                            result = parseFloat(previousInput) - parseFloat(currentInput);
                            break;
                        case "*":
                            result = parseFloat(previousInput) * parseFloat(currentInput);   
                            break;
                        case "/":
                            if (parseFloat(currentInput) !== 0) { // check divisor for undefined
                                result = parseFloat(previousInput) / parseFloat(currentInput);
                            } else {
                                result = "Error";
                            }
                            break;
                    }

                    operationDisplay.textContent = "";
                    operation = null;
                    previousInput = "";
                    currentInput = result.toString();
                    display.textContent = currentInput;
                    console.log("Result:", result);
                }
            }
            

            display.textContent = currentInput;
        });
    });
});
