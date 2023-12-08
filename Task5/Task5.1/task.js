let isOperatorClicked = false;
let isDigitClicked = false;
let historyOfOperations;
let operation;

function enter(item) {
    document.form.inputText.value = document.form.inputText.value + item;
}

function enterDigit(item) {
    enter(item);
    isDigitClicked = true;
}

function enterOperator(item) {
    if (!isDigitClicked || isDigitClicked && isOperatorClicked && item === '-') {
        enter(item);
    } else {
        if (!isOperatorClicked) {
            enter(' ' + item + ' ');
            isOperatorClicked = true;
        }
    }
}

function clearInput() {
    document.form.inputText.value = '';
    isOperatorClicked = false;
    isDigitClicked = false;
}

function back() {
    let input = document.form.inputText.value;
    document.form.inputText.value = input.substring(0, input.length - 1);
}

function equal() {
    let input = document.form.inputText.value;
    let splitedInput;
    splitedInput = input.split(' ');
    console.log('splitedInput', splitedInput);
    historyOfOperations = document.formHistory.inputHistory.value;
    historyOfOperations += input;
    let result = operation.calculate(Number.parseFloat(splitedInput[0]),Number.parseFloat(splitedInput[2]));
    console.log(result);
    clearInput();
    if (result!==undefined) {
        enterDigit(result);
        historyOfOperations += ' = ' + result + '\n' + '________________________________________' + '\n';
    } else {
        enterDigit('');
        historyOfOperations += ' - некорректное выражение \n' + '________________________________________' + '\n';
    }
    document.formHistory.inputHistory.value = historyOfOperations;
}

let mySqrt = () => {
    document.form.inputText.value = Math.sqrt(+document.form.inputText.value)
};

function plus() {
    operation = new OperationPlus();
    enterOperator('+');
}

function minus() {
    operation = new OperationMinus();
    enterOperator('-');
}

function multi() {
    operation = new OperationMulti();
    enterOperator('*')
}

function division() {
    operation = new OperationDivision();
    enterOperator('/')
}

function degree() {
    operation = new OperationDegree();
    enterOperator('^')
}

class Operation {
    calculate(operandOne, operandTwo) {

    }
}

class OperationPlus extends Operation {
    calculate(operandOne, operandTwo) {
        let result;
        return result = operandOne + operandTwo;
    }

}

class OperationMinus extends Operation {
    calculate(operandOne, operandTwo) {
        let result;
        return result = operandOne - operandTwo;
    }
}

class OperationMulti extends Operation {
    calculate(operandOne, operandTwo) {
        let result;
        return result = operandOne * operandTwo;
    }
}

class OperationDivision extends Operation {
    calculate(operandOne, operandTwo) {
        let result;
        return result = operandOne / operandTwo;
    }
}

class OperationDegree extends Operation {
    calculate(operandOne, operandTwo) {
        let result;
        return result = operandOne ** operandTwo;
    }
}