import { connect } from 'react-redux';
import TrackIndexItem from './track_index';

const MapStateToProps = state => {
  return {
    nowPlaying: state.nowPlaying
  };
};
