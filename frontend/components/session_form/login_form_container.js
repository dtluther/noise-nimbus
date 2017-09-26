import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: 'login'
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
