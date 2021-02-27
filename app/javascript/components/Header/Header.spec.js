import React from "react";
import Header from "./";
import { render } from "@testing-library/react";

describe("<Header />", () => {
  it("renders the component", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
