const btnChangeColor = document.querySelector('.change-color');
console.log(btnChangeColor);
const bodyEl = document.querySelector('body');
console.log(bodyEl);
const spanEl = document.querySelector('span');
console.log(spanEl);

btnChangeColor.addEventListener('click', onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
