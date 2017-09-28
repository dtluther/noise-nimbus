import { connect } from 'react-redux';
import CommentsForm from './comments_form';
import { withRouter } from 'react-router-dom';
import { fetchComments, postComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = state => {
  console.log('state in comments form container', state);
  return {
    comments: state.entities.comments,
    currentUser: state.session.currentUser,
    selectedTrack: state.entities.tracks.selectedTrack
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: trackId => dispatch(fetchComments(trackId)),
    postComment: comment => dispatch(postComment(comment)),
    deleteComment: commentId => dispatch(postComment(commentId))

  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsForm));
