const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsEl = document.createElement('li');
// console.log(ingredientsEl);
// ingredientsEl.classList.add('item');
// ingredientsEl.textContent = 'Potatoes';

// ingredientsList.append();
// for (const ingredient of ingredients) {
//   const ingredientsEl = document.createElement('li');
//   ingredientsEl.classList.add('item');
//   ingredientsEl.textContent = ingredient;
//   console.log(ingredientsEl);
//   // console.log(ingredient);
//   const ingredientsList = document.querySelector('#ingredients');
//   ingredientsList.append(ingredientsEl);
// }
const ingredientsList = document.querySelector('#ingredients');

const ingredientItem = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = ingredient;
  // console.log(ingredientEl);
  return ingredientEl;
});
ingredientsList.append(...ingredientItem);
