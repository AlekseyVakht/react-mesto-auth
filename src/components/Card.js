import React from 'react';

function Card({card, onCardClick }) {
    function handleClick(){
        onCardClick(card);
    }
    return (
        <li className="element">
            <button type="button" className="element__delete-icon"></button>
            <div className="element__image-mask">
                <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
            </div>
            <div className="element__container">
                <h2 className="element__heading">{card.name}</h2>
                <div className="element__like-container">
                    <button type="button" className="element__like-icon"></button>
                    <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card