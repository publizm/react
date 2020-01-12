import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from './Main';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import User from './components/User';
import { useAuthed } from './libs/hooks';

const AuthedRoute = ({ component: Component, ...rest }) => {
  const isAuthed = useAuthed();
  return (
    <Route
      render={props => {
        if (isAuthed) {
          return <Component {...rest} {...props} />;
        } else {
          return <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />;
        }
      }}
    />
  );
};

const UnAuthedRoute = ({ component: Component, ...rest }) => {
  const isAuthed = useAuthed();
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthed) {
          if (rest.path === '/signup') {
            alert('이미 회원가입이 되어있습니다.');
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
          } else if (rest.path === '/signin') {
            alert('이미 로그인이 되어있습니다.');
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
          }
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <UnAuthedRoute path="/signup" component={SignUp} />
        <UnAuthedRoute path="/signin" component={SignIn} />
        <AuthedRoute path="/user" component={User} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
