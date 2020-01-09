import React, { useState, useEffect, useMemo } from 'react';
import Sub from './Sub';

const UseMemo = () => {
  const [count, setCount] = useState(1);

  const up = () => setCount(prev => prev + 1);

  const memoizedSub = useMemo(() => {
    // 한번만 Sub를 렌더링 시킴
    return <Sub />;
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={up}>증가</button>
      <Sub />
      <br />
      {memoizedSub}
    </div>
  );
};

export default UseMemo;
