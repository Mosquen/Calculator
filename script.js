const calculatorScreen = document.querySelector('.calculator-screen');

calculatorScreen.value = '';

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

let prevNumber = '0';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});

const inputOperators = (operator) => {
    if(calculationOperator === ''){
            prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperators(event.target.value);
        updateScreen(event.target.value);
    })
});

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = (parseFloat(prevNumber) + parseFloat(currentNumber));
            break;
        case "-":
            result = (parseFloat(prevNumber) - parseFloat(currentNumber));
            break;
        case "*":
            result = (parseFloat(prevNumber) * parseFloat(currentNumber));
            break;
        case "/":
            result = (parseFloat(prevNumber) / parseFloat(currentNumber));
            break;
        case "%":
            if(currentNumber === '0'){
                result = (parseFloat(prevNumber) / 10);
            }else{
                result = (parseFloat(prevNumber) / parseFloat(currentNumber));
            }
            break;
        default:
            break;
    }
    currentNumber   = result;
    calculationOperator = '';
}

const clearBtn = document.querySelector('.all-clear');

const clearAll = () => {
    prevNumber          = '';
    calculationOperator = '';
    currentNumber       = '';
    calculatorScreen.value = '';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

const decimal = document.querySelector('.decimal');

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return null;
    }else{
        currentNumber += dot;
    }
}

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(event.target.value);
});

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', (event) => {
    inputOperators(event.target.value);
    updateScreen(event.target.value);
});

