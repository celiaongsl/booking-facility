import React from "react";
import FilterCheckboxes from "./";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect'
// import { floors } from "../../utils/constant";

const checkboxList = { 3: false, 4: false, 8: false };

describe("<FilterCheckboxes />", () => {
  it("renders the component", () => {
    const { asFragment } = render(<FilterCheckboxes />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the component with floor details", () => {
    const checkboxList = { 3: false, 4: false, 8: false };
    const { asFragment } = render(
      <FilterCheckboxes checkboxList={checkboxList} title="Floor" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("has rendered items passed correctly and check first text label", () => {
    const container = render(
      <FilterCheckboxes 
      checkboxList={checkboxList} title="Floor" />
    );
    const allCheckboxes = container.getByTestId('checkbox-list');
    expect(allCheckboxes.children.length).toEqual(3)
    expect(container.getByText('Floor 3')).toBeInTheDocument();
        // const checkbox = allCheckboxes.children[0];
        // console.log(checkbox);
        // // userEvent.click(checkbox);
        // expect(checkbox.checked).toBe(false);
        // fireEvent.click(checkbox)
        // expect(handleChange).toHaveBeenCalledTimes(1);
        // expect(checkbox.checked).toBe(true);
  });
});
