import { Switch, Route } from "react-router-dom";
import LogIn from "../Routes/LogIn";
import SignUp from "../Routes/SignUp";

export default function LoggedOut() {
  return (
    <Switch>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="*">
        <LogIn />
      </Route>
    </Switch>
  );
}
