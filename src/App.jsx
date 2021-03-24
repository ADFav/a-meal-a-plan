import "./App.css";
import AuthTest from "./Components/authTest";
import IngredientEditor from "./Components/IngredientEditor";

const ingredient = require("./mockdata/ingredient.json");

function App() {
  return <IngredientEditor breakdown={ingredient.breakdown} />;
}

export default App;
