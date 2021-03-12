import Ingredient from './Components/Ingredient';
// import logo from './logo.svg';
import './App.css';
let ingredientData = require('./mockdata/ingredient.json');


function App() {
    return <Ingredient {...ingredientData }
    />;
}

export default App;