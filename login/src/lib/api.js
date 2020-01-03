import axios from 'axios';

// jwt는 post를 요청하면 백엔드에서 token 값으로 전달해준다.
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
  console.log(session);
  const headers = {
    Authorization: `jwt ${session}`,
  };
  // 토큰 값을 지정하여 해당 내용 삭제
  const { data } = await axios.get('http://localhost:4000/api/signout', headers);
  return data;
};

// 전체적인 페이지 인증 방법, 백엔드에서 검증하는 방법, 이때 프론트에서 따로 검증할 필요는 없다.
export const user = async session => {
  const headers = {
    Authorization: `jwt ${session}`,
  };
  // 헤더만 설정하여 전달
  const { data } = await axios.get('http://localhost:4000/api/user', headers);
  return data;
};
