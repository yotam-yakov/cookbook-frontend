import axios from 'axios';
import convertRecipe from './convert';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: '746601734f124fa79b175f4ad0fd8ece',
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
