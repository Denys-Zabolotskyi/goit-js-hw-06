// const inputEl = document.querySelector('input');
// console.log(inputEl.value);
// console.log(inputEl);
// const btnCreate = document.querySelector('button[data-create]');
// // console.log(btnCreate);
// const btnDestroy = document.querySelector('button[data-destroy]');
// // console.log(btnDestroy);
// const divBoxesEl = document.querySelector('#boxes');
// console.log(divBoxesEl);
// inputEl.addEventListener('input', () => { });

//************addEventListener******************** */
// inputEl.addEventListener('input', onInputChange);
// btnCreate.addEventListener('click', onBtnCreateElements);
// btnDestroy.addEventListener('click', onBtnDestroyElements);

//****************function******************************** */
// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   return event.currentTarget.value;
// }

// function onBtnCreateElements(event, onInputChange) {
//   console.log(`Creates elements ${onInputChange}`);
//   console.log(onInputChange);
// }
// function onBtnDestroyElements(event) {
//   console.log('Destroy elements');
// }

//***********Test1* */
// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('#controls');
// const containerEl = document.querySelector('#boxes');

// createBtn.addEventListener('click', () => createBoxes(inputEl.value));
// destroyBtn.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {
//   let size = 20;
//   const boxEl = [];

//   for (let i = 0; i < amount; i += 1) {
//     size = size + 10;
//     const box = document.createElement('div');
//     box.style.backgroundColor = `${getRandomHexColor()}`;
//     box.style.width = size + 'px';
//     box.style.height = size + 'px';
//     box.classList.add('box-item');
//     boxEl.push(box);
//   }
//   containerEl.append(...boxEl);
//   return containerEl;
// }

// function destroyBoxes() {
//   containerEl.innerHTML = '';
//   inputEl.value = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
//***********Test2* */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

const createBoxes = function (amount) {
  amount = Number(inputRef.value);
  const boxesArray = [];

  for (let i = 0; i < amount; i += 1) {
    let size = 30 + 10 * i;
    boxesArray[i] = document.createElement('div');
    boxesArray[i].style.width = `${size}px`;
    boxesArray[i].style.height = `${size}px`;
    boxesArray[i].style.backgroundColor = getRandomHexColor();
  }

  boxesRef.append(...boxesArray);
};

const destroyBoxes = function () {
  boxesRef.innerHTML = '';
};

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);
