import {
  RECEIVE_ALL_USERS,
  RECEIVE_USER
} from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUsers = {
  byIds: {},
  ids: [],
  selectedUser: {}
};

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      nextState.byIds = action.users;
      nextState.ids = Object.keys(action.users);
      return nextState;
    case RECEIVE_USER:
      nextState.selectedUser = action.user;
      return nextState;

    default:
      return oldState;
  }
};

export default usersReducer;
