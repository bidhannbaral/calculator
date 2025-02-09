
    const display = document.querySelector("#display");
    const clear = document.querySelector("#clear");
    const percent = document.querySelector("#percent");
    const sign = document.querySelector("#sign");
    const one = document.querySelector("#one");
    let displayValue = "0";
    let firstNumber;
    let secondNumber;
    let operator;

    if (display.textContent == "0") {
        one.addEventListener("click", () => {
            display.textContent = "1";
        });
    }

    clear.addEventListener("click", () => {
        clear();
    });

    percent.addEventListener("click", () => {
        displayPercent(displayValue);
    })

    sign.addEventListener("click", () => {
        displaySign(displayValue);
    })

    function updateDisplay() {
        if (displayValue.length < 9) {
            display.textContent = displayValue;
        }
    }

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        return num1 / num2;
    }

    function displayPercent(num) {
        return num / 100;
    }

    function displaySign(num) {
        return ((-1) * num);
    }

    function clear() {
        displayValue = "0";
    }

    function updateDisplay() {
        display.textContent = displayValue;
    }
