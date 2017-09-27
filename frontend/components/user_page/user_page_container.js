import { connect } from 'react-redux';
import UserPage from './user_page';
import { fetchUser } from '../../actions/user_actions';
import { selectTrack } from '../../actions/now_playing_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    users: state.entities.users,
    tracks: state.entities.tracks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: username => dispatch(fetchUser(username)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
