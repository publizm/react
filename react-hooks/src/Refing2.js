import React, { useRef } from 'react';

export default function Refing2() {
  const input = useRef();

  const focusInput = () => {
    input.current.focus();
  };
  return (
    <>
      {'Refing2'}
      <input ref={input} type="text" />
      <button onClick={focusInput}>focus Input</button>
    </>
  );
}
