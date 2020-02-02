export const ADD_TODO = 'ADD_TODO';

// 액션 생성자 함수
export const addTodo = text => ({
  type: ADD_TODO,
  text,
  createdAt: new Date().toISOString(),
});

export const COMPLETE_TODO = 'COMPLETE_TODO';

export const completeTodo = index => ({ type: COMPLETE_TODO, index });

export const START_LOADING = 'START_LOADING';

export const startLoading = () => ({ type: START_LOADING });

export const END_LOADING = 'END_LOADING';

export const endLoading = () => ({ type: END_LOADING });
