import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
jest.mock(`../map/map.jsx`);

const OFFERS = [
  {
    id: 10,
    name: `Test apartment`,
    price: 120,
    type: `Apartment`,
    rating: `80%`,
    isBookmark: false,
    isPremium: true,
    image: `img/test-apartment.jpg`,
    coords: [52.369553944609, 4.85309666407542],
  },
  {
    id: 20,
    name: `Test private room`,
    price: 80,
    type: `Private room`,
    rating: `100%`,
    isBookmark: true,
    isPremium: false,
    image: ``,
    coords: [52.369553946782, 4.85309666407867],
  },
];

it(`Should Main page render correctly`, () => {
  const tree = renderer
    .create(<Main
      offers={OFFERS}
      onHeaderClick={() => {}}
      onCardHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
