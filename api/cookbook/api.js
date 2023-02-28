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
    .post('/recipes', recipe, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => console.log(res));
};

export { signIn, signUp, addRecipe };
