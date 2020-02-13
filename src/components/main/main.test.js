import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";


it(`Should Main page render correctly`, () => {
  const tree = renderer
    .create(<Main
      places={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`]}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
