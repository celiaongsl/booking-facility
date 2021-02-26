import React from "react";
import FilterCheckboxes from "./";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

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
      <FilterCheckboxes checkboxList={checkboxList} title="Floor" />
    );
    const allCheckboxes = container.getByTestId("checkbox-list");
    expect(allCheckboxes.children.length).toEqual(3);
    expect(container.getByText("Floor 3")).toBeInTheDocument();
  });

  test("updates UI of checked item on toggling", () => {
    const setCheckboxList = jest.fn();
    const { getByTestId } = render(
      <FilterCheckboxes
        checkboxList={checkboxList}
        title="Floor"
        setCheckboxList={setCheckboxList}
      />
    );
    expect(setCheckboxList).toHaveBeenCalledTimes(0);
    const checkbox = getByTestId("checkbox-0").querySelector(
      'input[type="checkbox"]'
    );
    fireEvent.click(checkbox);
    expect(setCheckboxList).toHaveBeenCalledTimes(1);
  });
});
