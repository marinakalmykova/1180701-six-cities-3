import React from "react";
import renderer from "react-test-renderer";
import CardsList from "./cards-list.jsx";

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

it(`Render Cards List`, () => {
  const onHeaderClick = jest.fn();

  const tree = renderer
    .create(<CardsList
      offers={OFFERS}
      onHeaderClick={onHeaderClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
