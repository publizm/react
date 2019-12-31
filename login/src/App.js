import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';
import User from './User';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/user" component={User} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
