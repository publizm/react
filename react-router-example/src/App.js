import React from 'react';
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Links from './components/Links';
import './App.css';

// const App = () => (
//   <BrowserRouter>
//     <Links />
//     <Switch>
//       <Route path="/profile/:id" component={Profile} />
//       <Route path="/profile" exact component={Profile} />
//       <Route path="/about" component={About} />
//       <Route path="/login" component={Login} />
//       <Route path="/" exact component={Home} />
//       <Route component={NotFound} />
//     </Switch>
//   </BrowserRouter>
// );

const Component = () => {
  const match = useRouteMatch('/undefined');
  return match && <h1>Match!</h1>;
};

const App = () => (
  <BrowserRouter>
    <Route component={Component} />
  </BrowserRouter>
);
export default App;
