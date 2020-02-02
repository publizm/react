import React, { useContext } from 'react';
import PersonContext from '../contexts/PersonContext';

const Example3 = props => {
  const persons = useContext(PersonContext);
  return <div>{JSON.stringify(persons)}</div>;
};

export default Example3;
