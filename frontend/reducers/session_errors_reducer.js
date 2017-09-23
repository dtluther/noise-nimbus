import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

const _nullErrors = {
  session: []
};

const sessionErrorsReducer = (oldState = _nullErrors, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.sessionErrors;
    case RECEIVE_CURRENT_USER:
      return [];

    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
