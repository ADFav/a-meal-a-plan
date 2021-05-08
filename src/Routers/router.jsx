import { BrowserRouter } from "react-router-dom";
import LoggedIn from "./loggedIn";
import LoggedOut from "./loggedOut";

export default function Router(props) {
  const loggedIn = props.AuthConnection.user !== null;
  const router = loggedIn ? <LoggedIn /> : <LoggedOut />;
  return <BrowserRouter>{router}</BrowserRouter>;
}
