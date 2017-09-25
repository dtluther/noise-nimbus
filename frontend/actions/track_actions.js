import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';
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

const removeTrack = track => ({
  type: REMOVE_TRACK,
  track
});

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
    .then(trackRes => dispatch(receiveTrack(trackRes)),
          err => dispatch(receiveTrackErrors(err.responseJSON)));
};

export const fetchTrack = id => dispatch => {
  return TrackAPIUtil.showTrack(id)
    .then(trackRes => dispatch(receiveTrack(trackRes)),
          err => dispatch(receiveTrackErrors(err.responseJSON)));
};

export const fetchTrackByTitle = title => dispatch => {
  return TrackAPIUtil.showTrackByTitle(title)
    .then(trackRes => dispatch(receiveTrack(trackRes)),
          err => dispatch(receiveTrackErrors(err.responseJSON)));
};

export const updateTrack = track => dispatch => {
  return TrackAPIUtil.updateTrack(track)
    .then(trackRes => dispatch(receiveTrack(trackRes)),
          err => dispatch(receiveTrackErrors(err.responseJSON)));
};

export const deleteTrack = id => dispatch => {
  return TrackAPIUtil.deleteTrack(id)
    .then(track => dispatch(removeTrack(track)),
          err => dispatch(receiveTrackErrors(err.responseJSON)));
};
