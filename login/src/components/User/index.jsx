import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { signOut } from '../../libs/api';
import jwt from 'jsonwebtoken';

const User = props => {
  const session = Cookies.get('session');
  const [username, setUsername] = useState('');
  const key = process.env.REACT_APP_JWT_KEY;

  useEffect(() => {
    const decoded = jwt.verify(session, key);
    setUsername(decoded.username);
  }, []);

  const logOut = () => {
    signOut(session);
    Cookies.remove('session');
    props.history.push('/');
  };
  return (
    <>
      <h2>유저 페이지</h2>
      <h3 className="greeting">
        <span className="name">{username}</span>님 어서오세요
      </h3>
      <button className="signout-btn" onClick={logOut}>
        로그아웃
      </button>
    </>
  );
};

export default User;
