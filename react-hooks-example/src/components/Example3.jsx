import React, { useState, useEffect } from 'react';

// state를 하나로 합치는 방법
const Example3 = () => {
  const [state, setState] = useState({
    count: 0,
  });

  const click = () => {
    setState(state => ({
      count: state.count + 1,
    }));
  };

  useEffect(() => {
    // 현재 상태를 파라미터로 받아오면 의존성 배열에 넣어주지 않을 수 있다.
    // setCount(count => count + 1);
  }, []);

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Example3;
