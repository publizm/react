import React from 'react';
import logo from './logo.svg';
import './App.css';
import Controlled from './components/Controlled';
import ControlledHook from './components/ControlledHook';
import UnControlled from './components/UnControlled';
import UnControlledHook from './components/UnControlledHook';

function App() {
  return (
    <>
      <Controlled />
      <ControlledHook />
      <UnControlled />
      <UnControlledHook />
    </>
  );
}

export default App;
