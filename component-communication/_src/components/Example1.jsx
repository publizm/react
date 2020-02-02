import React from 'react';
import PersonContext from '../contexts/PersonContext';

const Example1 = () => (
  <PersonContext.Consumer>
    {persons => <div>{JSON.stringify(persons)}</div>}
  </PersonContext.Consumer>
);

export default Example1;
