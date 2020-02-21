import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`Should header links be pressed`, () => {
  const onHeaderClick = jest.fn();

  const main = shallow(
      <Main
        offers={OFFERS}
        onHeaderClick={onHeaderClick}
      />
  );

  const headerLinks = main.find(`h2.place-card__name a`);
  headerLinks.forEach((item) => {
    item.prop().onClick();
  });
  expect(onHeaderClick.mock.calls.length).toBe(headerLinks.length);
});
