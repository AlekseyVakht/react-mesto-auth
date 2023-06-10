import React from 'react';
import { useState } from 'react';
import '../index.css';
import ImagePopup from './ImagePopup';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setImagePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard(null)
  }

  return (
    <div className="root">
      <Header />
      <Main
        openAddCard={handleAddPlaceClick}
        openEditAvatar={handleEditAvatarClick}
        openEditProfile={handleEditProfileClick}
        onCardClick = {handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title={"Редактировать профиль"}
        btn={"Сохранить"}
        name={"edit"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__input-container">
          <div className="popup__input-field">
            <input
              id="name-input"
              type="text"
              placeholder="Имя"
              name="name"
              minLength="2"
              maxLength="40"
              className="popup__form-item popup__form-item_input_name"
              required
            />
            <span className="name-input-error popup__input-error"></span>
          </div>
          <div className="popup__input-field">
            <input
              id="description-input"
              type="text"
              placeholder="О себе"
              name="about"
              minLength="2"
              maxLength="200"
              className="popup__form-item popup__form-item_input_job"
              required
            />
            <span className="description-input-error popup__input-error"></span>
          </div>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title={"Новое место"}
        btn={"Создать"}
        name={"new-place"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__input-container">
          <div className="popup__input-field">
            <input
              id="place-input"
              type="text"
              placeholder="Название"
              name="name"
              minLength="2"
              maxLength="30"
              className="popup__form-item popup__form-item_input_place"
              required
            />
            <span className="place-input-error popup__input-error"></span>
          </div>
          <div className="popup__input-field">
            <input
              id="url-input"
              type="url"
              placeholder="Ссылка на картинку"
              name="link"
              className="popup__form-item popup__form-item_input_link"
              required
            />
            <span className="url-input-error popup__input-error"></span>
          </div>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title={"Обновить аватар"}
        btn={"Сохранить"}
        name={"avatar-change"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__input-container">
          <div className="popup__input-field">
            <input
              id="avatar-input"
              type="url"
              placeholder="URL"
              name="avatar"
              minLength="2"
              className="popup__form-item popup__form-item_input_avatar"
              required
            />
            <span className="avatar-input-error popup__input-error"></span>
          </div>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm title={"Вы уверены?"} btn={"Да"} name={"with-confirm"} />
      <ImagePopup card = {selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
