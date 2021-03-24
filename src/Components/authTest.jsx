import mockAuth from "../MockServices/mockAuth";
import { Component } from "react";

export default class AuthTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authState: mockAuth.getAuthState(),
    };
  }

  clickHandler() {
    const { loggedIn } = this.state.authState;
    const { login, logout } = mockAuth;
    const buttonAction = () => (loggedIn ? logout() : login());
    const stateUpdater = () => ({ authState: mockAuth.getAuthState() });
    buttonAction();
    this.setState(stateUpdater);
  }

  render() {
    const { loggedIn } = this.state.authState;
    const buttonText = loggedIn ? "Log Out" : "Log In";

    return (
      <div>
        <button onClick={() => this.clickHandler()}>{buttonText}</button>
        <AuthChild />
      </div>
    );
  }
}

function AuthChild(props) {
  //const { loggedIn, userData } = mockAuth.getAuthState();
  console.log("re-rendered child");
  //return <span>{loggedIn ? userData.name : "--"}</span>;
  return <span>whoops</span>;
}
