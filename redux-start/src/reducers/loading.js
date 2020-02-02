import { START_LOADING } from '../actions';

const initialState = false;

export function loading(state = initialState, action) {
  if (action.type === START_LOADING) {
    return true;
  }
  return state;
}
