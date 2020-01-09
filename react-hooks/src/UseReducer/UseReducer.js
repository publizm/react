import React from 'react';
import { useHistory } from './hooks';
import './style.scss';

const UseReducer = () => {
  const { state, set, undo, redo, clear, canUndo, canRedo } = useHistory({});
  return (
    <>
      <div className="container">
        <div className="controls">
          <button onClick={undo} disabled={!canUndo}>
            Undo
          </button>
          <button onClick={redo} disabled={!canRedo}>
            Redo
          </button>
        </div>
        <div className="grid">
          {((blocks, idx, length) => {
            // map을 쓰려면 초기에 배열이 있어야되는데 없기 때문에 while로 전달을 함
            while (++idx <= length) {
              const index = idx;
              blocks.push(
                <div
                  key={idx}
                  className={'block' + (state[index] ? ' active' : '')}
                  onClick={() => set({ ...state, [index]: !state[index] })}
                />,
              );
            }
            return blocks;
          })([], 0, 100)}
        </div>
      </div>
    </>
  );
};

export default UseReducer;
