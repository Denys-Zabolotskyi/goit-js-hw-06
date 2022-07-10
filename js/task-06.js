const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);
const validLength = parseInt(inputEl.getAttribute('data-length'));
// console.log(validLength);

inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
  if (validLength === event.currentTarget.value.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
