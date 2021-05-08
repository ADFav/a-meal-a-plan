import { Switch, Route } from "react-router-dom";
import Meal from "../Routes/Meal";
import MealPlan from "../Routes/MealPlan";
import MealPlans from "../Routes/MealPlans";

export default function LoggedIn() {
  return (
    <Switch>
      <Route path="/">
        <MealPlans />
      </Route>
      <Route path="mealplan/:mealplanId">
        <MealPlan />
      </Route>
      <Route path="mealplan/:mealplanId/meal/:mealId">
        <Meal />
      </Route>
      <Route path="*">
        <MealPlans />
      </Route>
    </Switch>
  );
}
