import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";


class CardsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: 0
    };

    this._setActiveCard = this._setActiveCard.bind(this);

  }

  _setActiveCard(id) {
    this.setState({
      activeCard: id
    });
  }

  render() {
    const {offers, onHeaderClick} = this.props;
    const cardsList = offers.map((offer) =>
      <Card
        key={offer.id}
        offer={offer}
        onHeaderClick={onHeaderClick}
        onCardHover={this._setActiveCard}
      />
    );
    return (
      <React.Fragment>{cardsList}</React.Fragment>
    );
  }
}

CardsList.propTypes = {
  onHeaderClick: PropTypes.func,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.oneOf([`Apartment`, `Private room`]),
        rating: PropTypes.string.isRequired,
        isBookmark: PropTypes.bool,
        isPremium: PropTypes.bool,
        image: PropTypes.oneOf([`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/room.jpg`]),
      })).isRequired
};

export default CardsList;

