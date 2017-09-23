import React from 'react';

class UploadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      genere: "",
      user_id: this.props.currentUser.id

    };
  }

  render() {
    return (
      <div className="upload-page">
        <h1>Upload Page</h1>
        <form className="upload-track"></form>
      </div>
    );
  }
}

export default UploadPage;
