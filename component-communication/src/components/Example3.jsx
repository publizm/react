import React, { useContext } from 'react';
import PersonContext from '../contexts/PersonContext';
import AreaContext from '../contexts/AreaContext';

// 함수형 컴포넌트에서 useContext를 이용한 방법
const Example3 = () => {
  const person = useContext(PersonContext);
  const area = useContext(AreaContext);
  return (
    <div>
      <p>{JSON.stringify(person.persons)}</p>
      <p>{JSON.stringify(area)}</p>
      <button onClick={person.increase}>Click Me</button>
    </div>
  );
};

export default Example3;
