import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';

// const LoginButton = props => {
//   function login() {
//     setTimeout(() => {
//       props.history.push('/');
//     }, 1000);
//   }
//   return <button onClick={login}>로그인</button>;
// };

// hooks
const LoginButton = props => {
  const history = useHistory();
  function login() {
    setTimeout(() => {
      history.push('/');
    }, 1000);
  }
  return <button onClick={login}>로그인</button>;
};

export default LoginButton;
