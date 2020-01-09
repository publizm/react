import React, { useState, useRef, useEffect } from 'react';
import { isEqual } from 'lodash';

// prev값을 기억하기위한 커스텀 훅
const usePrev = value => {
  console.log('usePrev!');
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

// 상태변수를 참조하는 방법

// state가 업데이트되서 다시 실행 될때는 return문이 다시실행되는 것이 아니라, 컴포넌트 내 함수 전체가 다시 실행된다.

export default function Refing4() {
  // 일반적으로 렌더링이 재실행될때 useState와 같은 훅들은 기존의 값들을 다시 사용한다(기존의 값을 유지를 한다.). 새로 작성하는 것이 아니다.

  const [user, setUser] = useState({ name: 'react', count: 1 });
  const prevUser = usePrev(user);

  useEffect(() => {
    console.log('useEffect!');
    // user라는 상태가 업데이트 됬을때만 실행
    // count가 변할때만 console.log가 실행되야하는 로직인데, 매번 실행된다
    // console.log('updated');
    // 의존성 배열을 검사할때 리액트는 얕은 검사를 하기 때문에 얕은 검사에 의해 변화가 생기면 실행을 시킨다, 하지만 return문안의 값을 검사할때는 참조값까지 검사하는 깊은 검사를 하는데 이것 때문에 나오는 문제가 useCall이 나오는 것이다.
    // 하지만 user는 현재 객체이기 때문에 얕은 검사시 참조값만 검사를 하기 때문에 객체이거나 함수일때 항상 변하는 값이 된다.

    // 깊은 검사를 하기위해 lodash의 isEqual를 활용
    // 이제 의존성 배열을 믿지 않고 isEqual으로 해결한다.
    // 비교를 하기 위해서는 이전 상태를 알 수 있어야한다.
    // 이전 상태를 가져오기 위해서는 useRef의 current를 활용한다.
    // const prevUser = prevUserRef.current; // 다시 실행될때 업데이트가 된다
    // loadash isEqual은 참조는 비교하지않음, 단 실제 객체 값만을 비교
    if (!isEqual(prevUser, user)) {
      // Deep comparison
      console.log('updated');
    }
  });

  // prevUserRef를 초기화
  // 객체를 보관해주는 상자역할을 수행
  // 새로 렌더링되면서 기존의 값을 prevUserRef.current의 값으로 할당
  // current의 라이프사이클이 바뀌어도 값이 유지된다는 점을 이용
  // useEffect는 순차적으로 실행되기 때문에 isEqual로 체크한 이후에 이전 값을 넣어줘서 사용, 모든 react hook 메소드는 순차적으로 진행된다.
  // const prevUserRef = useRef();
  // useEffect(() => {
  //   prevUserRef.current = user;
  // });

  // 깊은 검사말고 간단한 해결책
  // 객체를 검사하는게 아니라, 객체의 요소를 검사하면 된다
  // useEffect(() => {
  //   console.log('updated');
  // }, [user.count]);

  const randomUpdate = () => {
    // 2분의 1 확률로 user.count를 유지하거나 +1 하는 로직
    // 한마디로 항상 업데이트를 하지 못하게 함
    const count = Math.random() >= 0.5 ? user.count : user.count + 1;
    setUser(user => ({ ...user, count })); // 새로운 객체를 반환하여 참조값이 달라져서 얕은 검사에서 문제가 되는 것이다.
  };

  return (
    <>
      <p>Count: {user.count}</p>
      <button onClick={randomUpdate}></button>
    </>
  );
}
