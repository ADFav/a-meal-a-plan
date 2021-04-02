import React from "react";
import "./App.css";
import Router from "./Routers/router";

const mockAuth = { authState: { loggedIn: true } };
function App() {
  return (
    <div>
      <Router authState={mockAuth.authState}></Router>
    </div>
  );
}

export default App;
