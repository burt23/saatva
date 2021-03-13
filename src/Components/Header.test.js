import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("is able to find the matressLogo test-id", async () => {
  render(<Header />);
  const mattressLogo = await screen.findByTestId("mattressLogo");
  expect(mattressLogo).toBeInTheDocument();
});

test("finds the shopping cart test-id", async () => {
  render(<Header />);
  // the shopping cart icon is wrapped in the badge component which will
  // render the number of items in a users cart.
  const shoppingCartIcon = await screen.findByTestId("headerShoppingCartIcon");
  expect(shoppingCartIcon).toBeInTheDocument();
});
