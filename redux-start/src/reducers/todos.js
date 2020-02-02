import { ADD_TODO, COMPLETE_TODO, START_LOADING } from '../actions';

const initialState = [];

export function todos(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return [
      ...state,
      { text: action.text, done: false, createdAt: action.createdAt },
    ];
  } else if (action.type === COMPLETE_TODO) {
    const newTodos = [...state];

    newTodos[action.index] = {
      ...newTodos[action.index],
      done: true,
    };

    return newTodos;
  }
  return state;
}
