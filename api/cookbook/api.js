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

export { signIn };
