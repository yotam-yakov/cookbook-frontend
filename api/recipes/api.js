import axios from 'axios';
import convertRecipe from './convert';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: '746601734f124fa79b175f4ad0fd8ece',
  },
});

const submitSearch = (query) => {
  return api
    .get('/complexSearch', {
      params: {
        query: query,
        addRecipeInformation: true,
        fillIngredients: true,
        number: 20,
      },
    })
    .then((res) => {
      console.log(res);
      const convertedRecipes = res.data.results.map((recipe) =>
        convertRecipe(recipe)
      );
      res.data.results.forEach((element) => {
        console.log(convertRecipe(element));
      });
      return convertedRecipes;
    })
    .catch((err) => console.log(err));
};

export { submitSearch };
