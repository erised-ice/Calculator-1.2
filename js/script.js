// Сперва главные функции калькулятора
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
        result = numberOne + numberTwo;
        break;
      case 'subtraction':
        result = numberOne - numberTwo;
        break;
      case 'multiply':
        result = numberOne * numberTwo;
        break;
      case 'division':
        result = numberOne / numberTwo;
        break;
      case 'reset':
        document.getElementById('first-num').value = '';
        document.getElementById('second-num').value = '';
        result = '';
    }

    output(result);
  });
});