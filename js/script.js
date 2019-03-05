// Сперва главные функции калькулятора
function addition(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtraction(numberOne,numberTwo) {
  return numberOne - numberTwo;
}

function multiplication(numberOne,numberTwo) {
  return numberOne * numberTwo;
}

function division(numberOne,numberTwo) {
  return numberOne / numberTwo;
}

function reset() {
  document.getElementById('first-num').value = '';
  document.getElementById('second-num').value = '';
}

function output(result) {
  $outputDisplay.value = result;
}
// Затем вспомогательные функции
function getInputValue(id) {
  return document.getElementById(id).value;
}

function stringToNumber(string) {
  return +string;
}
// Затем что делать с кнопками и полями ввода
const $outputDisplay = document.querySelector('.js-output');
const $buttonCollection = document.querySelectorAll('.js-button');

$buttonCollection.forEach(function (button) {
  button.addEventListener('click', function () {
    const buttonValue = button.value;
    var inputValueOne = getInputValue('first-num');
    var inputValueTwo = getInputValue('second-num');

    let numberOne = stringToNumber(inputValueOne);
    let numberTwo = stringToNumber(inputValueTwo);

    let result = null;

    switch (buttonValue) {
      case 'addition':
        result = addition(numberOne, numberTwo);
        break;
      case 'subtraction':
        result = subtraction(numberOne, numberTwo);
        break;
      case 'multiply':
        result = multiplication(numberOne, numberTwo);
        break;
      case 'division':
        result = division(numberOne, numberTwo);
        break;
      case 'reset':
        result = '';
        reset();
    }

    output(result);
  });
});