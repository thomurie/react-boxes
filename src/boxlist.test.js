import { fireEvent, render, screen } from "@testing-library/react";
import Box from "./box";
import Boxlist from "./boxlist";

// Smoke
test("renders learn react link", () => {
  render(<Boxlist />);
});

// Snapshot
test("Matches snapshot", () => {
  const { asFragment } = render(<Boxlist />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic
test("Form renders", () => {
  const { getByLabelText, queryByText } = render(<Boxlist />);
  expect(getByLabelText("Width:")).toBeInTheDocument();
  expect(getByLabelText("Height:")).toBeInTheDocument();
  expect(getByLabelText("Color:")).toBeInTheDocument();
  expect(queryByText("Create Box")).toBeInTheDocument();
});

test("Submitting form renders box", () => {
  const { getByLabelText, queryByText, queryByTestId } = render(<Boxlist />);
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");
  const sumbitBtn = queryByText("Create Box");

  fireEvent.change(widthInput, { target: { value: "200" } });
  fireEvent.change(heightInput, { target: { value: "200" } });
  fireEvent.change(colorInput, { target: { value: "red" } });
  fireEvent.click(sumbitBtn);

  expect(queryByTestId("red")).toBeInTheDocument();
});

test("Can remove box from list", () => {
  // render component
  const { getByLabelText, queryByText, queryByTestId } = render(<Boxlist />);
  // create a box with the form
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");
  const sumbitBtn = queryByText("Create Box");
  // enter data in the form
  fireEvent.change(widthInput, { target: { value: "200" } });
  fireEvent.change(heightInput, { target: { value: "200" } });
  fireEvent.change(colorInput, { target: { value: "red" } });
  fireEvent.click(sumbitBtn);

  expect(queryByTestId("red")).toBeInTheDocument();
  // remove the box from the form
  const removeBox = queryByText("X");
  fireEvent.click(removeBox);
  expect(queryByTestId("red")).not.toBeInTheDocument();
});
