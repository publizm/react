import React, { useState, memo, useEffect, useCallback } from 'react';

const Button = memo(({ onClick, count }) => {
  console.log(count);
  return (
    <button count={count} onClick={onClick}>
      버튼
    </button>
  );
});

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 함수가 실행될 때마다 새로운 참조를 Button 컴포넌트의 props로 전달된다.
  // const increment1 = () => setCount1(count1 + 1);
  // const increment2 = () => setCount2(prev => prev + 1);

  // 레퍼런스가 메모리상에서 실행될때 마다 바뀌어 항상 새로운 함수로 인식하는 문제가 있다.
  // 함수를 다른 컴포넌트에 props로 넘겨줄때 useCallBack을 사용해준다.
  const increment1 = useCallback(() => setCount1(prev => prev + 1), []);
  const increment2 = useCallback(() => setCount2(prev => prev + 1), []);

  // 상태가 바뀌게되면 훅이랑 관련된 컴포넌트들 전체가 렌더링이 다시 되기때문에 console.log가 2번씩 나오게 된다.
  return (
    <>
      <Button count={count1} onClick={increment1} />
      <Button count={count2} onClick={increment2} />
    </>
  );
}

export default App;
