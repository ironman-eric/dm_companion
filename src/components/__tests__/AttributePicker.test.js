import React from "react";
import renderer from "react-test-renderer";
import AttributePicker from "../AttributePicker";

describe("AttributePicker", () => {
  it("Matches DOM Snapshot", () => {
    const items = ["items1","item2"];
    const domTree = renderer.create(<AttributePicker items={items} />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
