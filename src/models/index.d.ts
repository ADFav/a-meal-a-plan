import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum MealType {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  SNACKS = "SNACKS",
  DESSERTS = "DESSERTS",
  MISC = "MISC"
}



export declare class Meal {
  readonly id: string;
  readonly mealplanID?: string;
  readonly Recipe?: Recipe;
  readonly type?: MealType | keyof typeof MealType;
  readonly date?: string;
  constructor(init: ModelInit<Meal>);
  static copyOf(source: Meal, mutator: (draft: MutableModel<Meal>) => MutableModel<Meal> | void): Meal;
}

export declare class Recipe {
  readonly id: string;
  readonly Ingredients?: (Ingredient | null)[];
  readonly title: string;
  readonly imageURL?: string;
  readonly originalURL?: string;
  constructor(init: ModelInit<Recipe>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}

export declare class Ingredient {
  readonly id: string;
  readonly originalText: string;
  readonly quantity?: number;
  readonly unit?: string;
  readonly preparation?: string;
  readonly recipeID?: string;
  readonly aisle?: string;
  readonly ingredientName?: string;
  constructor(init: ModelInit<Ingredient>);
  static copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient>) => MutableModel<Ingredient> | void): Ingredient;
}

export declare class MealPlan {
  readonly id: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly Meals?: (Meal | null)[];
  constructor(init: ModelInit<MealPlan>);
  static copyOf(source: MealPlan, mutator: (draft: MutableModel<MealPlan>) => MutableModel<MealPlan> | void): MealPlan;
}