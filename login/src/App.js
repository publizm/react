import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import User from './components/User';

const AuthedRoute = () => {};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/User" component={User} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
