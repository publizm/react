import React, { createRef } from 'react';

export default function Refing() {
  const input = createRef();

  const focusInput = () => {
    input.current.focus();
  };
  return (
    <>
      <input ref={input} type="text" />
      <button onClick={focusInput}>focus Input</button>
    </>
  );
}
