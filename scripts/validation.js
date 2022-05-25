const inputList = Array.from(document.querySelectorAll('.popup__input'));
const forms = Array.from(document.querySelectorAll('.popup__container'));



const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form-error_active');
  };

  const hideInputError = (formElement, inputElement) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    errorElement.classList.remove('form-error_active');
    errorElement.textContent = '';
  };

    const setEventListeners = (formElement) => {
    inputList.forEach((inputElement) => {
     inputElement.addEventListener('input', function () {
       checkInputValidity(formElement, inputElement);
     });
    });
  };

 const checkInputValidity = (formElement, inputElement) => {
   if (!inputElement.validity.valid) {
     showInputError(formElement, inputElement, inputElement.validationMessage);
     disableSaveButton(formElement);

   } else {
      hideInputError(formElement, inputElement);
      activateSaveButton(formElement);
   };

   const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    if (inputList.every((input)=>{
      return input.validity.valid;
    })){
        activateSaveButton(formElement);
    } else {
        disableSaveButton(formElement);
    }
 };





function disableSaveButton(form){
   const submitionButton = form.querySelector('.popup__save-button');
   submitionButton.classList.add('popup__save-button_disabled');
   submitionButton.setAttribute('disabled', true);
};

function activateSaveButton(form){
    const submitionButton = form.querySelector('.popup__save-button');
    submitionButton.classList.remove('popup__save-button_disabled');
    submitionButton.removeAttribute('disabled');
};

function enableValidation ({name: value}) {
    forms.forEach((evt)=>{
        setEventListeners(evt);});
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); 