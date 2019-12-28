import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [dislike, setDislike] = useState(0);

  useEffect(() => {
    console.log({ count });
  }, [count]);

  useEffect(() => {
    console.log('dislike', { dislike });
  }, [dislike]);

  return (
    <div className="App">
      <header>
        {count}, {dislike}
      </header>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setDislike(dislike + 1)}>+</button>
    </div>
  );
}

export default App;
