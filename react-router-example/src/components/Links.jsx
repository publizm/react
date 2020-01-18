import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Links = () => {
  return (
    <ul>
      <li>
        <Link
          to="/"
          activeStyle={{
            color: 'green',
          }}
          exact
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          activeStyle={{
            color: 'green',
          }}
          exact
        >
          Profile
        </Link>
      </li>
      <li>
        <Link to="/profile/1" activeClassName="active">
          Profile/1
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          isActive={(match, location) => {
            if (match === null) {
              // about에 들어왔는지 체크하기 위해서 match === null로 체크
              return false;
            }
            console.log(location.search);
            return location.search === '';
          }}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/about?name=mark"
          isActive={(match, location) => {
            if (match === null) {
              return false;
            }
            return location.search === '?name=mark';
          }}
        >
          About?name=mark
        </Link>
      </li>
    </ul>
  );
};

export default Links;
