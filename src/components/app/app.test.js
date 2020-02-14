import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const PLACES = [
  {
    id: String(new Date() + Math.random()),
    name: `Beautiful & luxurious apartment at great location`,
  },
  {
    id: String(new Date() + Math.random()),
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
