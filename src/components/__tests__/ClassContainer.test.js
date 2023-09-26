import React from "react";
import renderer from "react-test-renderer";
import ClassContainer from "../ClassContainer";

describe("ClassContainer", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<ClassContainer />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
