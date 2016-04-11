import * as types from '../constants/ActionTypes.js';

const initialState = [];

export default function places (state = initialState, action) {
  switch (action.type) {

  case types.UPDATE_PLACES:
    return state.concat(action.places);
  default:
    return state;
  }
}
