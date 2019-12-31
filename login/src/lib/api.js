import axios from 'axios';

export const signUp = async ({ username, password1: password }) => {
  const { data } = await axios.post('http://localhost:4000/api/signup', {
    username,
    password,
  });
  return data;
};

export const signIn = async ({ username, password }) => {
  const { data } = await axios.post('http://localhost:4000/api/signin', {
    username,
    password,
  });
  return data;
};
