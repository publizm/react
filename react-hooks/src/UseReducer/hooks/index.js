import { useReducer, useCallback } from 'react';

// past 과거, present 현재, future 미래
// 미래의 요소는 과거로 돌아갔을때 다시 돌아와야되므로 future를 따로 만들어줌
// 커스텀 훅의 초기 상태
const initialState = {
  past: [],
  present: null,
  future: [],
};

const reducer = (state, action) => {
  const { past, present, future } = state;

  switch (action.type) {
    case 'UNDO':
      console.log('UNDO past', past);
      console.log('UNDO present', present);
      console.log('UNDO future', future);
      const previous = past[past.length - 1];
      // 가까운 과거 slice는 배열을 얕은 복사하여 리턴, 원본배열 변화 x
      const newPast = past.slice(0, past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      };

    case 'SET':
      const { newPresent } = action;
      console.log('SET past', past);
      console.log('SET present', present);
      console.log('SET future', future);

      if (newPresent === present) return state;

      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };

    case 'REDO':
      const next = future[0];
      const newFuture = future.slice(1);
      console.log('REDO past', past);
      console.log('REDO present', present);
      console.log('REDO future', future);

      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      };

    default:
      break;
  }
};

export const useHistory = initialPresent => {
  // useUndo가 실행될때 보내주는 파라미터를 따로 할당해주기 위해 initialPresent 사용

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    present: initialPresent,
  });
  // reducer 별도로 구현해야되는 로직
  // initialState 초기 값

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;
  console.log('canUndo: ', canUndo);
  console.log('canRedo: ', canRedo);
  const set = useCallback(
    newPresent => {
      dispatch({ type: 'SET', newPresent });
    },
    [dispatch],
  );

  const undo = useCallback(() => {
    if (canUndo) {
      dispatch({ type: 'UNDO' });
    }
  }, [canUndo, dispatch]);

  const redo = useCallback(() => {
    console.log('redo!!', canRedo);
    if (canRedo) {
      dispatch({ type: 'REDO' });
    }
  }, [canRedo, dispatch]);

  return { state: state.present, set, undo, redo, canUndo, canRedo };
};
