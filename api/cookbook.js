import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const logResponse = (res) => {
  console.log(res);
  return res.data;
};

export const signIn = ({ email, password }) => {
  return api
    .post('/signin', {
      email,
      password,
    })
    .then(logResponse);
};

export const signUp = ({ email, name, password }) => {
  return api
    .post('/signup', {
      email,
      name,
      password,
    })
    .then(logResponse);
};

export const addRecipe = (recipe, jwt) => {
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
    .then(logResponse);
};

export const updateRecipe = (recipeId, updates, jwt) => {
  return api
    .patch(`recipes/${recipeId}`, updates, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(logResponse);
};

export const deleteRecipe = (recipeId, jwt) => {
  return api
    .delete(`recipes/${recipeId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(logResponse);
};

export const getSavedRecipes = (jwt) => {
  return api
    .get('/recipes/saved', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(logResponse);
};

export const getMyRecipes = (jwt) => {
  return api
    .get('/recipes/my', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(logResponse);
};

export const sendFeedback = (feedback) => {
  return api.post('/feedback', feedback).then(logResponse);
};
