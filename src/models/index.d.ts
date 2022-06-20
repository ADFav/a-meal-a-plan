import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum IngredientAttributeTypes {
  QUANTITY = "QUANTITY",
  UNIT = "UNIT",
  FOODSTUFF = "FOODSTUFF",
  PREPARATION = "PREPARATION",
  SIZE = "SIZE",
  COLOR = "COLOR",
  PARANTHETICAL = "PARANTHETICAL"
}



export declare class RecipeTag {
  readonly id: string;
  readonly recipeID: string;
  readonly value?: string | null;
  readonly color?: string | null;
  constructor(init: ModelInit<RecipeTag>);
  static copyOf(source: RecipeTag, mutator: (draft: MutableModel<RecipeTag>) => MutableModel<RecipeTag> | void): RecipeTag;
}

export declare class Recipe {
  readonly id: string;
  readonly title?: string | null;
  readonly Ingredients?: (Ingredient | null)[] | null;
  readonly originalURL?: string | null;
  readonly RecipeTags?: (RecipeTag | null)[] | null;
  readonly photo?: string | null;
  constructor(init: ModelInit<Recipe>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}

export declare class Ingredient {
  readonly id: string;
  readonly recipeID: string;
  readonly originalText?: string | null;
  readonly Foodstuff?: Foodstuff | null;
  readonly quantity?: number | null;
  readonly unit?: string | null;
  constructor(init: ModelInit<Ingredient>);
  static copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient>) => MutableModel<Ingredient> | void): Ingredient;
}

export declare class Foodstuff {
  readonly id: string;
  readonly name?: string | null;
  readonly aisle?: string | null;
  constructor(init: ModelInit<Foodstuff>);
  static copyOf(source: Foodstuff, mutator: (draft: MutableModel<Foodstuff>) => MutableModel<Foodstuff> | void): Foodstuff;
}