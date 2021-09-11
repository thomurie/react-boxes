import {
  queryByAltText,
  queryByTestId,
  render,
  screen,
} from "@testing-library/react";
import Box from "./box";

// Smoke
test("renders learn react link", () => {
  render(<Box />);
});

// Snapshot
test("Matches snapshot", () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic
test("renders box in document", () => {
  const { queryByTestId } = render(
    <Box width={200} height={200} color="yellow" />
  );
  expect(queryByTestId("yellow")).toBeInTheDocument();
});

test("renders remove button in document", () => {
  render(<Box width={200} height={200} color="yellow" />);
  expect(screen.queryByText(/x/i)).toBeInTheDocument();
});
