
let profileEditButton = document.querySelector('.profile__edit-button');
let closeModalButton = document.querySelector('.popup__close-button');
let inputName = document.querySelector('.popup__submit-name');
let profileName = document.querySelector('.profile__info-name');
let inputDiscription = document.querySelector('.popup__submit-dis');
let profileDiscription = document.querySelector('.profile__info-discription');
let profileInfo = document.querySelectorAll('.profile__info');
let saveForm = document.querySelector('.popup__container');
let addImagePopup = document.querySelector('.profile__add-button');
let popUp=document.querySelector('.popup');
let popUpAdd=document.querySelector('.popup_add');
let likeButton = document.querySelectorAll('.element__dis-like-button');
let closePopupAddImage = document.getElementById('new_image_close');



function editProfile(){
    popUp.classList.add('popup_active');
    inputName.value = profileName.textContent;
    inputDiscription.value = profileDiscription.textContent;
    
};

function closeModal(){
    popUpAdd.classList.remove('popup_active');
    popUp.classList.remove('popup_active');

}

profileEditButton.addEventListener('click', editProfile);
closeModalButton.addEventListener('click', closeModal);


function saveProfileChanges(evt){
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDiscription.textContent = inputDiscription.value;

    closeModal(); 
};

saveForm.addEventListener('submit', saveProfileChanges);


function addImage(){
    popUpAdd.classList.add('popup_active');
};

addImagePopup.addEventListener('click', addImage);
closePopupAddImage.addEventListener('click', closeModal);













