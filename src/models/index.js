// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const IngredientAttributeTypes = {
  "QUANTITY": "QUANTITY",
  "UNIT": "UNIT",
  "FOODSTUFF": "FOODSTUFF",
  "PREPARATION": "PREPARATION",
  "SIZE": "SIZE",
  "COLOR": "COLOR",
  "PARANTHETICAL": "PARANTHETICAL"
};

const { RecipeTag, Recipe, Ingredient, Foodstuff } = initSchema(schema);

export {
  RecipeTag,
  Recipe,
  Ingredient,
  Foodstuff,
  IngredientAttributeTypes
};