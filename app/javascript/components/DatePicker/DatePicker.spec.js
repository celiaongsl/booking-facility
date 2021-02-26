import React from "react";
import DatePicker from ".";
import { render, fireEvent } from "@testing-library/react";
import { ExpansionPanelActions } from "@material-ui/core";

describe("<DatePicker />", () => {
  it("renders the component", () => {
    const container = render(<DatePicker />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
