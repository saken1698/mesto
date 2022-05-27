const config = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
 // inputErrorClass: 'popup__input_type_error',
  errorClass: 'form-error_active'
};


//Показать текст ошибки
const showInputError = (inputElement, errorMessage, errorClass) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
//Скрыть текст ошибки
  const hideInputError = (inputElement, errorClass) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };

    const setEventListeners = (formSelector, configSet) => {
    const {inputSelector, submitButtonSelector, inactiveButtonClass, errorClass} = configSet;
    const inputList = Array.from(formSelector.querySelectorAll(inputSelector));
    inputList.forEach((inputElement) => {
     inputElement.addEventListener('input', function () {
       checkInputValidity(formSelector, inputElement, inputList, errorClass, submitButtonSelector, inactiveButtonClass);
     });
    });
  };
//Проверить валидность поля ввода
 const checkInputValidity = (formSelector, inputElement, inputList, errorClass, submitButtonSelector, inactiveButtonClass) => {
   if (!inputElement.validity.valid) {
     showInputError(inputElement, inputElement.validationMessage, errorClass);
     disableSaveButton(formSelector , submitButtonSelector, inactiveButtonClass);

   } else {
      hideInputError(inputElement, errorClass);
      activateSaveButton(formSelector, submitButtonSelector, inactiveButtonClass);
   };

   
    if (inputList.every((input)=>{
      return input.validity.valid;
    })){
        activateSaveButton(formSelector, submitButtonSelector, inactiveButtonClass);
    } else {
        disableSaveButton(formSelector, submitButtonSelector, inactiveButtonClass);
    }
 };


//Отключить кнопку
function disableSaveButton(formSelector, submitButtonSelector, inactiveButtonClass){
   const submitionButton = formSelector.querySelector(submitButtonSelector);
   submitionButton.classList.add(inactiveButtonClass);
   submitionButton.setAttribute('disabled', true);
};
//Активировать кнопку
function activateSaveButton(formSelector, submitButtonSelector, inactiveButtonClass){
    const submitionButton = formSelector.querySelector(submitButtonSelector);
    submitionButton.classList.remove(inactiveButtonClass);
    submitionButton.removeAttribute('disabled');
};

function enableValidation (configValid) {
    const {formSelector} = configValid;
    Array.from(document.querySelectorAll(formSelector)).forEach((formSelector)=>{
        setEventListeners(formSelector, configValid);});
}

enableValidation(config);
