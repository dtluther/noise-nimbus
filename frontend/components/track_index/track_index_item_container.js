import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item';
import {
  selectTrack,
  playPauseSong,
  stepBackward,
  stepForward
} from '../../actions/now_playing_actions';

const mapStateToProps = state => {
  return {
    nowPlaying: state.nowPlaying,
    // tracks: state.entities.tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectTrack: (selectedTrack, tracks) => dispatch(selectTrack(selectedTrack, tracks)),
    playPauseSong: () => dispatch(playPauseSong()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndexItem);
