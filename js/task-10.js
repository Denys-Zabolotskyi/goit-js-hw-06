const refs = {
  inputEl: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
};

//************addEventListener******************** */
refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);
//****************function******************************** */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  amount = Number(refs.inputEl.value);

  const boxesArray = [];

  for (let i = 0; i < amount; i += 1) {
    let size = 30 + 10 * i;
    boxesArray[i] = document.createElement('div');
    boxesArray[i].style.width = `${size}px`;
    boxesArray[i].style.height = `${size}px`;
    boxesArray[i].style.backgroundColor = getRandomHexColor();
  }

  refs.boxesEl.append(...boxesArray);
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
}
