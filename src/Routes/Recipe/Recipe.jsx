import { Component } from "react";
import Navbar from "../../Components/Navbar";
import IngredientList from "./IngredientList";

const mockRecipes = require("../../mockdata/recipes");
const mockIngredients = require("../../mockdata/ingredients");

export default class Recipe extends Component {
  constructor(props = { r: "z" }) {
    super(props);
    const { recipe = mockRecipes[0] } = props;
    this.getIngredients(recipe.id);
    this.state = { ingredients: [], steps: [] };
  }

  getIngredients(recipeId) {
    setTimeout(() => {
      const ingredients = mockIngredients.filter(
        (ingredient) => ingredient.recipeId === recipeId
      );
      this.setState({ ingredients });
    }, 3000);
  }

  ingredientList() {
    if (this.state.ingredients.length > 0) {
      return (
        <IngredientList
          ingredients={this.state.ingredients}
          annotations={this.props.annotations}
        />
      );
    }
    return <div>LOADING</div>;
  }

  render() {
    const { recipe = mockRecipes[0] } = this.props;
    const { title, imageUrl, url, id } = recipe;
    const altText = `Photo of ${title}`;
    return (
      <div>
        <Navbar />
        <h1>{<a href={url}>{title}</a>}</h1>
        <img alt={altText} src={imageUrl} />
        {this.ingredientList()}
      </div>
    );
  }
}
