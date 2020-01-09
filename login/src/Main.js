import React from 'react';
import { Link, Route } from 'react-router-dom';

const Main = props => {
  return (
    <>
      <ul className="navigation">
        <li>
          <Link to="/SignUp">회원가입 바로가기</Link>
        </li>
        <li>
          <Link to="/SignIn">로그인 바로가기</Link>
        </li>
      </ul>
      <h2>메인입니다</h2>
      <button className="signout-btn">로그아웃</button>
    </>
  );
};

export default Main;
