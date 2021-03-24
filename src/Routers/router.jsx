import { LoggedIn } from "./loggedIn";
import { LoggedOut } from "./loggedOut";

export default function Router(props) {
  const { loggedIn } = props.authState;
  return loggedIn ? <LoggedIn /> : <LoggedOut />;
}
