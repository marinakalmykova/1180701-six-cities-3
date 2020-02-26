import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card";

Enzyme.configure({
  adapter: new Adapter(),
});

const OFFER = {
  id: 1,
  name: `Beautiful & luxurious apartment at great location`,
  price: 120,
  type: `Apartment`,
  rating: `80%`,
  isBookmark: false,
  isPremium: true,
  image: `img/apartment-01.jpg`,
};

it(`Handler got card's id on hover`, function () {
  const onCardHover = jest.fn();

  const card = shallow(<Card
    id={OFFER.id}
    offer={OFFER}
    onCardHover={onCardHover}
  />);

  card.simulate(`mouseEnter`);
  expect(onCardHover).toHaveBeenCalledTimes(1);
});
