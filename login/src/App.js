import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from './Main';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignOut" component={SignOut} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
