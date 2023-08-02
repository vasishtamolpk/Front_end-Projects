let resultElement = document.getElementById('result');
let currentExpression = '';

function appendToResult(value) {
  currentExpression += value;
  resultElement.value = currentExpression;
}

function calculate() {
  try {
    currentExpression = eval(currentExpression).toString();
    resultElement.value = currentExpression;
  } catch (error) {
    resultElement.value = 'Error';
  }
}

function clearResult() {
  currentExpression = '';
  resultElement.value = '';
}
