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
const keyESC = 'Escape';


//Закрытие попапа по нажатию ESC
function closeByEsc(evt) {
    if (evt.key === keyESC) {
      const openedPopup = document.querySelector('.popup_active');
      closeModal(openedPopup); 
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
});

popUpAdd.addEventListener('mousedown', (evt) =>{
   checkClickOnOverlay(evt);
});

popUpElement.addEventListener('mousedown', (evt) =>{
    checkClickOnOverlay(evt);
});

//Открыть попап с сохраненными значениями
function editProfile(){
    openPopup(popUpProfile);
    activateSaveButton(popUpProfile);
    inputName.value = profileName.textContent;
    inputDiscription.value = profileDiscription.textContent;
};

//Функция для закрытия попапа
function closeModal(popup){
    popup.classList.remove('popup_active');
    document.removeEventListener('keydown', closeByEsc);
    Array.from(popup.querySelectorAll('.popup__input')).forEach((evt) => {
        hideInputError(popup, evt);
});
    
};

//Функция открытия попапа
function openPopup(popup){
    popup.classList.add('popup_active');
    document.addEventListener('keydown', closeByEsc);
};

profileEditButton.addEventListener('click', editProfile);
modalCloseButton.addEventListener('click', function(evt){closeModal(popUpProfile)});

//Сохранение изменений профиля
function handleProfileChanges(evt){
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDiscription.textContent = inputDiscription.value;

    closeModal(popUpProfile); 
};


formSaveProfile.addEventListener('submit', handleProfileChanges);

imagePopupAdd.addEventListener('click', function(evt){openPopup(popUpAdd)});
popupAddImageClose.addEventListener('click', function(evt){closeModal(popUpAdd)});
popUpImageClose.addEventListener('click', function(evt){closeModal(elementPopup);})















