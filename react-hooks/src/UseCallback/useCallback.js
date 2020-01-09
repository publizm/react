import React, { useState, useCallback } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(1);
  const [another, setAnother] = useState(1);

  const countUp = c => {
    setCount(c);
  };

  const countUp2 = c => {
    setAnother(c);
  };

  const seeResult = useCallback(() => {
    console.log('count', count, another);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={seeResult}>확인</button>
      <button onClick={() => countUp(count + 1)}>증가</button>
      <button onClick={() => countUp2(another + 1)}>증가</button>
    </div>
  );
};

export default UseCallback;
