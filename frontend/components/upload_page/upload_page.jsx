import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      user_id: this.props.currentUser.id,
      trackFile: null,
      trackUrl: null
    };
  }

  update(field) {
    console.log('inside UploadForm.update, this.state:', this.state);
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
      if (trackUpload.append("track[title]", this.state.title)) {
        console.log('I ran trackUpload.append("track[Title]")');
      }
      trackUpload.append("track[genre]", this.state.genre);
      trackUpload.append("track[user_id]", this.state.user_id);
      trackUpload.append("track[track_upload]", this.state.trackFile);
      console.log('before upload track_upload is:', trackUpload);
      this.props.createTrack(trackUpload);

      // const formData = new FormData();

      // formData.append("track[title]", this.state.title);
      // formData.append("track[description]", this.state.description);
      // formData.append("track[genre]", this.state.genre);
      // formData.append("track[track_recording]", this.state.recordingFile);
      // formData.append("track[track_thumb_nail]", this.state.imageFile);
      // console.log('before upload track_upload is:', formData);
      // this.props.createTrack(formData);
      console.log('after upload, it should have worked!');

    };

  }
  render() {
    return (
      <div className="upload-page">
        <h1>Upload Page</h1>
        <form className="upload-track"
          onSubmit={this.handleSubmit()}>
          <h2>Upload Track</h2>

          <input className="track-title"
            type="text"
            defaultValue={this.state.title}
            onChange={this.update('title')}
            placeholder="Track Title"
          />

          <br/>

          <select className="track-genre"
            onChange={this.update('genre')}
          >
            <option disabled="true" selected="true">Select Genre</option>
            <option value="pop">Pop</option>
            <option value="hip-hop">Hip-Hop</option>
            <option value="rb">R&B</option>
            <option value="country">Country</option>
          </select>

          <br/>

          <input className="track-file"
            type="file"
            onChange={this.updateFile()}
          />

          <br/>

        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UploadForm;
