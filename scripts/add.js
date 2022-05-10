const initialCards = [
    {
      name: 'Франция',
      link: 'https://i.pinimg.com/564x/2d/09/ed/2d09ed57a5c57940dbbbc46c03eca2a7.jpg'
    },
    {
      name: 'Майами',
      link: 'https://i.pinimg.com/564x/59/c4/4e/59c44e9922965d4332a6f3561a45ca9c.jpg'
    },
    {
      name: 'Бразилия',
      link: 'https://i.pinimg.com/564x/31/8a/44/318a446712393ed131197650db17cff2.jpg'
    },
    {
      name: 'Канада',
      link: 'https://i.pinimg.com/564x/78/21/f7/7821f7cb83f4ac06ebdfcea77fab6ecc.jpg'
    },
    {
      name: 'Англия',
      link: 'https://i.pinimg.com/564x/bd/09/a6/bd09a6d7ae56d02687b16880c3ad194e.jpg'
    },
    {
      name: 'Мальдивы',
      link: 'https://i.pinimg.com/564x/f8/3b/c3/f83bc3c42a7f2c411a92be17edb36e2f.jpg'
    }
  ]; 

  const cardTemplate = document.querySelector('.card').content;
  const elements = document.querySelector('.elements');
  const addNewCardButton = document.getElementById('add_image');
  const deletedElement = document.querySelector('.element');
  const trashButton = document.querySelector('.element__trash');
  const trash = cardTemplate.querySelector('.element__trash');
  const saveAddedImage = document.getElementById('acc-post');
  const likeSwitcher = (evt) => {
    evt.target.classList.toggle('element__dis-like-button_active'); 
  } 

  const deleteClick = (evt) => {
    evt.target.closest('.element').remove();
  }


initialCards.forEach(({name, link}) => {
  let newCards = cardTemplate.cloneNode(true);
  newCards.querySelector('.element__image').src = link;
  newCards.querySelector('.element__image').alt = name;
  newCards.querySelector('.element__dis-name').textContent = name;
  newCards.querySelector('.element__popup-image').src = link;
  newCards.querySelector('.element__popup-image').alt = name;
  newCards.querySelector('.element__popup-text').textContent = name;

  const deleteButton = newCards.querySelector('.element__trash');
  deleteButton.addEventListener('click', deleteClick);
  const likeButton = newCards.querySelector('.element__dis-like-button');
  likeButton.addEventListener('click', likeSwitcher);
  const cardImage =newCards.querySelector('.element__image');
  const elementPopup = newCards.querySelector('.element__popup');
  cardImage.addEventListener('click', function(){
    elementPopup.classList.add('element__popup_active');
  });
  const closeImage = newCards.querySelector('.popup__close-button');
  closeImage.addEventListener('click', () => {
      elementPopup.classList.remove('element__popup_active');
    });
  elements.append(newCards);
});

const newCardName =  document.getElementById('sub_image-name');
const newCardLink =  document.getElementById('sub_link');
const addImageButton = document.getElementById('add_image');

function saveNewElement(evt){
  evt.preventDefault();
  let newCards = cardTemplate.cloneNode(true);
  newCards.querySelector('.element__image').src = newCardLink.value;
  newCards.querySelector('.element__image').alt = newCardName.value;
  newCards.querySelector('.element__dis-name').textContent = newCardName.value;
  newCards.querySelector('.element__popup-image').src = newCardLink.value;
  newCards.querySelector('.element__popup-image').alt = newCardName.value;
  newCards.querySelector('.element__popup-text').textContent = newCardName.value;

  const deleteButton = newCards.querySelector('.element__trash');
  deleteButton.addEventListener('click', deleteClick);
  const likeButton = newCards.querySelector('.element__dis-like-button');
  likeButton.addEventListener('click', likeSwitcher);
  const cardImage =newCards.querySelector('.element__image');
  const elementPopup = newCards.querySelector('.element__popup');
  cardImage.addEventListener('click', function(){
    elementPopup.classList.add('element__popup_active');
  });
  const closeImage = newCards.querySelector('.popup__close-button');
  closeImage.addEventListener('click', () => {
  elementPopup.classList.remove('element__popup_active');
    });
  elements.prepend(newCards);

  closeModal(); 
};

saveAddedImage.addEventListener('submit', saveNewElement);

