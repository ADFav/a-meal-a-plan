// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MealType = {
  "BREAKFAST": "BREAKFAST",
  "LUNCH": "LUNCH",
  "DINNER": "DINNER",
  "SNACKS": "SNACKS",
  "DESSERTS": "DESSERTS",
  "MISC": "MISC"
};

const { Meal, Recipe, Ingredient, MealPlan } = initSchema(schema);

export {
  Meal,
  Recipe,
  Ingredient,
  MealPlan,
  MealType
};