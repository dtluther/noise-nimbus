import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      imageFile: null,
      imageUrl: null,
      username: "",
      password: ""
    };

    // this.handleCloseSignupModal = this.props.handleCloseSignupModal.bind(this);
    // this.handleCloseLoginModal = this.props.handleCloseLoginModal.bind(this);
  }

  componentDidMount
  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  updateFile() {
    return e => {
      e.preventDefault();

      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = function () {
        this.setState({ imageFile: file, imageUrl: fileReader.result});
      }.bind(this);

      if (file) {
        fileReader.readAsDataURL(file);
      }
    };
  }

  handleSubmit() {
    return e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("user[username]", this.state.username);
      formData.append("user[password]", this.state.password);
      if (this.state.email) {
        formData.append("user[email]", this.state.email);
      }
      if (this.state.first_name) {
        formData.append("user[first_name]", this.state.first_name);
      }
      if (this.state.imageFile) {
        formData.append("user[image]", this.state.imageFile);
      }
      this.props.processForm( formData )
        .then(() => {
          this.props.history.push(`/users/${this.state.username}`);
        //                                            why does this.props.currentUser.username not work?
          this.props.handleCloseModals();
        });

    };
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))
        }
      </ul>
    );
  }

  signup() {
    return (
      <div className="signup-inputs-container">
        <input className="signup-input"
          type="text"
          value={this.state.email}
          onChange={this.update('email')}
          placeholder="E-mail"
        />
        <input className="signup-input"
            type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            placeholder="First Name"
          />
        <label className="profile-pic-label">Please upload profile picture
          <br />
          (200x200 recommended)
          <input className="profile-picture" id="profile-picture"
            type="file"
            value="Upload Photo"
            onChange={this.updateFile()}
          />
        </label>
        <img src={this.state.imageUrl} />
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit()} className="session-form-box">

        {this.renderErrors()}

        {this.props.formType === "login" ? null : this.signup() }

        <div className="login-form">
          <input className="login-input"
            type="text"
            value={this.state.username}
            onChange={this.update('username')}
            placeholder="Username"
          />
          <input className="login-input"
            type="text"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
          />
        <input id="user-submit-button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default SessionForm;
