import { connect } from 'react-redux';
import Welcome from './welcome';
import { login, logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    // currentUser: state.session.currentUser
    state: state
  };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
