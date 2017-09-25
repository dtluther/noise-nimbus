import { RECEIVE_NEW_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
  switch(action.type) {
    case RECEIVE_NEW_USER:
      let nextState = merge({}, oldState);
      nextState[action.newUser.id] = action.newUser;

    default:
      return oldState;
  }
};

export default usersReducer;
