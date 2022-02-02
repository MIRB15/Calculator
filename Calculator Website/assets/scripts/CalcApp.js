const defaultResult = 0
let currentResult = defaultResult;
let logEntries = [];

function getUserInput(){
  return parseInt(userInput.value);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry); //.push() adds to array. objectName.keyName to access property
  console.log(logEntries);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription)
}

function calculateResult(calculationType){
  if(calculationType !== 'ADD'  && 
  calculationType !== 'SUBTRACT' && 
  calculationType !== 'MULTIPLY' && 
  calculationType !== 'DIVIDE' ){
    return;
  }
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let operator;
  if (calculationType == 'ADD'){
    currentResult += enteredNumber
    operator = '+'
  } else if (calculationType === 'SUBTRACT'){
    currentResult -= enteredNumber;
    operator = '-'
  } else if(calculationType === 'MULTIPLY'){
    currentResult *= enteredNumber;
    operator = '*'
  } else if(calculationType === 'DIVIDE'){
    currentResult /= enteredNumber;
    operator = '/'
  } else {
    currentResult = 0;
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add(){
  calculateResult('ADD');
}

function subtract(){
  calculateResult('SUBTRACT');
}

function multiply(){
  calculateResult('MULTIPLY');
}

function divide(){
  calculateResult('DIVIDE');
}

/* ADD CLEAR FUNCTIONALITY LATER!!!!!!
function clear(){
  createAndWriteOutput
}
*/

addBtn.addEventListener('click', add); // Just add fucntion name dont add () or parameters because you dont want to run immediatley, only when click
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
clearBtn.addEventListener('click', clear)