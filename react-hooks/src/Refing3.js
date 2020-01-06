import React, { useState, useRef, createRef } from 'react';

// useRef와 createRef의 current의 차이
export default function Refing3() {
  const [renderIndex, setRenderIndex] = useState(1);
  const refFromUseRef = useRef();
  const refFromCreateRef = createRef();

  if (!refFromUseRef.current) {
    refFromUseRef.current = renderIndex;
  }

  if (!refFromCreateRef.current) {
    refFromCreateRef.current = renderIndex;
  }

  return (
    <>
      {'useRef와 createRef의 current의 차이'}
      <p>Current render index: {renderIndex}</p>
      <p>refFromUseRef: {refFromUseRef.current}</p>
      <p>refFromCreateRef: {refFromCreateRef.current}</p>
      <button onClick={() => setRenderIndex(prev => prev + 1)}>re-render</button>
    </>
  );
}
