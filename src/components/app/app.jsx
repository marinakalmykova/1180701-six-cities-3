import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({offers}) => {
  const handleHeaderClick = () => {};
  return (
    <Main
      offers={offers}
      onHeaderClick={handleHeaderClick}
    />
  );
};

App.propTypes = {
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

export default App;
