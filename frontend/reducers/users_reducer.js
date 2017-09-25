import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;

    default:
      return oldState;
  }
};

export default usersReducer;
