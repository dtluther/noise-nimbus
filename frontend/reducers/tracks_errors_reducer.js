import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  RECEIVE_TRACK_ERRORS
} from '../actions/track_actions';

const _nullErrors = {
  tracks: []
};

const tracksErrorsReducer = (oldState = _nullErrors, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_TRACK_ERRORS:
      return action.trackErrors;
    case RECEIVE_TRACKS:
      return [];
    case RECEIVE_TRACK:
      return [];

    default:
      return oldState;
  }
};

export default tracksErrorsReducer;
