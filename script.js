function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a-b;
}

function multiply (a, b) {
    return a*b;
}

function divide (a, b) {
    return a/b;
}

function operate (operator, a, b) {
    a = Number(a);
    b = Number(b);
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        if (b === 0) {
            return "Error";
        } else {
            return divide(a, b);
        }
    } else {
        return null;
    }
}
const display = document.querySelector(".calc-typed");
const buttons = document.querySelectorAll("button");
const ac = document.querySelector(".ac");
const de
