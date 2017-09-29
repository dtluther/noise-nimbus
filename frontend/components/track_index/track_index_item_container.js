import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item';
import { updateTrack, deleteTrack } from '../../actions/track_actions';
import {
  selectTrack,
  playPauseSong,
  stepBackward,
  stepForward
} from '../../actions/now_playing_actions';

const mapStateToProps = state => {
  return {
    nowPlaying: state.nowPlaying,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectTrack: (selectedTrack, tracks) => dispatch(selectTrack(selectedTrack, tracks)),
    playPauseSong: () => dispatch(playPauseSong()),
    updateTrack: track => dispatch(updateTrack(track)),
    deleteTrack: trackId => dispatch(deleteTrack(trackId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndexItem);
