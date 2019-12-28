import React, { useState, useMemo } from 'react';

export default function Usememo() {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ['react', 'node.js', 'web'];
  const word = words[wordIndex];

  // 복잡한 연산이 있는 것을 useMemo로 써준다.
  const computeLetterCount = word => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };

  // setCount는 computeLetterCount와 연관이 없지만 computeLetterCount에 useMemo를 안 걸어주게되면 한가지 상태가 바뀌어도
  // 전체적으로 렌더링이 되어 실행되기때문에 setCount만 변화가 되어도 전체 컴포넌트의 상태가 렌더링 되어 딜레이가 발생한다.
  const letterCount = useMemo(() => computeLetterCount(word), [word]);
  // const letterCount = computeLetterCount(word);
  return (
    <>
      {letterCount}
      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        단어 카운트
      </button>
      {count}
      <button onClick={() => setCount(count + 1)}>다른 변수 값</button>
    </>
  );
}
