import React from 'react';
import LoginButton from '../components/LoginButton';

const Login = ({ history }) => {
  return (
    <div>
      <h1>로그인</h1>
      <LoginButton />
      {/* withRouter(HOC)를 사용하지 않는다면 props로 전달해주어한다. */}
    </div>
  );
};

export default Login;
