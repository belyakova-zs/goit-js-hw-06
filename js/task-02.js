const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);
// Создаст отдельный элемент <li>. Обзательно используй метод 
// document.createElement().
ingredients.forEach((productName) => { 
  const listItem = document.createElement('li');
  // Добавит название ингредиента как его текстовое содержимое.
  listItem.textContent = productName;
    // Добавит элементу класс item.
  listItem.classList.add('item');
// После чего вставит все <li> за одну операцию в список 
// ul.ingredients.
  ingredientsList.append(listItem);
})


