import React, { useState, useEffect, useRef, useReducer } from 'react';

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        history: !state.history ? [action.prevHistory] : [action.prevHistory, ...state.history],
      };

    default:
      break;
  }
};

const App = () => {
  const [myPick, setMyPick] = useState('');
  const [computerPick, setComputerPick] = useState('');
  const [wins, setWins] = useState('');
  const [computerWins, setComputerWins] = useState(0);
  const [userWins, setUserWins] = useState(0);
  const [state, dispatch] = useReducer(reducer, []);

  const select = useRef();

  const runGame = () => {
    const value = select.current.value;
    const items = ['가위', '바위', '보'];
    const randomIdx = Math.floor(Math.random() * items.length);
    setMyPick(value);
    setComputerPick(items[randomIdx]);
  };

  useEffect(() => {
    let wins = '';
    if (myPick === '가위') {
      if (computerPick === '가위') wins = '무승부';
      if (computerPick === '바위') wins = '컴퓨터 승리';
      if (computerPick === '보') wins = '유저 승리';
    } else if (myPick === '바위') {
      if (computerPick === '가위') wins = '유저 승리';
      if (computerPick === '바위') wins = '무승부';
      if (computerPick === '보') wins = '컴퓨터 승리';
    } else if (myPick === '보') {
      if (computerPick === '가위') wins = '컴퓨터 승리';
      if (computerPick === '바위') wins = '유저 승리';
      if (computerPick === '보') wins = '무승부';
    }

    if (wins) {
      setWins(wins);
      dispatch({ type: 'ADD', prevHistory: `${wins} - 컴퓨터: ${computerPick}, 유저: ${myPick}` });

      if (wins === '컴퓨터 승리') {
        setComputerWins(computerWins + 1);
      } else if (wins === '유저 승리') {
        setUserWins(userWins + 1);
      }
    }
  }, [myPick, computerPick]);

  const { history } = state;
  return (
    <div>
      <h2>{wins}</h2>
      <h3>
        유저 승리 횟수 : {userWins} vs 컴퓨터 승리 횟수 : {computerWins}
      </h3>

      <select ref={select} onChange={runGame}>
        <option value="가위">가위</option>
        <option value="바위">바위</option>
        <option value="보">보</option>
      </select>
      {history && history.map((content, index) => <h2 key={index}>{content}</h2>)}
    </div>
  );
};

export default App;
