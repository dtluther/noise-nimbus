import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

const receiveUserErrors = userErrors => {
  return {
    type: RECEIVE_USER_ERRORS,
    userErrors
  };
};

export const fetchAllUsers = () => dispatch => {
  return (
    UserAPIUtil.fetchAllUsers()
      .then(users => dispatch(receiveAllUsers(users)),
            err => dispatch(receiveUserErrors(err)))
  );
};

export const fetchUser = username => dispatch => {
  debugger;
  return (
    UserAPIUtil.fetchUser(username)
      .then(user => dispatch(receiveUser(user)),
            err => dispatch(receiveUserErrors(err)))
  );
};
