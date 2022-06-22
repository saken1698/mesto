import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js";
import { FormValidation } from "./Validation.js";
import {config} from "./config.js"

const profileEditButton = document.querySelector(".profile__edit-button");
const modalCloseButton = document.getElementById("profile-close-button");
const inputName = document.querySelector(".popup__submit-name");
const profileName = document.querySelector(".profile__info-name");
const inputDiscription = document.querySelector(".popup__submit-dis");
const profileDiscription = document.querySelector(".profile__info-discription");
const formSaveProfile = document.querySelector(".popup__container_profile");
const imagePopupAdd = document.querySelector(".profile__add-button");
const popUpProfile = document.querySelector(".popup_profile");
const popUpAdd = document.querySelector(".popup_add");
const popUpElement = document.querySelector(".popup_element");
const popupAddImageClose = document.getElementById("new_image_close");
const popUpImageClose = document.getElementById("popup-image-close");
const submitButtonClass = ".popup__save-button";
const inactiveButtonClass = "popup__save-button_disabled";
const elementPopup = document.querySelector(".popup_element");
const safeAddedImage = document.getElementById("acc-post");
const profileForm = document.getElementById("acc-info");
const newCardName = document.getElementById("sub_image-name");
const newCardLink = document.getElementById("sub_link");
const elements = document.querySelector(".elements");
const popupImage = document.querySelector(".popup__image");
const popupImageName = document.querySelector(".popup__image-text");
const keyEsc = "Escape";

//Закрытие попапа по нажатию ESC
function closeByEsc(evt) {
  if (evt.key === keyEsc) {
    const openedPopup = document.querySelector(".popup_active");
    closeModal(openedPopup);
    if (openedPopup.querySelector('.popup__container').id == 'acc-info'){
      newFormValidationProfile.resetErrors();
    } else {
      newFormValidationImage.resetErrors();
    }
  }
}

//Закрытие по клику на оверлей

function checkClickOnOverlay(evt) {
  if (evt.target == evt.target.closest(".popup")) {
    closeModal(evt.target.closest(".popup"));
  }
}

popUpProfile.addEventListener("mousedown", (evt) => {
  checkClickOnOverlay(evt);
  newFormValidationProfile.resetErrors();
});

popUpAdd.addEventListener("mousedown", (evt) => {
  checkClickOnOverlay(evt);
  newFormValidationImage.resetErrors();
});

popUpElement.addEventListener("mousedown", (evt) => {
  checkClickOnOverlay(evt);
});

//Открыть попап с сохраненными значениями
function editProfile() {
  inputName.value = profileName.textContent;
  inputDiscription.value = profileDiscription.textContent;
  newFormValidationProfile.activateSaveButton();
  openPopup(popUpProfile);
}

//Функция для закрытия попапа
function closeModal(popup) {
  popup.classList.remove("popup_active");
  document.removeEventListener("keydown", closeByEsc);
}

//Функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_active");
  document.addEventListener("keydown", closeByEsc);
}

profileEditButton.addEventListener("click", editProfile);
modalCloseButton.addEventListener("click", function (evt) {
  closeModal(popUpProfile);
  newFormValidationProfile.resetErrors();
});

//Сохранение изменений профиля
function handleProfileChanges(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDiscription.textContent = inputDiscription.value;
  closeModal(popUpProfile);
  newFormValidationProfile.resetErrors();
}

//Функция удаления надписи ошибок после закрытия
function removeErrorAfterCloseModal() {
  newFormValidationImage.resetErrors();
  newFormValidationProfile.resetErrors();
}

formSaveProfile.addEventListener("submit", handleProfileChanges);
imagePopupAdd.addEventListener("click", function (evt) {
  openPopup(popUpAdd);
});
popupAddImageClose.addEventListener("click", function (evt) {
  closeModal(popUpAdd);
  removeErrorAfterCloseModal(popUpAdd);
});
popUpImageClose.addEventListener("click", function (evt) {
  closeModal(elementPopup);
});

//Сохранить новую карточку и добавить
function saveNewElement(evt) {
  evt.preventDefault();
  const cardInfo = {
    name: newCardName.value,
    link: newCardLink.value,
  };

  elements.prepend( createFinisedCard(cardInfo, ".card"));
  evt.target.reset();
  closeModal(popUpAdd);
  newFormValidationImage.disableSaveButton();
}

safeAddedImage.addEventListener("submit", saveNewElement);

//Создание первых карточек
initialCards.forEach((el) => {
  createFinishedCard(el, ".card");
  elements.append(createFinishedCard(el, ".card"));
});

function createFinishedCard(data, templateSelector) {
  const newCardClass = new Card(data, templateSelector);
  return newCardClass.createCard();
}

const newFormValidationProfile = new FormValidation(config, profileForm);
const newFormValidationImage = new FormValidation(config, safeAddedImage);
newFormValidationImage.enableValidation();
newFormValidationProfile.enableValidation();

export { openPopup, popupImage, popupImageName, popUpElement };
