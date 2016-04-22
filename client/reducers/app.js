import * as types from '../constants/ActionTypes.js';

const initialState = [];

export default function places (state = initialState, action) {
  switch (action.type) {
  case types.CHANGE_TAB:
    return action.value;
  default:
    return state;
  }
}
