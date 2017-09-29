import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import EditFormContainer from '../upload_page/edit_form_container';

// ATTRIBUTION TO https://pixabay.com/ for wave form
// ATTRIBUTION TO http://resizeyourimage.com/EN/ for image size


class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectedUser = this.props.selectedUser;
    this.track = this.props.track;

    this.state = {
      editModalIsOpen: false
    };

    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleOpenEditModal = this.handleOpenEditModal.bind(this);
    this.handleCloseEditModal = this.handleCloseEditModal.bind(this);
  }

  handleOpenEditModal() {
    this.setState({editModalIsOpen: true});
  }

  handleCloseEditModal() {
    this.setState({ editModalIsOpen: false });
    // this.props.clearTrackErrors();
  }

  editModal() {
    const trackTitle = this.track.title;
    return (
      <div className="edit-button-modal">
        <i onClick={this.handleOpenEditModal}  className="edit-button track-update-button fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
        <Modal className="edit-modal"
          isOpen={this.state.editModalIsOpen}
          onAfterOpen={this.handleAfterOpenEditModal}
          onRequestClose={this.handleCloseEditModal}
          contentLabel="Edit Modal"
        >
          <div>
            <EditFormContainer title={trackTitle} handleCloseEditModal={this.handleCloseEditModal} />
          </div>

        </Modal>
      </div>
    );
  }

  handlePlayPause(e) {
    e.preventDefault();
    this.props.selectTrack(this.track, this.props.tracks);
  }

  render() {
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
          {this.editModal()}
        </div>
      </li>
    );
  }
}

// can add delete track later
// <i className="track-delete-button fa fa-trash fa-2x" aria-hidden="true"></i>


export default TrackIndexItem;
