import { BrowserRouter } from "react-router-dom";
import LoggedIn from "./loggedIn";
import LoggedOut from "./loggedOut";

export default function Router(props) {
  console.log(props);
  const { loggedIn } = props.authState;
  return (
    <BrowserRouter>{loggedIn ? <LoggedIn /> : <LoggedOut />}</BrowserRouter>
  );
}
