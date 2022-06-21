import { config } from "./config.js";

class FormValidation {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._errorClass = config.errorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._formElement = formElement;
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
    this._toggleButtonState();
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
    const submitionButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    submitionButton.classList.add(this._inactiveButtonClass);
    submitionButton.setAttribute("disabled", true);
  }

  activateSaveButton() {
    const submitionButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    submitionButton.classList.remove(this._inactiveButtonClass);
    submitionButton.removeAttribute("disabled");
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

export { config, FormValidation };
