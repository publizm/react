import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { signOut } from '../../libs/api';
import { useAuthed } from '../../libs/hooks';
import jwt from 'jsonwebtoken';

const User = props => {
  const [username, setUsername] = useState('');
  // Authed로 인해 User에서 따로 verify를 할 필요가 없어졌다.
  const { username: user } = useAuthed();

  useEffect(() => {
    setUsername(user);
  }, []);

  const logOut = () => {
    const session = Cookies.get('session');

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
