import React from "react";
import ReactDOM from "react-dom";
import Recipe from "../Routes/Recipe/Recipe";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const mockRecipe = require("../mockdata/recipes")[0];

ReactDOM.render(
  <React.StrictMode>
    <Recipe recipe={mockRecipe} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
