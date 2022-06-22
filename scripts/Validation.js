import { config } from "./config.js";

class FormValidation {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._errorClass = config.errorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._formElement = formElement;
    this._submitionButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _showInputError(inputElement) {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }
  _hideInputError(inputElement) {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _setEventListeners() {
    const inputList = this._formElement.querySelectorAll(this._inputSelector);
    this._inputs = Array.from(inputList);
    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
      this.disableSaveButton();
    } else {
      this._hideInputError(inputElement);
      this.activateSaveButton();
    }
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSaveButton();
    } else {
      this.activateSaveButton();
    }
  }

  _hasInvalidInput() {
    return this._inputs.some((input) => {
      return !input.validity.valid;
    });
  }
  disableSaveButton() {
    this._submitionButton.classList.add(this._inactiveButtonClass);
    this._submitionButton.setAttribute("disabled", true);
  }

  activateSaveButton() {
    this._submitionButton.classList.remove(this._inactiveButtonClass);
    this._submitionButton.removeAttribute("disabled");
  }

  enableValidation() {
    this._setEventListeners();
  }
  

  resetErrors() {
    this._inputs.forEach((input) => {
      this._hideInputError(input);
    });
  }
}

export {config , FormValidation };
//передача config для создания новых эксемпляров в Index.js
