
import { useEffect, useState } from 'react';
import './App.css';
import { getRandomRecipe} from './Modules/ApiManager';

function App() {
  const [recipe, setRecipe] = useState({})
  

  const getNewRecipe = (evt) => {
    evt.preventDefault()
    console.log("Youclicked me")
    getRecipe()
  }
  const getRecipe = () => {
    getRandomRecipe().then(response => {
      setRecipe(response.recipes[0])
    })
  }
  console.log(recipe)
  useEffect(()=>{
    getRecipe()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Recipe Generator</h1>
        <button onclick={() => getNewRecipe()}>New Recipe!</button>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt="Dish" />
        <p>Dish Type: {recipe.dishTypes}</p>
        <p>Summary: {recipe.summary}</p>
      </header>
    </div>
  );
}

export default App;
