  const cardTemplate = document.querySelector('.card').content;
  const elements = document.querySelector('.elements');
  const trashButton = document.querySelector('.element__trash');
  const trash = cardTemplate.querySelector('.element__trash');
  const safeAddedImage = document.getElementById('acc-post');
  const elementPopup = document.querySelector('.popup_element');
  const popupImage = document.querySelector('.popup__image');
  const popupImageName = document.querySelector('.popup__image-text');
  const newCardName =  document.getElementById('sub_image-name');
  const newCardLink =  document.getElementById('sub_link');
  //Переменная переключения лайка
  const likeSwitcher = (evt) => {
    evt.target.classList.toggle('element__dis-like-button_active'); 
  } 
  //Переменная удаления карточки
  const deleteClick = (evt) => {
    evt.target.closest('.element').remove();
  }
//Функция создания карточки
function createCard(name, link) {
  const newCard = cardTemplate.cloneNode(true);
  const deleteButton = newCard.querySelector('.element__trash');
  deleteButton.addEventListener('click', deleteClick);
  const likeButton = newCard.querySelector('.element__dis-like-button');
  likeButton.addEventListener('click', likeSwitcher);
  const cardImage =newCard.querySelector('.element__image');
  const cardName = newCard.querySelector('.element__dis-name');
  cardImage.src = link;
  cardImage.alt = name;
  cardName.textContent = name;
  cardImage.addEventListener('click', openImagePopup);
  return newCard;
};

//Функция для открытия попапа карточки
function openImagePopup(evt){
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupImageName.textContent = evt.target.alt;
  openPopup(elementPopup);
};


