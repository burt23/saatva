import { render, screen } from "@testing-library/react";
import Selector from "./Selector";

test("is able to find the select mattress text", async () => {
  render(<Selector />);
  const selectMattressText = screen.getByText(/SELECT MATTRESS TYPE/i);
  expect(selectMattressText).toBeInTheDocument();
});

test("finds the addToCart button test-id", async () => {
  render(<Selector />);
  const addToCartButton = await screen.findByTestId("addToCartButton");
  expect(addToCartButton).toBeInTheDocument();
});
