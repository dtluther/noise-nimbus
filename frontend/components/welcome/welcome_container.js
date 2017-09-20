import { connect } from 'react-redux';
import Welcome from './welcome';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  console.log(state);
  return ({
  currentUser: state.session.currentUser
});};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
