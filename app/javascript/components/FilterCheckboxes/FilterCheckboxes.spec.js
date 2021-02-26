import React from "react";
import FilterCheckboxes from "./";
import { render, fireEvent } from "@testing-library/react";

describe("<FilterCheckboxes />", () => {
  const setup = () => {
    const utils = render(<FilterCheckboxes />);
    // const datepickerInput = utils.getByLabelText("change date");
    return {
      //   datepickerInput,
      ...utils,
    };
  };

  it("renders the component", () => {
    const { asFragment } = render(<FilterCheckboxes />);
    expect(asFragment()).toMatchSnapshot();
  });

});
