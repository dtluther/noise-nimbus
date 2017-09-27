import merge from 'lodash/merge';
import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK
} from '../actions/track_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { SELECT_TRACK } from '../actions/now_playing_actions';

const _nullTracks = {
  byIds: {},
  ids: [],
  selectedTrack: {},
  playingTrack: {}
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
    case RECEIVE_USER:
      nextState.byIds = action.user.tracks;
      if (action.user.tracks) {
        nextState.ids = Object.keys(action.user.tracks);
      } else {
        nextState.ids = [];
      }
      return nextState;
    case SELECT_TRACK:
      nextState.playingTrack = action.selectedTrack;
      return nextState;

    default:
      return oldState;
  }
};

export default tracksReducer;
