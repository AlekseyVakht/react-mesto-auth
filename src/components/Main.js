import React from 'react';
import Card from './Card';
import { useEffect, useState } from 'react';
import { api } from '../utils/Api.js';

function Main({
  openEditAvatar,
  openEditProfile,
  openAddCard,
  onCardClick
}) {
  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [cards, getCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfoApi(), api.getCards()])
      .then(([userData, initialCards]) => {
        setUserAvatar(userData.avatar)
        setUserDescription(userData.about)
        setUserName(userData.name)
        getCards(initialCards)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])



  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button type="button" className="profile__avatar-edit-btn" onClick={openEditAvatar}></button>
          <img className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} alt="Аватар" />
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-btn" onClick={openEditProfile}></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-btn" onClick={openAddCard}></button>
      </section>

      <section>
        <ul className="elements">
          {cards.map((card) => {
            return(
            <Card key={card._id} card={card} onCardClick={onCardClick}/>
            )
          })
        }
        </ul>
      </section>



    </main>
  );
}

export default Main