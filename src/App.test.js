import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Choose Your Mattress/i);
  expect(linkElement).toBeInTheDocument();
});

test("finds the main appWrapper div", async () => {
  render(<App />);
  const appWrapper = await screen.findByTestId("appWrapper");
  expect(appWrapper).toBeInTheDocument();
});

test("clicking the add to cart button will increment the count in a users shopping cart", async () => {
  render(<App />);
  // the shopping cart icon is wrapped in the badge component which will
  // render the number of items in a users cart.

  const wrapperTag = "headerShoppingCartIconBadgeWrapper";
  const shoppingCartIcon = await screen.findByTestId(wrapperTag);

  // here we are expecting the initial items in a users cart to be 0
  const displayValue = within(shoppingCartIcon).getByText(0);
  expect(displayValue).toBeInTheDocument();

  const addToCart = await screen.findByTestId("addToCartButton");

  // after firing the click event below a users cart should have one item
  fireEvent.click(addToCart);

  const incrementedShoppingCart = await screen.findByTestId(wrapperTag);

  const updatedCartValue = within(incrementedShoppingCart).getByText(1);
  expect(updatedCartValue).toBeInTheDocument();
});
