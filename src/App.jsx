import React from "react";
import "./App.css";
import LogIn from "./Components/Login";
import mockAuth from "./MockServices/mockAuth";

// const ingredient = require("./mockdata/ingredient.json");
const AuthService = React.createContext(mockAuth);

function App() {
  // console.log(mockAuth);
  return (
    <div>
      {/* <AuthService.Provider value={mockAuth}>
        <AuthService.Consumer>
          {({ authState }) => <span>{authState.loggedIn.toString()}</span>}
        </AuthService.Consumer>
        <AuthService.Consumer>
          {(service) => <LoginButton {...service} />}
        </AuthService.Consumer>
      </AuthService.Provider> */}
      <LoginButton />
      <TestSpan />
    </div>
  );
}

export default App;

function LoginButton() {
  const context = React.useContext(AuthService);

  const clickHandler = () => {
    console.log(context.getAuthState());
    context.authState.loggedIn = true;
    context.login();
    console.log(context.getAuthState());
  };
  return <button onClick={clickHandler}>Log in</button>;
}

function TestSpan(props) {
  const { authState } = React.useContext(AuthService);
  const { loggedIn } = authState;
  console.log(authState);
  return <span>{loggedIn.toString()}</span>;
}
