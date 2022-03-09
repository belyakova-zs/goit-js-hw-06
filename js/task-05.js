// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее значение
// в span#name - output.
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
// Если инпут пустой, в спане должна отображаться
// строка "Anonymous".
inputName.addEventListener("input", (event) => {
  event.currentTarget.value === ""
    ? (outputName.textContent = "Anonymous")
    : (outputName.textContent = event.currentTarget.value);
});
