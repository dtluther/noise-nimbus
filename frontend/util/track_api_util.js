export const indexTracks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tracks'
  });
};

export const createTrack = track => {
  return $.ajax({
    method: 'POST',
    url: '/api/tracks',
    contentType: false,
    processData: false,
    data: track
  });
};

export const showTrack = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/tracks/${id}`
  });
};

export const showTrackByTitle = title => {
  return $.ajax({
    method: 'GET',
    url: `/api/tracks/by_title/${title}`
  });
};

export const deleteTrack = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tracks/${id}`,
  });
};

export const updateTrack = track => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tracks/${track.id}`,
    data: { track }
  });
};
