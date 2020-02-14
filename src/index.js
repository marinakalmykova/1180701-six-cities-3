import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PLACES = [
  {
    id: String(new Date() + Math.random()),
    name: `Beautiful & luxurious apartment at great location`,
  },
  {
    id: String(new Date() + Math.random()),
    name: `Wood and stone place`
  }];

ReactDOM.render(
    <App
      places={PLACES}
    />,
    document.querySelector(`#root`)
);
