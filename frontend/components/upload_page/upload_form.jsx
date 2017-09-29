import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.formType === "upload") {
      this.state = {
        title: "",
        genre: "",
        user_id: this.props.currentUser.id,
        trackFile: null,
        trackUrl: null
      };
    } else if (this.props.formType === "edit") {
      this.state = {
        id: this.props.tracks.selectedTrack.id,
        title: this.props.tracks.selectedTrack.title,
        genre: this.props.tracks.selectedTrack.genre,
      };
    }

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });

    };
  }

  updateFile() {
    return e => {
      e.preventDefault();

      const trackFile = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = function() {
        this.setState({ trackFile: trackFile, trackUrl: fileReader.result});
      }.bind(this);

      if (trackFile) {
        fileReader.readAsDataURL(trackFile);
      }
    };
  }

  handleSubmit() {
    return e => {
      e.preventDefault();
      console.log('uploadPage handlesubmit is happening');
      const trackUpload = new FormData();
      trackUpload.append("track[title]", this.state.title);
      trackUpload.append("track[genre]", this.state.genre);
      if (this.state.user_id) {
        trackUpload.append("track[user_id]", this.state.user_id);
      }
      if (this.state.trackFile) {
        trackUpload.append("track[track_upload]", this.state.trackFile);
      }
      console.log('before upload track_upload is:', trackUpload);
      this.props.createTrack(trackUpload)
        .then(() => this.props.history.push(`/tracks/${this.state.title}`));

      console.log('after upload, it should have worked!');
    };
  }

  handleUpdate() {
    return e => {
      e.preventDefault();
      console.log('handle update props:', this.props);
      this.props.updateTrack(this.state)
        .then(() => {
          this.props.handleCloseEditModal();
          this.props.history.push(`/tracks/${this.state.title}`);
        });
    };
  }
  render() {
    const formTitle = this.props.formType === "upload" ? "Upload Track" : "Edit Track";
    const trackInput =  formTitle === "Upload Track" ? (
      <input className="track-file"
        type="file"
        onChange={this.updateFile()}
      />
    ) : null;
    const submit = formTitle === "Upload Track" ? this.handleSubmit : this.handleUpdate;

    return (
      <div className="upload-form-box">
        <form className="upload-track"
          onSubmit={submit()}>
          <h2>{formTitle}</h2>

          <input className="track-title"
            type="text"
            defaultValue={this.props.title}
            onChange={this.update('title')}
            placeholder="Track Title"
          />

          <select className="track-genre"
            onChange={this.update('genre')}
          >
            <option disabled="true" selected="true">Select Genre</option>
            <option value="pop">Pop</option>
            <option value="hip-hop">Hip-Hop</option>
            <option value="rb">R&B</option>
            <option value="country">Country</option>
            <option value="jazz">Jazz</option>
            <option value="instrumental">instrumental</option>
            <option value="rock">Rock</option>
          </select>

          <div className="upload-flex">
            <h2>Please upload an audio file</h2>
            {trackInput}
          </div>

        <input className="track-upload-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UploadForm;
