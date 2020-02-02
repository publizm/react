import { ADD_TODO, COMPLETE_TODO, START_LOADING } from './actions';

const initialState = {
  todos: [],
};
// 여러개의 스토어를 만들면 안되므로 여러개의 reducer를 하나로 합치는 작업
export function reducer(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return [
      ...state,
      todos: [
        ...state.todos,
        { text: action.text, done: false, createdAt: action.createdAt },
      ]
    ];
  } else if (action.type === COMPLETE_TODO) {
    const newTodos = [...state.todos];

    for (let i = 0; i < newTodos.length; i++) {
      if (i === action.index) {
        newTodos[i] = {
          ...newTodos[i],
          done: true,
        };
      }
    }

    return {
      ...state,
      todos: newTodos
    }
  } else if (action.type === START_LOADING) {
    return {
      ...state,
      loading: true
    }
  }
  return state;
}

// useReducer는 사용할때 initial state를 넣어주는데
// 리덕스는 redux를 만들면서 선언해주는 차이점이 있다.
// const initialState = [];

// 이전의 state를 파라미터로 가지고 온다
// export function todos(state = initialState, action) {
// if (state === undefind) {
//   최초 값을 설정
//   return [];
// }

// if (action.type === ADD_TODO) {
// 이때 new Date를 만들면 비순수함수가 되므로, action에서 부터 만들어주어야한다.
// return [
//   ...state,
// { text: action.text, done: false, createdAt: new Date().toIOSString() },
//       { text: action.text, done: false, createdAt: action.createdAt },
//     ];
//   } else if (action.type === COMPLETE_TODO) {
//     const newState = [...state];
//     for (let i = 0; i < newState.length; i++) {
//       if (i === action.index) {
//         newState[i] = {
//           ...newState[i],
//           done: true,
//         };
//       }
//     }
//   }
//   return state;
// }
