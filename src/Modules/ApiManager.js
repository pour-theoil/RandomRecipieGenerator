import { ApiKey } from "../ApiKey"

let key = ApiKey();


export const getRandomRecipe = () => {
    return fetch (`https://api.spoonacular.com/recipes/random?apiKey=${key}`)
    .then(response => 
        response.json())
}