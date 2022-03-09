// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.


// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
let counterValue = 0;

// // // Добавь слушатели кликов на кнопки, внутри которых увеличивай
// // // или уменьшай значение счтетчика.
const valueBetweenBtns = document.querySelector('#value');

const btnDecrease = document.querySelector('[data-action="decrement"]');
btnDecrease.addEventListener('click', (event) => {
    valueBetweenBtns.textContent = counterValue += Number(btnDecrease.textContent);
});

const btnIncrease = document.querySelector('[data-action="increment"]');
btnIncrease.addEventListener('click', (event) => {
    valueBetweenBtns.textContent = counterValue += Number(btnIncrease.textContent);
});
// Обновляй интерфейс новым значением переменной counterValue.
