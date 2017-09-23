import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

const receiveTrack = track => {
  return {
    type: RECEIVE_TRACK,
    track
  };
};

const receiveTrackErrors = trackErrors => {
  return {
    type: RECEIVE_TRACK_ERRORS,
    trackErrors
  };
};

export const fetchTracks = () => dispatch => {
  return TrackAPIUtil.indexTracks()
  .then(tracks => dispatch(receiveTracks(tracks)));
};

export const createTrack = track => dispatch => {
  return TrackAPIUtil.createTrack(track)
    .then(trackRes => dispatch(receiveTracks(trackRes)));
};

export const fetchTrack = id => dispatch => {
  return TrackAPIUtil.showTrack(id)
    .then(trackRes => dispatch(receiveTrack(trackRes)));
};

export const updateTrack = track => dispatch => {
  return TrackAPIUtil.updateTrack(track.id)
    .then(trackRes => dispatch(receiveTrack(trackRes)));
};

export const deleteTrack = id => dispatch => {
  return TrackAPIUtil.deleteTrack(id)
    .then(() => dispatch(receiveTrack(null)));
};
