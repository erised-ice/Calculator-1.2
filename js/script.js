function getInputValue(id) {
  return document.getElementById(id).value;
}

function stringToNumber(string) {
  return +string;
}

const $outputDisplay = document.querySelector('.js-output');
const $buttonCollection = document.querySelectorAll('.js-button');

function output(result) {
  $outputDisplay.value = result;
}

function calculate(event) {
  const button = event.target;
  const buttonValue = button.dataset.operation;
  const inputValueOne = getInputValue('first-num');
  const inputValueTwo = getInputValue('second-num');
  const numberOne = stringToNumber(inputValueOne);
  const numberTwo = stringToNumber(inputValueTwo);

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
}

$buttonCollection.forEach(function (button) {
  button.addEventListener('click', calculate);
});

// Themes

const $mainInner = document.querySelector('.js-main');
const $buttonTimeTheme = document.querySelector('.js-time-theme-button');

function changeTimeTheme() {
  $mainInner.classList.toggle('main--night-theme');
  $mainInner.classList.remove('main--light-theme');
  $mainInner.classList.remove('main--green-theme');
  $mainInner.classList.remove('main--yellow-theme');
  $mainInner.classList.remove('main--dark-theme');
}

$buttonTimeTheme.addEventListener('click', changeTimeTheme);

const $themeButtons = document.querySelectorAll('.js-theme-button');

function changeTheme(event) {
  const buttonData = event.target.dataset.theme;

  switch (buttonData) {
    case 'dark':
      $mainInner.classList.toggle('main--dark-theme');
      $mainInner.classList.remove('main--light-theme');
      $mainInner.classList.remove('main--green-theme');
      $mainInner.classList.remove('main--yellow-theme');
      break;
    case 'light':
      $mainInner.classList.toggle('main--light-theme');
      $mainInner.classList.remove('main--dark-theme');
      $mainInner.classList.remove('main--green-theme');
      $mainInner.classList.remove('main--yellow-theme');
      break;
    case 'green':
      $mainInner.classList.toggle('main--green-theme');
      $mainInner.classList.remove('main--light-theme');
      $mainInner.classList.remove('main--dark-theme');
      $mainInner.classList.remove('main--yellow-theme');
      break;
    case 'yellow':
      $mainInner.classList.toggle('main--yellow-theme');
      $mainInner.classList.remove('main--light-theme');
      $mainInner.classList.remove('main--green-theme');
      $mainInner.classList.remove('main--dark-theme');
      break;
  }
}

$themeButtons.forEach(function (button) {
  button.addEventListener('click', changeTheme);
});