// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
const inputField = document.querySelector("#validation-input");

// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.

// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
inputField.addEventListener("blur", onBlur);

function onBlur (event) {

  if (event.currentTarget.value.length === Number(inputField.dataset.length)) {
    event.currentTarget.classList = ("valid");
  } else {
    event.currentTarget.classList = ("invalid");
  }
};    

// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.


