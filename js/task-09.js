const btnChangeColor = document.querySelector('.change-color');
console.log(btnChangeColor);
const bodyEl = document.querySelector('body');
console.log(bodyEl);
const spanEl = document.querySelector('span');
console.log(spanEl);

btnChangeColor.addEventListener('click', onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  const backgroundColor = getRandomHexColor();
  bodyEl.style.backgroundColor = backgroundColor;
  spanEl.textContent = backgroundColor;
}
function getRandomHexColor() {
  console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
