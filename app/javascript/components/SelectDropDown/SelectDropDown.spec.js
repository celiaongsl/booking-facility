import React from "react";
import SelectDropDown from "./";
import { render, fireEvent } from "@testing-library/react";
import { time } from "../../utils/time_constant";

const props = {
  label: "Start Time",
  onChange: jest.fn(),
  value: "00:15:00",
  list: time,
};

describe("<SelectDropDown />", () => {
  it("renders the component", () => {
    const { asFragment } = render(<SelectDropDown {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should be able to mount the select component", async () => {
    const value = "00:15:00";
    let { container } = render(<SelectDropDown {...props} />);

    expect(container.querySelector("input")).toHaveProperty("value", value);
  });

  [" ", "ArrowUp", "ArrowDown", "Enter"].forEach((key) => {
    it(`should open menu when pressed ${key} key on select`, () => {
      const { getByRole, getAllByRole } = render(<SelectDropDown {...props} />);
      const trigger = getByRole("button");
      trigger.focus();

      fireEvent.keyDown(trigger, { key });
      expect(getByRole("listbox", { hidden: false })).not.toBeNull();

      fireEvent.keyUp(getAllByRole("option")[0], { key });
      expect(getByRole("listbox", { hidden: false })).not.toBeNull();
    });
  });

  it("should not be called if selected element has the current value (value did not change)", () => {
    const { getAllByRole, getByRole } = render(<SelectDropDown {...props} />);
    fireEvent.mouseDown(getByRole("button"));
    getAllByRole("option")[1].click();
    expect(props.onChange).toBeCalledTimes(0);
  });

  it("should be called if selected element does not have the current value (value changed)", () => {
    const { getAllByRole, getByRole } = render(<SelectDropDown {...props} />);
    fireEvent.mouseDown(getByRole("button"));
    getAllByRole("option")[3].click();
    expect(props.onChange).toBeCalledTimes(1);
  });
});
