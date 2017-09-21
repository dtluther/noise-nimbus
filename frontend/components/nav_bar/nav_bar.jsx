import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signupModalIsOpen: false,
      loginModalIsOpen: false
    };

    this.openSignupModal = this.openSignupModal.bind(this);
    this.afterOpenSignupModal = this.afterOpenSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);

    this.openLoginModal = this.openLoginModal.bind(this);
    this.afterOpenLoginModal = this.afterOpenLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
  }

  openSignupModal() {
    this.setState({signupModalIsOpen: true});
  }

  afterOpenSignupModal() {

  }

  closeSignupModal() {
    this.setState({ signupModalIsOpen: false });
  }

  signupModal() {
    return (
      <div>
        <button onClick={this.openSignupModal}>Sign Up</button>
        <Modal className="session-buttons" id="signup-button"
          isOpen={this.state.signupModalIsOpen}
          onAfterOpen={this.afterOpenSignupModal}
          onRequestClose={this.closeSignupModal}
          contentLabel="Signup Modal"
        >
          <h2>Hello</h2>
          <div>I am a modal
            <SignupFormContainer />
          </div>

        </Modal>

      </div>
    );
  }

  openLoginModal() {
    this.setState({loginModalIsOpen: true});
  }

  afterOpenLoginModal() {

  }

  closeLoginModal() {
    this.setState({ loginModalIsOpen: false });
  }

  loginModal() {
    return (
      <div>
        <button onClick={this.openLoginModal}>Log In</button>
        <Modal className="session-buttons" id="login-button"
          isOpen={this.state.loginModalIsOpen}
          onAfterOpen={this.afterOpenLoginModal}
          onRequestClose={this.closeLoginModal}
          contentLabel="Login Modal"
        >
          <h2>Hello</h2>
          <div>I am a modal
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

  sessionButtons() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div>
          <button onClick={this.handleLogout()}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          {this.signupModal()}
          {this.loginModal()}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar">

        <h2>NoiseNimbus</h2>

        {this.sessionButtons()}

      </div>
    );
  }

}

export default NavBar;
