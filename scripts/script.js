const profileEditButton = document.querySelector('.profile__edit-button');
const ModalCloseButton = document.querySelector('.popup__close-button');
const inputName = document.querySelector('.popup__submit-name');
const profileName = document.querySelector('.profile__info-name');
const inputDiscription = document.querySelector('.popup__submit-dis');
const profileDiscription = document.querySelector('.profile__info-discription');
const formSave = document.querySelector('.popup__container');
const imagePopupAdd = document.querySelector('.profile__add-button');
const popUpProfile=document.querySelector('.popup');
const popUpAdd=document.querySelector('.popup_add');
const popUpElement = document.querySelector('.popup_element');
const popupAddImageClose = document.getElementById('new_image_close');
const popUpImageClose = document.getElementById('popup-image-close');


//Закрытие попапа по нажатию ESC
document.addEventListener('keydown', function(evt){
    if (evt.keyCode == 27){
        closeModal(popUpProfile);
        closeModal(popUpAdd);
        closeModal(elementPopup);
    };
});

//Закрытие по клику оверлей
popUpProfile.addEventListener('click', (evt) =>{
    if (evt.target == evt.target.closest('.popup')) {
        closeModal(popUpProfile);
    }
});

popUpAdd.addEventListener('click', (evt) =>{
    if (evt.target == evt.target.closest('.popup')) {
        closeModal(popUpAdd);
    }
});

popUpElement.addEventListener('click', (evt) =>{
    if (evt.target == evt.target.closest('.popup')) {
        closeModal(popUpElement);
    }
});

//
function editProfile(){
    openPopup(popUpProfile);
    inputName.value = profileName.textContent;
    inputDiscription.value = profileDiscription.textContent;
};

//Функция для закрытия попапа
function closeModal(popup){
    popup.classList.remove('popup_active');
};

//Функция открытия попапа
function openPopup(popup){
    popup.classList.add('popup_active');
};

profileEditButton.addEventListener('click', editProfile);
ModalCloseButton.addEventListener('click', function(evt){closeModal(popUpProfile)});

//Сохранение изменений профиля
function handleProfileChanges(evt){
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDiscription.textContent = inputDiscription.value;

    closeModal(popUpProfile); 
};

formSave.addEventListener('submit', handleProfileChanges);

imagePopupAdd.addEventListener('click', function(evt){openPopup(popUpAdd)});
popupAddImageClose.addEventListener('click', function(evt){closeModal(popUpAdd)});
popUpImageClose.addEventListener('click', function(evt){closeModal(elementPopup);})















