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
    this.handleCloseModals = this.handleCloseModals.bind(this);

    this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this);
    // this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
  }


  handleCloseModals() {
    this.setState({ signupModalIsOpen: false, loginModalIsOpen: false });
    this.props.clearSessionErrors();
  }

  handleOpenSignupModal() {
    this.handleCloseModals();
    this.setState({signupModalIsOpen: true});
  }

  signupModal() {
    return (
      <div>
        <button className="session-button" onClick={this.handleOpenSignupModal}>Sign Up</button>
        <Modal className="session-modal"
          isOpen={this.state.signupModalIsOpen}
          onAfterOpen={this.handleAfterOpenSignupModal}
          onRequestClose={this.handleCloseModals}
          contentLabel="Signup Modal"
        >
          <div>
            <SignupFormContainer
              handleCloseModals={this.handleCloseModals}
              />
          </div>

        </Modal>

      </div>
    );
  }

  handleOpenLoginModal() {
    this.handleCloseModals();
    this.setState({loginModalIsOpen: true});
  }

  // handleCloseLoginModal() {
  //   this.setState({ loginModalIsOpen: false });
  //   this.props.clearSessionErrors();
  // }

  loginModal() {
    return (
      <div>
        <button className="session-button" onClick={this.handleOpenLoginModal}>Log In</button>
        <Modal className="session-modal"
          isOpen={this.state.loginModalIsOpen}
          onAfterOpen={this.afterOpenLoginModal}
          onRequestClose={this.handleCloseModals}
          contentLabel="Login Modal"
        >
          <div>
            <LoginFormContainer
              welcomeState={this.state}
              handleCloseModals={this.handleCloseModals} />
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

  // {this.logoButton()}
  render() {
    let logoHome;
    if (this.props.currentUser) {
      const currentUserUsername = this.props.currentUser.username;
      logoHome = (
        <Link className="logo-link-home" to={`/users/${currentUserUsername}`}>
          <img className="logo-white" src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/noisenimbus_logo.png" />
          <h1 className="NOISENIMBUS">NOISENIMBUS</h1>
        </Link>
      );
    } else {
      logoHome = (
        <Link className="logo-link-home" to={"/"}>
          <img className="logo-white" src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/noisenimbus_logo.png" />
          <h1 className="NOISENIMBUS">NOISENIMBUS</h1>
        </Link>
      );
    }

    return (
      <div className="nav-bar">
        {logoHome}

        <Link className="to-stream" to={'/stream'}>Stream</Link>

        <SearchBarContainer searchInputClass="search-input"/>


        {this.sessionButtons()}

      </div>
    );
  }

}

export default NavBar;
