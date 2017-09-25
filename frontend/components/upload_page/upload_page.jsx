import React from 'react';
import UploadFormContainer from './upload_form_container';

class UploadPage extends React.Component {

  render() {
    return (
      <div className="upload-page">
        <h1>Upload Page</h1>

        <UploadFormContainer />

      </div>
    );
  }
}

export default UploadPage;
