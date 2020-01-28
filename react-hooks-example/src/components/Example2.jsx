import React, { useState, useEffect } from 'react';

const Example2 = () => {
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // 현재 상태를 파라미터로 받아오면 의존성 배열에 넣어주지 않을 수 있다.
    // setCount(count => count + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Example2;
