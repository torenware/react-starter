import { combineReducers } from 'redux';
import { TOGGLE_LOGIN } from '../actions';

const defaultState = { authed: false };
const reduceLogin = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return {authed: !state.authed};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  loggedIn: reduceLogin
});

export default rootReducer;
