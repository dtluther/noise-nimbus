import {
  PLAY_SONG,
  PAUSE_SONG,
  STEP_FORWARD,
  STEP_BACKWARD
} from '../../reducers/nowPlayingReducer';

const _nullNowPlaying = {
  currentTrack: null,
  isPlaying: false,
  trackQueue: []

}

const nowPlayingReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch(action.type) {
    case PLAY_SONG:
      nextState
  }
};
