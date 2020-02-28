import React from "react";
import PropTypes from 'prop-types';

const Card = ({offer, onHeaderClick, onCardHover}) => {
  const {name, price, type, rating, image, isPremium, isBookmark} = offer;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={onCardHover}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isBookmark && `place-card__bookmark-button--active`} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isBookmark ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={onHeaderClick}>{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]),
    rating: PropTypes.string.isRequired,
    isBookmark: PropTypes.bool,
    isPremium: PropTypes.bool,
    image: PropTypes.string,
  }).isRequired,
  onCardHover: PropTypes.func,
  onHeaderClick: PropTypes.func
};

export default Card;
