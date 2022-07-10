// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
// перетягуючи повзунок, буде змінюватися розмір тексту.
const inputEl = document.querySelector('input');
// console.log(inputEl);
const spanEl = document.querySelector('#text');
// console.log(spanEl);
inputEl.addEventListener('input', onInputСhange);
function onInputСhange(event) {
  //   console.log(event.currentTarget.value);
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
