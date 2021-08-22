
import { useEffect, useState } from 'react';
import './App.css';
import { getRandomRecipe} from './Modules/ApiManager';

function App() {
  const [recipe, setRecipe] = useState({})

  const getRecipe = () => {
    getRandomRecipe().then(response => setRecipe(response.recipes[0]))
  }
  console.log(recipe)
  useEffect(()=>{
    getRecipe()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h2>{recipe.title}</h2>
      </header>
    </div>
  );
}

export default App;
