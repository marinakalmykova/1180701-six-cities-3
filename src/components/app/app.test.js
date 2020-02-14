import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const PLACES = [
  {
    id: 1,
    name: `Beautiful & luxurious apartment at great location`,
  },
  {
    id: 2,
    name: `Wood and stone place`
  }];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      places={PLACES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
