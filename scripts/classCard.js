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
  
  class Card{
    constructor(data, cardSelector){
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _cloneTemplate(){
      const cardTemplate = document.querySelector(this._cardSelector);
      const template = cardTemplate.content.cloneNode(true);
      return template;
    }
    createCard(){
      this._card = this._cloneTemplate();
      this._setEventListeners();
        this._card.querySelector('.element__image').src = this._link;
        this._card.querySelector('.element__image').alt = this._name;
        this._card.querySelector('.element__dis-name').textContent = this._name;
        
        return this._card;
    }

    _switchLike(evt){
        evt.target.classList.toggle('element__dis-like-button_active');
    }

    _deleteElement(evt){
      evt.target.closest('.element').remove();
    }

    _openImage(evt){
      const popupImage = document.querySelector('.popup__image');
      const popupImageName = document.querySelector('.popup__image-text');
      popupImage.src = evt.target.src;
      popupImage.alt = evt.target.alt;
      popupImageName.textContent = evt.target.alt;
      openPopup(document.querySelector('.popup_element'));
    }

    _setEventListeners(){
      this._card.querySelector('.element__dis-like-button').addEventListener('click', (evt) =>{
        this._switchLike(evt);
      })
      this._card.querySelector('.element__trash').addEventListener('click', (evt) => {
        this._deleteElement(evt);
      });
      this._card.querySelector('.element__image').addEventListener('click', (evt)=> {
        this._openImage(evt); 
      })
      
    }

  }

  initialCards.forEach((el) =>{
    
   const newCardClass = new Card(el, '.card');
   document.querySelector('.elements').append(newCardClass.createCard());
   
  }
  )

  export {initialCards, Card};