import React, { useState, useReducer, useContext } from 'react';
import ContextChildren from './ContextChildren';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREAMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREAMENT':
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export const CounterDispatch = React.createContext(null);

const AppContext = props => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  // const onIncreament = () => dispatch({ type: 'INCREAMENT' });
  // const onDecreament = () => dispatch({ type: 'DECREAMENT' });
  return (
    <CounterDispatch.Provider value={dispatch}>
      {state.count}
      <br />
      <br />
      <ContextChildren
      // onIncreament={onIncreament}
      // onDecreament={onDecreament}
      />
    </CounterDispatch.Provider>
  );
};

export default AppContext;
