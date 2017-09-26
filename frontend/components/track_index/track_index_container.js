import { connect } from 'react-redux';
import { TrackIndexItem } from './track_index_item';

const MapStateToProps = state => {
  return {
    nowPlaying: state.nowPlaying
  };
};

const mapDispatchToProps = dispatch => {

};

export default connect(
  MapStateToProps,
  null
)(TrackIndexItem);
