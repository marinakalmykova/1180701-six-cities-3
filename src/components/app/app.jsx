import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const App = ({places}) => <Main
  places={places}
/>;

App.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired
};

export default App;
