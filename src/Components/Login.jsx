import React, { Component } from "react";
import { login, getAuthState } from "../Services/AuthService";
import "./Login.css";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loginClickHandler() {}

  setStateValue({ target: { name, value } }) {
    const stateSetter = () => ({ [name]: value });
    this.setState(stateSetter);
  }

  render() {
    return (
      <div>
        <span>Username</span>
        <input
          type="email"
          name="username"
          onChange={(e) => this.setStateValue(e)}
        />
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={(e) => this.setStateValue(e)}
        />
        <button onClick={() => this.loginClickHandler()}>Log in</button>
      </div>
    );
  }
}
