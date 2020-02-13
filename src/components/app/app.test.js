import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      places={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
