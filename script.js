
    const display = document.querySelector("#display");
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const clear = document.querySelector("#clear");
    const equals = document.querySelector("#equals");
    const sign = document.querySelector("#sign");
    const percent = document.querySelector("#percent");
    const decimal = document.querySelector("#decimal");
    let displayValue = "0";
    let firstNumber = null;
    let secondNumber = null;
    let theOperator = null;
    let result = null;

    updateDisplay();

    numbers.forEach((number) => {
        number.addEventListener("click", () => {
            if (displayValue == "0") {
                displayValue = number.value;
                updateDisplay();
            } else if (displayValue.length < 9) {
                displayValue += number.value;
                updateDisplay();
            }
        });
    });

    operators.forEach((operator) => {
        operator.addEventListener("click", () => {
            if (firstNumber == null) {
                firstNumber = Number(displayValue);
            } else if (theOperator != null) {
                secondNumber = Number(displayValue);
                operate(firstNumber, secondNumber, theOperator);
                firstNumber = Number(result);
            }
            theOperator = operator.value;
            displayValue = "0";
            updateDisplay();
        });
    });

    clear.addEventListener("click", () => {
        clearDisplay();
    });

    equals.addEventListener("click", () => {
        if (firstNumber !== null && theOperator !== null) {
            secondNumber = Number(displayValue);
            operate(firstNumber, secondNumber, theOperator);
            displayValue = result;
            firstNumber = Number(result);
            secondNumber = null;
            theOperator = null;
            updateDisplay();
        }
    });

    sign.addEventListener("click", () => {
        displaySign(Number(displayValue));
        displayValue = result;
        firstNumber = Number(result);
        updateDisplay();
    });

    percent.addEventListener("click", () => {
        displayPercent(Number(displayValue));
        displayValue = result;
        firstNumber = Number(result);
        updateDisplay();
    });

    decimal.addEventListener("click", () => {
       if (displayValue = "0") {
           displayValue = "0.";
       } else {
           displayValue += ".";
       }
    });

    function setNumber(num) {
        if (firstNumber == null) {
            firstNumber = Number(num);
        } else if (firstNumber != null && theOperator != null) {
            secondNumber = Number(num);
        }
    }

    function updateDisplay() {
        display.textContent = displayValue;
    }

    function add(num1, num2) {
        result = (num1 + num2).toString();
    }

    function subtract(num1, num2) {
        result = (num1 - num2).toString();
    }

    function multiply(num1, num2) {
        result = (num1 * num2).toString();
    }

    function divide(num1, num2) {
        result = (num1 / num2).toString();
    }

    function displayPercent(num) {
        result = (num / 100).toString();
    }

    function displaySign(num) {
        result = ((-1) * num).toString();
    }

    function operate(num1, num2, operator) {
        if (operator == "+") {
            add(num1, num2);
        } else if (operator == "-") {
            subtract(num1, num2);
        } else if (operator == "*") {
            multiply(num1, num2);
        } else if (operator == "/") {
            if (num2 == 0) {
                result = "ERROR";
            } else {
                divide(num1, num2);
            }
        }
        displayValue = result;
        updateDisplay();
    }

    function clearDisplay() {
        firstNumber = null;
        secondNumber = null;
        theOperator = null;
        result = null;
        displayValue = "0";
        updateDisplay();
    }

    function updateDisplay() {
        display.textContent = displayValue;
    }
