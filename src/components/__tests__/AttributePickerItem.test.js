import React from "react";
import renderer from "react-test-renderer";
import AttributePickerItem from "../AttributePickerItem";

describe("AttributePickerItem", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<AttributePickerItem />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
