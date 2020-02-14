import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const headerHandler = () => {};

const App = ({places}) =>
  <Main
    places={places}
    onHeaderClick={headerHandler}
  />;

App.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.object
  ).isRequired
};

export default App;
