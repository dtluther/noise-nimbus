import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const POST_COMMENT = 'POST_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

const receiveComment = comment => {
  return {
    type: POST_COMMENT,
    comment
  };
};

const removeComment = comment => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};

export const fetchComments = trackId => dispatch => {
  return (
    CommentAPIUtil.fetchComments(trackId)
      .then(comments => dispatch(receiveComments(comments)))
  );
};

export const postComment = comment => dispatch => {
  return (
    CommentAPIUtil.postComment(comment)
      .then(commentRes => dispatch(receiveComment(commentRes)))
  );
};

export const deleteComment = id => dispatch => {
  return (
    CommentAPIUtil.deleteComment(id)
      .then(commentRes => dispatch(removeComment(commentRes)))
  );
};
