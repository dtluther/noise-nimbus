import {
  // PLAY_SONG,
  // PAUSE_SONG,
  PLAY_PAUSE_SONG,
  STEP_FORWARD,
  STEP_BACKWARD,
  SELECT_TRACK,
  RESET_TRACK_WAS_SELECTED
} from '../actions/now_playing_actions';

const _nullNowPlaying = {
  currentTrack: null,
  isPlaying: false,
  trackQueue: [],
  trackWasSelected: false
};

const nowPlayingReducer = (oldState = _nullNowPlaying, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  const currentTrack = oldState.currentTrack;
  const currentTrackIndex = oldState.trackQueue.indexOf(currentTrack);
  switch(action.type) {
    case SELECT_TRACK:
      const queue = Object.values(action.tracks.byIds);
      nextState.trackQueue = queue;
      nextState.currentTrack = action.selectedTrack;
      nextState.isPlaying = true;
      nextState.trackWasSelected = true;
      return nextState;
    // case PLAY_PAUSE_SONG:
    //   nextState.isPlaying = !nextState.isPlaying;
    //   return nextState;
    case RESET_TRACK_WAS_SELECTED:
      nextState.trackWasSelected = false;
      return nextState;
    case STEP_BACKWARD:
      if (currentTrackIndex > 0) {
        nextState.currentTrack = oldState.trackQueue[currentTrackIndex - 1];
        nextState.isPlaying = true;
      }
      return nextState;
    case STEP_FORWARD:
      if (currentTrackIndex < (nextState.trackQueue.length - 1)) {
        nextState.currentTrack = oldState.trackQueue[currentTrackIndex + 1];
        nextState.isPlaying = true;
      }
      return nextState;
    default:
      const oldStateSameTrack = Object.assign({}, oldState);
      oldStateSameTrack.trackWasSelected = false;
      return oldStateSameTrack;
  }

};

export default nowPlayingReducer;
