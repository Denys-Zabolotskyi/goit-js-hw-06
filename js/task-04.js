const refs = {
  spanEl: document.querySelector('#value'),
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
};
// console.log(refs.spanEl);
// console.log(refs.buttonActionDecrement);
// console.log(refs.buttonActionIncrement);

// const spanEl = document.querySelector('#value');
// const buttonDecrement = document.querySelector(
//   'button[data-action="decrement"]',
// );
// const buttonIncrement = document.querySelector(
//   'button[data-action="increment"]',
// );
let counterValue = 0;
// console.log(counterValue);

refs.buttonDecrement.addEventListener('click', onButtonDecrementKlick);
refs.buttonIncrement.addEventListener('click', onButtonInkrementKlick);

function onButtonDecrementKlick() {
  counterValue -= 1;
  refs.spanEl.textContent = counterValue;
}
function onButtonInkrementKlick() {
  counterValue += 1;
  refs.spanEl.textContent = counterValue;
}
