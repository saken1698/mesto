const config = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
 // inputErrorClass: 'popup__input_type_error',
  errorClass: 'form-error_active'
};


//Показать текст ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };
//Скрыть текст ошибки
  const hideInputError = (formElement, inputElement) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  };

    const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    inputList.forEach((inputElement) => {
     inputElement.addEventListener('input', function () {
       checkInputValidity(formElement, inputElement);
     });
    });
  };
//Проверить валидность поля ввода
 const checkInputValidity = (formElement, inputElement) => {
   if (!inputElement.validity.valid) {
     showInputError(formElement, inputElement, inputElement.validationMessage);
     disableSaveButton(formElement);

   } else {
      hideInputError(formElement, inputElement);
      activateSaveButton(formElement);
   };

   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    if (inputList.every((input)=>{
      return input.validity.valid;
    })){
        activateSaveButton(formElement);
    } else {
        disableSaveButton(formElement);
    }
 };


//Отключить кнопку
function disableSaveButton(form){
   const submitionButton = form.querySelector(config.submitButtonSelector);
   submitionButton.classList.add(config.inactiveButtonClass);
   submitionButton.setAttribute('disabled', true);
};
//Активировать кнопку
function activateSaveButton(form){
    const submitionButton = form.querySelector(config.submitButtonSelector);
    submitionButton.classList.remove(config.inactiveButtonClass);
    submitionButton.removeAttribute('disabled');
};

function enableValidation ({name: value}) {
    Array.from(document.querySelectorAll(config.formSelector)).forEach((evt)=>{
        setEventListeners(evt);});
}

enableValidation(config);
