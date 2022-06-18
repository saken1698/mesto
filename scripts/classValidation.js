const config = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
   // inputErrorClass: 'popup__input_type_error',
    errorClass: 'form-error_active'
  };
  

class FormValidation{
    constructor(config, formInput){
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._errorClass = config.errorClass;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._formInput = formInput;
    }

    _showInputError(inputElement) {
        const errorElement = document.getElementById(`${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
      };
    _hideInputError(inputElement) {
        const errorElement = document.getElementById(`${inputElement.id}-error`);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
      };

    _setEventListeners() {
        const allForms = document.getElementById(this._formInput).querySelectorAll(this._inputSelector);
        this._input = Array.from(allForms);
        //this._input = document.querySelector(this._formInput);
        this._input.forEach((inputElement) => {
         inputElement.addEventListener('input',() => {
           this._checkInputValidity(inputElement);
         });
         });
        // this._input.addEventListener('click', () => {
        //     checkInputValidity();
        //})
      };

    _checkInputValidity (inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement);
        this._disableSaveButton();
     
        } else {
        this._hideInputError(inputElement);
        this._activateSaveButton();
        };
     
        
        if (this._input.every((input)=>{
            return input.validity.valid;
         })){
             this._activateSaveButton();
         } else {
             this._disableSaveButton();
         }
      };

    _disableSaveButton(){
        const submitionButton = document.getElementById(this._formInput).querySelector(this._submitButtonSelector);
        submitionButton.classList.add(this._inactiveButtonClass);
        submitionButton.setAttribute('disabled', true);
     };

    _activateSaveButton(){
        const submitionButton = document.getElementById(this._formInput).querySelector(this._submitButtonSelector);
        submitionButton.classList.remove(this._inactiveButtonClass);
        submitionButton.removeAttribute('disabled');
    };

    enableValidation () {
        Array.from(document.querySelectorAll(this._formSelector)).forEach((formSelector)=>{
            this._setEventListeners();
        });
    }
}


const newFormValidationProfile = new FormValidation(config, 'acc-info');
const newFormValidationImage = new FormValidation(config, 'acc-post');
newFormValidationImage.enableValidation();
newFormValidationProfile.enableValidation();

export {config, FormValidation, newFormValidationImage, newFormValidationProfile};