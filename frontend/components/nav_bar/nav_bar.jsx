import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SignupFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import SearchBarContainer from '../search_bar/search_bar_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: "",
      signupModalIsOpen: false,
      loginModalIsOpen: false
    };

    this.handleOpenSignupModal = this.handleOpenSignupModal.bind(this);
    this.handleCloseSignupModal = this.handleCloseSignupModal.bind(this);

    this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this);
    this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
  }

  handleOpenSignupModal() {
    this.setState({signupModalIsOpen: true});
  }

  handleCloseSignupModal() {
    this.setState({ signupModalIsOpen: false });
    this.props.clearSessionErrors();
  }

  signupModal() {
    return (
      <div>
        <button className="session-button" onClick={this.handleOpenSignupModal}>Sign Up</button>
        <Modal className="session-modal"
          isOpen={this.state.signupModalIsOpen}
          onAfterOpen={this.handleAfterOpenSignupModal}
          onRequestClose={this.handleCloseSignupModal}
          contentLabel="Signup Modal"
        >
          <div>
            <SignupFormContainer />
          </div>

        </Modal>

      </div>
    );
  }

  handleOpenLoginModal() {
    this.setState({loginModalIsOpen: true});
  }

  handleCloseLoginModal() {
    this.setState({ loginModalIsOpen: false });
    this.props.clearSessionErrors();
  }

  loginModal() {
    return (
      <div>
        <button className="session-button" onClick={this.handleOpenLoginModal}>Log In</button>
        <Modal className="session-modal"
          isOpen={this.state.loginModalIsOpen}
          onAfterOpen={this.afterOpenLoginModal}
          onRequestClose={this.handleCloseLoginModal}
          contentLabel="Login Modal"
        >
          <div>
            <LoginFormContainer welcomeState={this.state} />
          </div>

        </Modal>

      </div>
    );
  }

  handleLogout() {
    return e => {
      e.preventDefault();
      this.props.logout()
      .then(() => this.props.history.push("/"));
    };
  }

  logoButton() {
    let logoButton =
      (<img
        src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/users/images/default_image/noise_nimbus_logo.png"
      />);
    if (this.props.currentUser) {
      return (
        <div className="logo">
          {logoButton}
        </div>
      );
    } else {
      return (
        <div className="logo">
          <img className="logo-button"
            src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/users/images/000/000/001/original/noise_nimbus_purple.png
"
          />
        </div>
      );
    }
  }

  sessionButtons() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div>
          <button className="session-button upload"
            onClick={() => this.props.history.push('/upload')}>Upload</button>
          <button className="session-button"
             onClick={this.handleLogout()}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div className="session-buttons">
          {this.signupModal()}
          {this.loginModal()}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar">
        {this.logoButton()}
        <button className="logo-button">NOISENIMBUS logo</button>

        <SearchBarContainer />


        {this.sessionButtons()}

      </div>
    );
  }

}

export default NavBar;
