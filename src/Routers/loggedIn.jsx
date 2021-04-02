import { Switch, Route } from "react-router-dom";
import Recipe from "../Routes/Recipe/Recipe";
import Recipes from "../Routes/Recipes/Recipes";

export default function LoggedIn() {
  return (
    <Switch>
      <Route path="recipes/">
        <Recipes />
      </Route>
      <Route path="/recipe/">
        <Recipe />
      </Route>
    </Switch>
  );
}
