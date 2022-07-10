const refs = {
  spanEl: document.querySelector('#value'),
  buttonActionDecrement: document.querySelector(
    'button[data-action="decrement"]',
  ),
  buttonActionIncrement: document.querySelector(
    'button[data-action="increment"]',
  ),
};
console.log(refs.spanEl);
console.log(refs.buttonActionDecrement);
console.log(refs.buttonActionIncrement);
