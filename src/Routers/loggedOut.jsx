import { Switch, Route } from "react-router-dom";
import Login from "../Components/Login";

export default function LoggedOut(props) {
  return (
    <Switch>
      <Route path="*">
        <Login />
      </Route>
    </Switch>
  );
}
