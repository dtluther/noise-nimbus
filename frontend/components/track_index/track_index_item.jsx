import React from 'react';

export function TrackIndexItem({ selectedUser, track }) {
  console.log('track index item selectedUser:', selectedUser, 'track index item track:', track);
  return(
    <li>
      <div className="selected-profile-pic">
        <img src={selectedUser.image_url} width="150px" height="150px" />
      </div>
      <div className="track-details">
        <h2>{track.username}</h2>
        <h2>{track.title}</h2>

      </div>
    </li>
  );
}
