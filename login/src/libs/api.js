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

export const signOut = async session => {
  const headers = {
    Authorization: `jwt ${session}`,
  };

  const { data } = await axios.get('http://localhost:4000/api/signout', {
    headers,
  });

  return data;
};

export const user = async session => {
  // 로그인이 필요한 요청에 대해 백엔드에서 검사하게끔 해준다.
  // headers jwt와 직접적인 연관 x , backend에 설정이 되어 있어 검증하기 위한 것.
  // 일반적으로 한다
  const headers = {
    Authorization: `jwt ${session}`,
  };

  const { data } = await axios.get('http://localhost:4000/api/user', {
    headers,
  });

  return data;
};
