import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList(props) {
  const { ingredients } = props;
  const ingredientMapper = (ingredient) => (
    <Ingredient key={ingredient.id} {...ingredient} />
  );
  return <div>{ingredients.map(ingredientMapper)}</div>;
}
