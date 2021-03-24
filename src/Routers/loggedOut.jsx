import { Switch, Route } from "react-router-dom";
import { LogIn } from "../Components/Login";

export function loggedOut(props) {
  return (
    <Switch>
      <Route path="*">
        <LogIn />
      </Route>
    </Switch>
  );
}
