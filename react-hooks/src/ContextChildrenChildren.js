import React, { useContext } from 'react';
import { CounterDispatch } from './AppContext';

const ContextChildrenChildren = () => {
  const dispatch = useContext(CounterDispatch);
  return (
    <>
      손자
      <br />
      <button
        onClick={() => {
          dispatch({ type: 'INCREAMENT' });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREAMENT' });
        }}
      >
        -
      </button>
    </>
  );
};

export default ContextChildrenChildren;
