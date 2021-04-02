import { render, screen } from "@testing-library/react";
import IngredientList from "./IngredientList";
import Recipe from "./Recipe";

const recipes = require("../../mockdata/recipes.json");
const mockRecipe = recipes[0];
const ingredeints = require("../../mockdata/ingredients.json");
const mockIngredients = ingredeints.filter(
  (ingredient) => ingredient.recipeId === "a"
);

describe("Recipe Route", () => {
  let recipeComp;
  beforeEach(() => {
    recipeComp = <Recipe recipe={mockRecipe} />;
    render(recipeComp);
  });

  test("Can accept recipe as Prop", () => {
    expect(recipeComp).toBeDefined();
  });

  test("Can render title", () => {
    const { title } = mockRecipe;
    expect(screen.getByText(title.trim())).toBeInTheDocument();
  });

  test("Has navbar", () => {
    const appTitle = "App Title!".trim();
    expect(screen.getByText(appTitle)).toBeInTheDocument();
  });
});

describe("Ingredient List Component", () => {
  let ingredientListComp;
  beforeEach(() => {
    ingredientListComp = <IngredientList ingredients={mockIngredients} />;
    render(ingredientListComp);
  });

  test("Can accept ingredient list as Prop", () => {
    expect(ingredientListComp).toBeDefined();
  });

  test("Renders ingredient list", () => {
    expect(screen.getByText(mockIngredients[0].amount)).toBeInTheDocument();
  });
});
