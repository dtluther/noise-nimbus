import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import merge from 'lodash/merge';

const _nullComments = {
  commentIds: [],
  trackId: null
};

const commentsReducer = (oldState = _nullComments, action) {
  Object.freeze(oldState);
  let nextState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      nextState.commentIds = action.comments
  }
}
