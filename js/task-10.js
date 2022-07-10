const inputEl = document.querySelector('input');
console.log(inputEl);
const btnCreate = document.querySelector('button[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('button[data-destroy]');
console.log(btnDestroy);
const divBoxesEl = document.querySelector('#boxes');
console.log(divBoxesEl);

inputEl.addEventListener('input', onInputСhange);
function onInputСhange(event) {
  console.log(event.currentTarget.value);
}
function createBoxes(amount) {
  log('djghdjjk');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//***********Test* */
