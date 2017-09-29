import React from 'react';
import { Link } from 'react-router-dom';

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
  }

  render() {
    console.log('track item props', this.props);
    console.log('track item state', this.state);
    // console.log('track index item props:', this.props);
    // console.log('props in track index item', this.props);
    // const playPauseButton = this.props.nowPlaying === false ?
    //   (<i className="fa fa-play-circle fa-3x" aria-hidden="true"></i>) :
    //   (<i class="fa fa-pause-circle" aria-hidden="true"></i>);
    // console.log('track index item selectedUser:', this.selectedUser, 'track index item track:', this.track);
    const trackArtist = this.track.username;
    const trackTitle = this.track.title;
    const profileImage = this.selectedUser ?
      (<img src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/person-solid.png" width="150px" height="150px" />) :
      (<img src={this.selectedUser.image_url} width="150px" height="150px" />);
    return(
      <li className="track-index-item-li">
        <div className="track-index-item-box">
          <div className="selected-profile-pic">
            {profileImage}
          </div>

          <div className="track-item-wo-pic">

            <div className="track-controls">
              <div className="select-play-pause-button"
                onClick={this.handlePlayPause}>
                <i className="track-select-play fa fa-play-circle fa-3x" aria-hidden="true"></i>
              </div>

              <div className="track-details">
                <Link className="user-track-artist" to={`/users/${trackArtist}`}>{trackArtist}</Link>
                <Link className="user-track-title" to={`/tracks/${trackTitle}`}>{trackTitle}</Link>
              </div>
            </div>

            <div className="track-waveform-box">
              <img className="track-waveform" src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/default-wave-form.png" />
            </div>
          </div>

        </div>

        <div className="track-button-box">
          <i className="track-update-button fa fa-pencil-square-o" aria-hidden="true"></i>
          <i className="track-delete-button fa fa-trash fa-1x" aria-hidden="true"></i>
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
