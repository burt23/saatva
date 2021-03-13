import { render, screen } from "@testing-library/react";
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
