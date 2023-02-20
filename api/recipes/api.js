import axios from 'axios';

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
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export { submitSearch };
