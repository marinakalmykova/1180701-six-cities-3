import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header be pressed`, () => {
  const onHeaderClick = jest.fn();

  const main = shallow(
      <Main
        places={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`]}
        onHeaderClick={onHeaderClick}
      />
  );

  const header = main.find(`header`);

  header.props().onClick();

  expect(onHeaderClick.mock.calls.length).toBe(1);
});
