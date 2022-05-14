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

  const likeSwitcher = (evt) => {
    evt.target.classList.toggle('element__dis-like-button_active'); 
  } 

  const deleteClick = (evt) => {
    evt.target.closest('.element').remove();
  }

function createCard(name, link) {
  const newCards = cardTemplate.cloneNode(true);
  const deleteButton = newCards.querySelector('.element__trash');
  deleteButton.addEventListener('click', deleteClick);
  const likeButton = newCards.querySelector('.element__dis-like-button');
  likeButton.addEventListener('click', likeSwitcher);
  const cardImage =newCards.querySelector('.element__image');
  const cardName = newCards.querySelector('.element__dis-name');
  cardImage.src = link;
  cardImage.alt = name;
  cardName.textContent = name;
  cardImage.addEventListener('click', openImagePopup);
  return newCards;
};

initialCards.forEach(({name, link}) => {
  elements.append(createCard(name, link));
});

function saveNewElement(evt){
  evt.preventDefault();
  elements.prepend(createCard(newCardName.value,newCardLink.value));
  evt.target.reset();
  closeModal(popUpAdd); 
};

safeAddedImage.addEventListener('submit', saveNewElement);

function openImagePopup(evt){
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupImageName.textContent = evt.target.alt;
  openPopup(elementPopup);
};


