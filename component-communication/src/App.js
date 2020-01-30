import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import PersonContext from './contexts/PersonContext';

function App() {
  const [persons, setPersons] = useState([
    { id: 0, name: 'CheolHwan', age: 29 },
    { id: 1, name: 'Publee', age: 29 },
  ]);

  const personState = {
    persons,
    increase: () => {
      const newPersons = persons.map(person => ({
        ...person,
        age: person.age + 1,
      }));
      setPersons(newPersons);
    },
  };

  return (
    <div className="App">
      <PersonContext.Provider value={personState}>
        <header className="App-header">
          <Example1 />
          <br />
          <Example2 />
          <br />
          <Example3 />
        </header>
      </PersonContext.Provider>
    </div>
  );
}

export default App;
