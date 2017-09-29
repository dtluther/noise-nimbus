import React from 'react';
import Modal from 'react-modal';
import EditFormContainer from '../upload_page/edit_form_container';
import CommentsFormContainer from '../comments/comments_form_container.js';
import { Link } from 'react-router-dom';

class TrackPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectTrack = this.handleSelectTrack.bind(this);

  }

  componentWillMount(newProps) {
    this.props.fetchTrackByTitle(this.props.match.params.title);
  }

  componentDidReceiveProps(newProps) {
    if (newProps.match.params.title !== this.props.match.params.title) {
      this.props.fetchTrackByTitle(this.props.match.params.title);
    }
  }

  handleSelectTrack() {
    console.log('props in handle select track', this.props);
    this.props.selectTrack(this.props.selectedTrack, {});
  }



  handleDelete() {
    return e => {
      e.preventDefault();
      this.props.deleteTrack(this.props.tracks.selectedTrack.id)
        .then(() => this.props.history.push(`/users/${this.props.tracks.selectedTrack.username}`));
    };
  }

  render() {
    return (
      <div className="tracks-page">
        <section className="track-header">
          <div className="except-profile-pic">
            <div className="play-details-flexbox">
              <i onClick={this.handleSelectTrack} className="track-header-play fa fa-play-circle fa-5x" aria-hidden="true"></i>

              <div className="track-header-details">
                <Link to={`/users/${this.props.tracks.selectedTrack.username}`} className="track-header-username">{this.props.tracks.selectedTrack.username}</Link>
                <h2 className="track-header-title">{this.props.tracks.selectedTrack.title}</h2>
              </div>
            </div>

            <div className="track-waveform-box">
              <img className="track-waveform" src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/waveform_high_quality.png" />
            </div>
          </div>

          <div className="track-profile-image-box">
            <img className="track-profile-image" src={this.props.tracks.selectedTrack.user_image_url} />
          </div>

        </section>

        <section className="track-comments">
          <CommentsFormContainer />
        </section>
      </div>
    );
  }
}

export default TrackPage;
