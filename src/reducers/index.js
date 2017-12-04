import { combineReducers } from 'redux';
import { TOGGLE_LOGIN } from '../actions';

const reduceLogin = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return !state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  loggedIn: reduceLogin
});

export default rootReducer;
