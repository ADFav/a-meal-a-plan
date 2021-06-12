import { BrowserRouter } from "react-router-dom";
import LoggedIn from "./loggedIn";
import LoggedOut from "./loggedOut";

export default function Router(props) {
  const router = props.loggedIn ? <LoggedIn /> : <LoggedOut />;
  return <BrowserRouter>{router}</BrowserRouter>;
}
