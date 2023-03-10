import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

const signIn = ({ email, password }) => {
  return api
    .post('/signin', {
      email,
      password,
    })
    .then((res) => res.data.token);
};

const signUp = ({ email, name, password }) => {
  return api
    .post('/signup', {
      email,
      name,
      password,
    })
    .then((res) => console.log(res));
};

const addRecipe = (recipe, jwt) => {
  return api
    .post(
      '/recipes',
      { ...recipe },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    )
    .then((res) => console.log(res));
};

const deleteRecipe = (recipeId, jwt) => {
  return api
    .delete(`recipes/${recipeId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => console.log(res.data));
};

const getSavedRecipes = (jwt) => {
  return api
    .get('/recipes', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => console.log(res.data));
};

export { signIn, signUp, addRecipe, deleteRecipe, getSavedRecipes };
