const inputEl = document.querySelector('#name-input');

const spanEl = document.querySelector('#name-output');

// inputEl.addEventListener('focus', onInputFocus);
// inputEl.addEventListener('blur', onInputBlur);

// function onInputFocus() {
//   console.log('Focus');
// }
// function onInputBlur() {
//   console.log('Blur');
// }
inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
  event.currentTarget.value.length > 0
    ? (spanEl.textContent = event.currentTarget.value)
    : (spanEl.textContent = 'Anonymous');
}
