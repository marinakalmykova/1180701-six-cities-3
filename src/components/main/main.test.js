import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const PLACES = [
  {
    id: 1,
    name: `Beautiful & luxurious apartment at great location`,
  },
  {
    id: 2,
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
