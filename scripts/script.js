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
const popupAddImageClose = document.getElementById('new_image_close');
const popUpImageClose = document.getElementById('popup-image-close');



function editProfile(){
    openPopup(popUpProfile);
    inputName.value = profileName.textContent;
    inputDiscription.value = profileDiscription.textContent;
};

function closeModal(popup){
    popup.classList.remove('popup_active');
};

function openPopup(popup){
    popup.classList.add('popup_active');
};

profileEditButton.addEventListener('click', editProfile);
ModalCloseButton.addEventListener('click', function(evt){closeModal(popUpProfile)});


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













