import React from "react";
import renderer from "react-test-renderer";
import CompanionResult from "../CompanionResult";

describe("CompanionResult", () => {
  it("Matches DOM Snapshot", () => {
    const data = 'Barbarian';

  const domTree = renderer.create(<CompanionResult data={data} />).toJSON();
  expect(domTree).toMatchSnapshot();
});
});
