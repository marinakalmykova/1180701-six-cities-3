import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const OFFER = [
  {
    id: 1,
    name: `Beautiful & luxurious apartment at great location`,
    price: 120,
    type: `Apartment`,
    rating: `80%`,
    isBookmark: false,
    isPremium: true,
    image: `img/apartment-01.jpg`,
  }
];

it(`Should Card render correctly`, () => {
  const onHeaderClick = jest.fn();
  const onCardHover = jest.fn();

  const tree = renderer
    .create(<Card
      offer={OFFER}
      onHeaderClick={onHeaderClick}
      onCardHover={onCardHover}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});