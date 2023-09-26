import React from "react";
import renderer from "react-test-renderer";
import CompanionForm from "../CompanionForm";

describe("CompanionForm", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<CompanionForm />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
