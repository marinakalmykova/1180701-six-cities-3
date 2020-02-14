import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PLACES = [
  {
    id: 1,
    name: `Beautiful & luxurious apartment at great location`,
  },
  {
    id: 2,
    name: `Wood and stone place`
  }];

ReactDOM.render(
    <App
      places={PLACES}
    />,
    document.querySelector(`#root`)
);
