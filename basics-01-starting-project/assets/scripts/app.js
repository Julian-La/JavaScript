const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function writeToLog( // This is just a console test [not important]
    operationIdentifier,
    previousNumber,
    operationNumber,
    newResult
){
    const logEntry = { 
        operation: operationIdentifier,
        previousNumber: previousNumber,
        placedNumber: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const calculationDescription = 'Calculation: ' + `${currentResult} + ${enteredNumber}`;
    const initialNumber = currentResult;
    currentResult += enteredNumber;
    outputResult(currentResult, calculationDescription);
    writeToLog('ADD', initialNumber, enteredNumber, currentResult);
}

function sub(){
    const enteredNumber = getUserNumberInput();
    const calculationDescription = 'Calculation: ' + `${currentResult} + ${enteredNumber}`;
    const initialNumber = currentResult;
    currentResult -= enteredNumber;
    outputResult(currentResult, calculationDescription);
    writeToLog('SUB', initialNumber, enteredNumber, currentResult);
}

function mult(){
    const enteredNumber = getUserNumberInput();
    const calculationDescription = 'Calculation: ' + `${currentResult} + ${enteredNumber}`;
    const initialNumber = currentResult;
    currentResult *= enteredNumber;
    outputResult(currentResult, calculationDescription);
    writeToLog('MULTIPLY', initialNumber, enteredNumber, currentResult);
}

function div(){
    const enteredNumber = getUserNumberInput();
    const calculationDescription = 'Calculation: ' + `${currentResult} + ${enteredNumber}`;
    const initialNumber = currentResult;
    currentResult /= enteredNumber;
    outputResult(currentResult, calculationDescription);
    writeToLog('DIV', initialNumber, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mult);
divideBtn.addEventListener('click', div);

/* function greetUser(name){
    alert(name);
}
greetUser('Maxi'); */






