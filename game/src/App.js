import React, { useState, useEffect } from 'react';

const App = () => {
  const [myPick, setMyPick] = useState('');
  const [computerPick, setComputerPick] = useState('');
  const [whoWins, setWins] = useState('');

  const runGame = value => {
    const items = ['가위', '바위', '보'];
    const randomIdx = Math.floor(Math.random() * items.length);
    setMyPick(value);
    setComputerPick(items[randomIdx]);
  };

  useEffect(() => {
    if (myPick === '가위') {
      if (computerPick === '가위') setWins('무승부');
      if (computerPick === '바위') setWins('컴퓨터 승리');
      if (computerPick === '보') setWins('유저 승리');
    } else if (myPick === '바위') {
      if (computerPick === '가위') setWins('유저 승리');
      if (computerPick === '바위') setWins('무승부');
      if (computerPick === '보') setWins('컴퓨터 승리');
    } else if (myPick === '보') {
      if (computerPick === '가위') setWins('컴퓨터 승리');
      if (computerPick === '바위') setWins('유저 승리');
      if (computerPick === '보') setWins('무승부');
    }
  }, [myPick, computerPick]);

  return (
    <div>
      {whoWins}
      <button onClick={() => runGame('가위')}>가위</button>
      <button onClick={() => runGame('바위')}>바위</button>
      <button onClick={() => runGame('보')}>보</button>
    </div>
  );
};

export default App;
