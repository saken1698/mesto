import { initialCards, Card } from './classCard.js';
import {config, FormValidation, newFormValidationImage, newFormValidationProfile} from './classValidation.js';

const profileEditButton = document.querySelector('.profile__edit-button');
const modalCloseButton = document.getElementById('profile-close-button');
const inputName = document.querySelector('.popup__submit-name');
const profileName = document.querySelector('.profile__info-name');
const inputDiscription = document.querySelector('.popup__submit-dis');
const profileDiscription = document.querySelector('.profile__info-discription');
const formSaveProfile = document.querySelector('.popup__container_profile');
const imagePopupAdd = document.querySelector('.profile__add-button');
const popUpProfile=document.querySelector('.popup_profile');
const popUpAdd=document.querySelector('.popup_add');
const popUpElement = document.querySelector('.popup_element');
const popupAddImageClose = document.getElementById('new_image_close');
const popUpImageClose = document.getElementById('popup-image-close');
const submitButtonClass =  '.popup__save-button';
const inactiveButtonClass =  'popup__save-button_disabled';
const elementPopup = document.querySelector('.popup_element');
const safeAddedImage = document.getElementById('acc-post');
const newCardName =  document.getElementById('sub_image-name');
const newCardLink =  document.getElementById('sub_link');
const elements = document.querySelector('.elements');
const keyESC = 'Escape';


//Закрытие попапа по нажатию ESC
function closeByEsc(evt) {
    if (evt.key === keyESC) {
      const openedPopup = document.querySelector('.popup_active');
      closeModal(openedPopup);
      removeErrorAfterCloseModal(openedPopup); 
    }
} 

//Закрытие по клику на оверлей

function checkClickOnOverlay(evt){
    if (evt.target == evt.target.closest('.popup')) {
        closeModal(evt.target.closest('.popup'));
    };
};

popUpProfile.addEventListener('mousedown', (evt) =>{
    checkClickOnOverlay(evt);
    removeErrorAfterCloseModal(popUpProfile);
});

popUpAdd.addEventListener('mousedown', (evt) =>{
   checkClickOnOverlay(evt);
   removeErrorAfterCloseModal(popUpAdd);
});

popUpElement.addEventListener('mousedown', (evt) =>{
    checkClickOnOverlay(evt);
});

//Открыть попап с сохраненными значениями
function editProfile(){
    openPopup(popUpProfile);
    newFormValidationProfile._activateSaveButton();
    inputName.value = profileName.textContent;
    inputDiscription.value = profileDiscription.textContent;
};

//Функция для закрытия попапа
function closeModal(popup){
    popup.classList.remove('popup_active');
    document.removeEventListener('keydown', closeByEsc);   
};

//Функция открытия попапа
function openPopup(popup){
    popup.classList.add('popup_active');
    document.addEventListener('keydown', closeByEsc);
};

profileEditButton.addEventListener('click', editProfile);
modalCloseButton.addEventListener('click', function(evt){
    closeModal(popUpProfile);
    removeErrorAfterCloseModal(popUpProfile)
});

//Сохранение изменений профиля
function handleProfileChanges(evt){
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDiscription.textContent = inputDiscription.value;
    closeModal(popUpProfile);
    removeErrorAfterCloseModal(popUpProfile); 
};

function removeErrorAfterCloseModal (popup) {
//     Array.from(popup.querySelectorAll('.popup__input')).forEach((evt) => {
//         hideInputError(evt, config.errorClass);
// });

newFormValidationImage._hideInputError(document.getElementById('sub_image-name'));
newFormValidationImage._hideInputError(document.getElementById('sub_link'));
newFormValidationProfile._hideInputError(document.getElementById('sub_dis'));
newFormValidationProfile._hideInputError(document.getElementById('sub_name'));

};

formSaveProfile.addEventListener('submit', handleProfileChanges);
imagePopupAdd.addEventListener('click', function(evt){openPopup(popUpAdd)});
popupAddImageClose.addEventListener('click', function(evt){
    closeModal(popUpAdd);
    removeErrorAfterCloseModal(popUpAdd)});
popUpImageClose.addEventListener('click', function(evt){closeModal(elementPopup);})

// //Создание первых карточек
// initialCards.forEach(({name, link}) => {
//     elements.append(createCard(name, link));
//   });

//Сохранить новую карточку и добавить
function saveNewElement(evt){
    evt.preventDefault();
    let cardInfo = {
        name: newCardName.value,
        link : newCardLink.value
    }
    
    elements.prepend(new Card(cardInfo, '.card').createCard());
    evt.target.reset();
    closeModal(popUpAdd); 
    newFormValidationImage._disableSaveButton();
  }
  
  safeAddedImage.addEventListener('submit', saveNewElement);












