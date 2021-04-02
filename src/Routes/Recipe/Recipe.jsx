import { Component } from "react";
import Navbar from "../../Components/Navbar";
import { CRUDContext } from "../../Services/CRUDService";
import Query from "../../Services/Query";
import IngredientList from "./IngredientList";

const mockRecipes = require("../../mockdata/recipes.json");

export default class Recipe extends Component {
  static defaultProps = { recipe: mockRecipes[0] };
  static contextType = CRUDContext;
  constructor(props) {
    super(props);
    this.state = { ingredients: null, steps: [] };

    ["setIngredients", "getIngredients"].forEach((handlerName) => {
      this[handlerName] = this[handlerName].bind(this);
    });
  }

  async componentDidMount() {
    await this.getIngredients();
  }

  setIngredients(ingredients) {
    this.setState({ ingredients });
  }

  async getIngredients() {
    const { read } = this.context;
    const query = this.ingredientsQuery;
    const ingredients = await read(query);
    this.setIngredients(ingredients);
  }

  ingredientsQuery = {
    table: "ingredients",
    filters: [["recipeId", "==", this.props.recipe.id]],
  };

  ingredientList() {
    return this.state.ingredients != null ? (
      <IngredientList
        ingredients={this.state.ingredients}
        annotations={this.props.annotations}
      />
    ) : (
      <div>LOADING</div>
    );
  }

  render() {
    const { recipe } = this.props;
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
