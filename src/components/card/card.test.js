import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const PLACE = `Beautiful & luxurious apartment at great location`;

it(`Should card render correctly`, () => {
  const tree = renderer
    .create(<Card
      place={PLACE}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
