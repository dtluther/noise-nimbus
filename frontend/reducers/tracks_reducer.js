import merge from 'lodash/merge';
import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK
} from '../actions/track_actions';


const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      nextState[action.track.id] = action.track;
      return nextState;
    case REMOVE_TRACK:
      delete nextState[action.track.id];
      return nextState;

    default:
      return oldState;
  }
};

export default tracksReducer;
