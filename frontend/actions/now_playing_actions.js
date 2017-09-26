export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const STEP_FORWARD = 'STEP_FORWARD';
export const STEP_BACKWARD = 'STEP_BACKWARD';


export const playSong = () => {
  return {
    type: PLAY_SONG
  };
};

export const pausSong = () => {
  return {
    type: PAUSE_SONG
  };
};

export const stepForward = () => {
  return {
    type: STEP_FORWARD
  };
};

export const stepBackward = () => {
  return {
    type: STEP_BACKWARD
  };
};
