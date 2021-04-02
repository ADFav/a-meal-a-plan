import { render, screen } from "@testing-library/react";
import GroceryList from "./GroceryList";

test("No Syntax Errors", () => {
  expect(<GroceryList />).toBeDefined();
});
