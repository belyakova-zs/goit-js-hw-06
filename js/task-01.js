// 1. Посчитай и выведи в консоль количество категорий
// в ul#categories, то есть элементов li.item.

const allCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategoriesEl.length}`);

// 2. Для каждого элемента li.item в списке ul#categories,
// найди и выведи в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов в
// категории(всех вложенных в него < li >).

// const titleEl = document.querySelector('h2');
// // titleEl.classList.add('title');
// console.log('Category:', titleEl.textContent);

// const titleItemEl = titleEl.nextElementSibling;
// // titleItemEl.classList.add('item-list');
// console.log('Elements:', titleItemEl.children.length);

// --------- стрелки----------

allCategoriesEl.forEach(elem => {
  console.log(`Category: ${elem.querySelector("h2").textContent} 
Elements: ${elem.querySelector("ul").children.length}`);
});
// console.log(allCategoriesEl);
