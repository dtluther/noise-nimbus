import React from 'react';

// ATTRIBUTION TO https://pixabay.com/ for wave form
// ATTRIBUTION TO http://resizeyourimage.com/EN/ for image size



export function TrackIndexItem({ selectedUser, track }) {
  // const playPauseButton = this.props.nowPlaying === false ?
  //   (<i className="fa fa-play-circle fa-3x" aria-hidden="true"></i>) :
  //   (<i class="fa fa-pause-circle" aria-hidden="true"></i>);
  console.log('track index item selectedUser:', selectedUser, 'track index item track:', track);
  const profileImage = selectedUser ?
    (<img src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/person-solid.png" width="150px" height="150px" />) :
    (<img src={selectedUser.image_url} width="150px" height="150px" />);
  return(
    <li key="test123">
      <div className="selected-profile-pic">
        {profileImage}
      </div>
      <div className="track-controls">
        <div className="play-button">
          <i className="fa fa-play-circle fa-3x" aria-hidden="true"></i>
        </div>
        <div className="track-details">
          <h2 className="user-track-artist">{track.username}</h2>
          <h2 className="user-track-title">{track.title}</h2>
          <img className="waveform" src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/default-wave-form.png" />
        </div>
      </div>
    </li>
  );
}
