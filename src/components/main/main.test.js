import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const OFFERS = [
  {
    id: 1,
    name: `Beautiful & luxurious apartment at great location`,
    price: 120,
    type: `Apartment`,
    rating: `80%`,
    isBookmark: false,
    isPremium: true,
    image: `img/apartment-01.jpg`,
  },
  {
    id: 2,
    name: `Wood and stone place`,
    price: 80,
    type: `Private room`,
    rating: `100%`,
    isBookmark: true,
    isPremium: false,
    image: `img/room.jpg`,
  },
  {
    id: 3,
    name: `Canal View Prinsengracht`,
    price: 132,
    type: `Apartment`,
    rating: `30%`,
    isBookmark: true,
    isPremium: false,
    image: `img/apartment-02.jpg`,
  },
  {
    id: 4,
    name: `Nice, cozy, warm big bed apartment`,
    price: 180,
    type: `Apartment`,
    rating: `60%`,
    isBookmark: false,
    isPremium: true,
    image: `img/apartment-03.jpg`,
  }];

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
