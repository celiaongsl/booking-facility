import React from "react";
import DatePicker from "./";
import { render, fireEvent } from "@testing-library/react";

describe("<DatePicker />", () => {
  const setup = () => {
    const utils = render(<DatePicker />);
    const datepickerInput = utils.getByLabelText("change date");
    return {
      datepickerInput,
      ...utils,
    };
  };

  it("renders the component", () => {
    const { asFragment } = render(<DatePicker />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("it should display the right date", () => {
    const { datepickerInput } = setup();
    fireEvent.change(datepickerInput, { target: { value: "10-12-2020" } });
    expect(datepickerInput.value).toBe("10-12-2020");
  });
});
