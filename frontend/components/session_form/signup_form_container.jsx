import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: 'signup'
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
