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

const usersReducer = (oldState = _nullUsers, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      nextState.byIds = action.users;
      nextState.ids = Object.keys(action.users);
      return nextState;
    case RECEIVE_USER:
      nextState.selectedUser['id'] = action.user.id;
      nextState.selectedUser['username'] = action.user.username;
      nextState.selectedUser['first_name'] = action.user.first_name;
      nextState.selectedUser['username'] = action.user.username;
      nextState.selectedUser['image_url'] = action.user.image_url;
      if (action.user.tracks) {
        nextState.selectedUser['trackIds'] = Object.keys(action.user.tracks);
      } else {
        nextState.selectedUser['trackIds'] = [];
      }
      return nextState;
    default:
      return oldState;
  }
};

export default usersReducer;
