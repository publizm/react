import React, { useState, useEffect, useRef } from 'react';
import { isEqual } from 'lodash';
function Test() {
  console.log('in App');
  const [user, setUser] = useState({ name: 'react', count: 1 });
  const prevUser = usePrev(user);
  console.log(`prevUser.count set to ${prevUser ? prevUser.count : prevUser}`);
  console.log('rendering DOM');
  useEffect(() => {
    console.log('useEffect - App');
    console.log(
      `prevUser.count: ${prevUser ? prevUser.count : prevUser} | user.count: ${user.count}`,
    );
    if (!isEqual(prevUser, user)) {
      console.log('prevUser.count is not equal to user.count');
    }
  });
  const randomUpdate = () => {
    console.log('Button Clicked');
    const count = Math.random() >= 0.5 ? user.count : user.count + 1;
    setUser(user => {
      const newState = { ...user, count: user.count + 1 };
      console.log(`user.count set to ${newState.count}`);
      return newState;
    });
  };
  return (
    <>
      <div>Count: {user.count}</div>
      <button onClick={randomUpdate}>Random Update</button>
    </>
  );
}
// custom hook
function usePrev(value) {
  console.log('in usePrev');
  const ref = useRef(); // 최초 1회만 생성
  console.log(`ref.current: ${ref.current ? ref.current.count : ref.current}`);
  useEffect(() => {
    // TODO: 렌더링 이후에 실행
    console.log('useEffect - usePrev');
    ref.current = value;
    console.log(`ref.current.count set to ${ref.current.count}`);
  });
  console.log(`returning ref.current: ${ref.current ? ref.current.count : ref.current}`);
  return ref.current;
}
export default Test;
