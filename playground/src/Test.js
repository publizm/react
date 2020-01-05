import React, { useState, useEffect } from 'react';
import Sample from './Sample';

function Test() {
  const [name, setName] = useState('publee');

  useEffect(() => {
    setName(name => (name = 'CheolHwan'));
  }, []);

  return (
    <div>
      <p>I'm {name}.</p>
    </div>
  );
}

export default Test;
