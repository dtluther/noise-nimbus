import merge from 'lodash/merge';
import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK
} from '../actions/track_actions';

const _nullTracks = {
  byIds: {},
  ids: [],
  selectedTrack: {}
};

const tracksReducer = (oldState = _nullTracks, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_TRACKS:
      nextState.byIds = action.tracks;
      nextState.ids = Object.keys(action.tracks);
      return nextState;
    case RECEIVE_TRACK:
      nextState.selectedTrack = action.track;
      return nextState;
    case REMOVE_TRACK:
      const trackId = Object.keys(action.track)[0];
      delete nextState.byIds[trackId];
      return nextState;

    default:
      return oldState;
  }
};

export default tracksReducer;
