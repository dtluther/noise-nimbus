import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrackPage from './track_page';
import { fetchTrack, deleteTrack } from '../../actions/track_actions';

const mapStateToProps = state => {
  console.log('state in track page container', state);
  return {
    currentUser: state.session.currentUser,
    tracks: state.entities.tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTrack: id => dispatch(fetchTrack(id)),
    deleteTrack: id => dispatch(deleteTrack(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackPage));
