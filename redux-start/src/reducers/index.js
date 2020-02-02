import { todos } from './todos';
import { loading } from './loading';
import { combineReducers } from 'redux';

// combineReducer를 따로 사용안한 로직
//  {}는 undefined가 나오지 않기 하기위한 꼼수
// 이때는 initialState를 함수로 설정해야되기때문에 어쩔수 없다.
// export const reducer = (state = {}, action) => ({
//   todos: todos(state.todos, action),
//   loading: loading(state.loading, action),
// });

export const reducer = combineReducers({
  todos,
  loading,
});
