import { fireEvent, render } from "@testing-library/react";
import NewBoxForm from "./newboxform";

// Smoke
test("renders learn react link", () => {
  render(<NewBoxForm />);
});

// Snapshot
test("Matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic
test("Can enter data", () => {
  // render the component
  const { getByLabelText } = render(<NewBoxForm />);
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");
  // enter data in the form
  fireEvent.change(widthInput, { target: { value: "200" } });
  fireEvent.change(heightInput, { target: { value: "200" } });
  fireEvent.change(colorInput, { target: { value: "red" } });
  // expect the input data to be in the form
  expect(getByLabelText("Width:").value).toEqual("200");
  expect(getByLabelText("Height:").value).toEqual("200");
  expect(getByLabelText("Color:").value).toEqual("red");
});
