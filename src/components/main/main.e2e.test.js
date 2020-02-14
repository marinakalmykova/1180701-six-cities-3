import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const PLACES = [
  {
    id: String(new Date() + Math.random()),
    name: `Beautiful & luxurious apartment at great location`,
  },
  {
    id: String(new Date() + Math.random()),
    name: `Wood and stone place`
  }];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header be pressed`, () => {
  const onHeaderClick = jest.fn();

  const main = shallow(
      <Main
        places={PLACES}
        onHeaderClick={onHeaderClick}
      />
  );

  const header = main.find(`header`);

  header.props().onClick();

  expect(onHeaderClick.mock.calls.length).toBe(1);
});
