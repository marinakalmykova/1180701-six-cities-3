import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

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
