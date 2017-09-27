import React from 'react';

// ATTRIBUTION TO https://pixabay.com/ for wave form
// ATTRIBUTION TO http://resizeyourimage.com/EN/ for image size


class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectedUser = this.props.selectedUser;
    this.track = this.props.track;

    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  handlePlayPause(e) {
    e.preventDefault();
    this.props.selectTrack(this.track, this.props.tracks);
    // debugger;
    // this.props.playPauseSong();
  }

  render() {
    // console.log('track index item props:', this.props);
    // console.log('props in track index item', this.props);
    // const playPauseButton = this.props.nowPlaying === false ?
    //   (<i className="fa fa-play-circle fa-3x" aria-hidden="true"></i>) :
    //   (<i class="fa fa-pause-circle" aria-hidden="true"></i>);
    // console.log('track index item selectedUser:', this.selectedUser, 'track index item track:', this.track);
    const profileImage = this.selectedUser ?
      (<img src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/person-solid.png" width="150px" height="150px" />) :
      (<img src={this.selectedUser.image_url} width="150px" height="150px" />);
    return(
      <li key={`trackli-${this.track.id}`}>
        <div className="selected-profile-pic">
          {profileImage}
        </div>
        <div className="track-controls">
          <div className="select-play-pause-button"
            onClick={this.handlePlayPause}>
            <i className="fa fa-play-circle fa-3x" aria-hidden="true"></i>
          </div>
          <div className="track-details">
            <h2 className="user-track-artist">{this.track.username}</h2>
            <h2 className="user-track-title">{this.track.title}</h2>
            <img className="waveform" src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/default-wave-form.png" />
          </div>
        </div>
      </li>
    );
  }
}

export default TrackIndexItem;


// export function TrackIndexItem({ selectedUser, track }) {
//
//
  // const playPauseButton = this.props.nowPlaying === false ?
  //   (<i className="fa fa-play-circle fa-3x" aria-hidden="true"></i>) :
  //   (<i class="fa fa-pause-circle" aria-hidden="true"></i>);
//   console.log('track index item selectedUser:', selectedUser, 'track index item track:', track);
//   const profileImage = selectedUser ?
//     (<img src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/person-solid.png" width="150px" height="150px" />) :
//     (<img src={selectedUser.image_url} width="150px" height="150px" />);
//   return(
//     <li key={`trackli-${track.id}`}>
//       <div className="selected-profile-pic">
//         {profileImage}
//       </div>
//       <div className="track-controls">
//         <div className="play-button"
//           onClick={this.handlePlayPause}>
//           <i className="fa fa-play-circle fa-3x" aria-hidden="true"></i>
//         </div>
//         <div className="track-details">
//           <h2 className="user-track-artist">{track.username}</h2>
//           <h2 className="user-track-title">{track.title}</h2>
//           <img className="waveform" src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/default-wave-form.png" />
//         </div>
//       </div>
//     </li>
//   );
// }
