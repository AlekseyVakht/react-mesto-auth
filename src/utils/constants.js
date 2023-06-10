export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const nameInput = document.querySelector('.popup__form-item_input_name');
export const jobInput = document.querySelector('.popup__form-item_input_job');

export const editButton = document.querySelector('.profile__edit-btn');
export const addButton = document.querySelector('.profile__add-btn');
export const avatarEditButton = document.querySelector('.profile__avatar-edit-btn');

export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const profileNameInput = document.querySelector('#name-input');
export const profileJobInput = document.querySelector('#description-input')

export const newPlace = document.querySelector('.popup__form-item_input_place');
export const newPlaceLink = document.querySelector('.popup__form-item_input_link')

export const profilePopup = document.querySelector('#popup-edit');
export const newPlacePopup = document.querySelector('#popup-new-place');

export const popupImage = document.querySelector('.popup__image');
export const popupImageCapture = document.querySelector('.popup__image-capture');
export const popupImageScaler = document.querySelector('#popup-image-scaler');
export const popupSubmitButton = document.querySelector('.popup__submit-btn');

export const editFormElement = document.querySelector('#popup-edit-form');
export const addFormElement = document.querySelector('#popup-new-place-form');

export const closeButton = document.querySelectorAll('.popup__close-icon');
export const popupElement = document.querySelector('.popup');

export const cardsGrid = '.elements';

export const options = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__form-item_input_type-error',
  errorClass: 'popup__input-error_active'
};