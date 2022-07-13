// const refs = {
//   inputEl: document.querySelector('input'),
//   btnCreate: document.querySelector('button[data-create]'),
//   btnDestroy: document.querySelector('button[data-destroy]'),
//   boxesEl: document.querySelector('#boxes'),
// };

// //************addEventListener******************** */
// refs.btnCreate.addEventListener('click', createBoxes);
// refs.btnDestroy.addEventListener('click', destroyBoxes);
// //****************function******************************** */
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function createBoxes(amount) {
//   amount = Number(refs.inputEl.value);

//   const boxesArray = [];

//   for (let i = 0; i < amount; i += 1) {
//     let size = 30 + 10 * i;
//     boxesArray[i] = document.createElement('div');
//     boxesArray[i].style.width = `${size}px`;
//     boxesArray[i].style.height = `${size}px`;
//     boxesArray[i].style.backgroundColor = getRandomHexColor();
//   }

//   refs.boxesEl.append(...boxesArray);
// }

// function destroyBoxes() {
//   refs.boxesEl.innerHTML = '';
// }

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('#controls');
const containerEl = document.querySelector('#boxes');

createBtn.addEventListener('click', () => createBoxes(inputEl.value));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let size = 20;
  const boxEl = [];

  for (let i = 0; i < amount; i += 1) {
    size = size + 10;
    const box = document.createElement('div');
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.classList.add('box-item');
    boxEl.push(box);
  }
  containerEl.append(...boxEl);
  return containerEl;
}

function destroyBoxes() {
  containerEl.innerHTML = '';
  inputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
