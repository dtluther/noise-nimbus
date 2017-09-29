import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrackPage from './track_page';
import { fetchTrackByTitle, deleteTrack } from '../../actions/track_actions';
import { selectTrack } from '../../actions/now_playing_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    tracks: state.entities.tracks,
    selectedTrack: state.entities.tracks.selectedTrack
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTrackByTitle: title => dispatch(fetchTrackByTitle(title)),
    deleteTrack: id => dispatch(deleteTrack(id)),
    selectTrack: (selectedTrack, tracks) => dispatch(selectTrack(selectedTrack, tracks))

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackPage));
