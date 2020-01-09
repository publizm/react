import React, { useEffect } from 'react';

let count = 0;

const Sub = () => {
  useEffect(() => {
    // 렌더링 이후에 실행된다.
    count += 1; // state변수가 아니기 때문에 카운트가 올라가도 리렌더링 되지 않는다
    // 하지만 실제 값은 첫 화면에는 부모 컴포넌트에서 함수를 통해서, import를 통해 두번 호출되어
    // count가 2되어 있고 그 다음 증가를 눌러 상태가 변화가 된다면
    // useEffect가 실행되어 1 + 1 이 되어
    // 한번에 2개가 올라가는 것 처럼 보인다.
  });
  // 상위 컴포넌트가 상태변화가 이루어져서 state가 변했을때
  // 계속 리렌더링되어 해당 컴포넌트에서의 카운트 올리는 함수가 없음에도 리렌더링되면서 올라간다.
  return <>Sub: {count}</>;
};

export default Sub;
