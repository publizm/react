import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';
import Sample from './Sample';

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/publee">publee</Link>
        </li>
        <li>
          <Link to="/profiles/jinsook">jinsook</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <Sample data="data" />}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;