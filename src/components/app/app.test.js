import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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
  },
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offers={OFFERS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
