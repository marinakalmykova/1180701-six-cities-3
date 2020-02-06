import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  PLACE_NUMBER: 312,
};

ReactDOM.render(
    <App
      placeNumber={Settings.PLACE_NUMBER}
    />,
    document.querySelector(`#root`)
);
