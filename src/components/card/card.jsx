import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class Card extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, onHeaderClick, onCardHover} = this.props;
    const {id, name, price, type, rating, image, isPremium, isBookmark} = offer;

    return (
      <article
        className="cities__place-card place-card"
        key={id}
        onMouseEnter={onCardHover}
      >
        {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
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
            {
              isBookmark ?
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button> :
                <button className="place-card__bookmark-button button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
            }
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
  }
}

Card.propTypes = {
  offer: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]),
    rating: PropTypes.string.isRequired,
    isBookmark: PropTypes.bool,
    isPremium: PropTypes.bool,
    image: PropTypes.oneOf([`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/room.jpg`]),
  }).isRequired,
  onCardHover: PropTypes.func,
  onHeaderClick: PropTypes.func
};

export default Card;
