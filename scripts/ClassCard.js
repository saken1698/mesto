import { popupImage, popupImageName } from "./index.js";
import { openPopup } from "./index.js";

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _cloneTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector);
    const template = cardTemplate.content.cloneNode(true);
    return template;
  }
  createCard() {
    this._card = this._cloneTemplate();
    this._setEventListeners();
    this._card.querySelector(".element__image").src = this._link;
    this._card.querySelector(".element__image").alt = this._name;
    this._card.querySelector(".element__dis-name").textContent = this._name;
    return this._card;
  }

  _switchLike(evt) {
    evt.target.classList.toggle("element__dis-like-button_active");
  }

  _deleteElement(evt) {
    evt.target.closest(".element").remove();
    // this._card.remove();
    this._card = null;
  }

  _openImage(evt) {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageName.textContent = this._name;
    openPopup(document.querySelector(".popup_element"));
  }

  _setEventListeners() {
    this._card
      .querySelector(".element__dis-like-button")
      .addEventListener("click", (evt) => {
        this._switchLike(evt);
      });
    this._card
      .querySelector(".element__trash")
      .addEventListener("click", (evt) => {
        this._deleteElement(evt);
      });
    this._card
      .querySelector(".element__image")
      .addEventListener("click", (evt) => {
        this._openImage(evt);
      });
  }
}

export { Card };
