import React from 'react';
import PersonContext from '../contexts/PersonContext';

// 함수형 컴포넌트에서 consumer를 이용한 방법
const Example2 = props => {
  return (
    <div>
      <PersonContext.Consumer>
        {value =>
          value.persons.map((val, index) => (
            <p key={index}>{JSON.stringify(val)}</p>
          ))
        }
      </PersonContext.Consumer>
    </div>
  );
};

export default Example2;
