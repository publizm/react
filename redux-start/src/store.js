import { createStore } from 'redux';
import { reducer } from './reducers';

// todos 리듀서의 스토어를 만들음
const store = createStore(reducer);

export default store;
