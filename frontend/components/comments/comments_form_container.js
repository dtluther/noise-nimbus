import { connect } from 'react-redux';
import CommentsForm from './comments_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {

};


export default withRouter(connect(
  mapStateToProps,
  null
)(CommentsForm));
