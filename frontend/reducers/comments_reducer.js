import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import merge from 'lodash/merge';

const _nullComments = {
  byIds: {},
  commentIds: []
};

const commentsReducer = (oldState = _nullComments, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      nextState.byIds = action.comments;
      nextState.commentIds = Object.keys(action.comments);
      return nextState;
    case RECEIVE_COMMENT:
      const commentId = action.comment.id;
      nextState.byIds[commentId] = action.comment;
      nextState.commentIds.push(commentId.toString());
      return nextState;
    case REMOVE_COMMENT:
      // debugger;
      const deletedId = action.comment.id;
      delete nextState.byIds[deletedId];
      const idIndex = nextState.commentIds.indexOf(deletedId.toString());
      nextState.commentIds.splice(idIndex, 1);
      return nextState;

    default:
      return oldState;
  }
};

export default commentsReducer;
