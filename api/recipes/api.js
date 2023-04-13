import axios from 'axios';
import convertRecipe from './convert';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  },
});

const submitSearch = (search) => {
  return api
    .get('/complexSearch', {
      params: {
        addRecipeInformation: true,
        fillIngredients: true,
        number: 20,
        ...search,
      },
    })
    .then((res) => {
      console.log(res);
      const convertedRecipes = res.data.results.map((recipe) =>
        convertRecipe(recipe)
      );
      return convertedRecipes;
    });
};

export { submitSearch };
