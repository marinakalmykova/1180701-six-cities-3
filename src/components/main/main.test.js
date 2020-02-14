import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const PLACES = [
  {
    id: String(new Date() + Math.random()),
    name: `Beautiful & luxurious apartment at great location`,
  },
  {
    id: String(new Date() + Math.random()),
    name: `Wood and stone place`
  }];

it(`Should Main page render correctly`, () => {
  const tree = renderer
    .create(<Main
      places={PLACES}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
