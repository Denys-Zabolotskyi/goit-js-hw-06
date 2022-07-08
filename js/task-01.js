// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3
const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);
// console.log(categoriesEl);

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

categoriesEl.forEach(function (el) {
  const categoryName = el.querySelector('h2').textContent;
  const categoryItems = el.querySelectorAll('li').length;
  //   console.log(categoryItems);
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems}`);
});
