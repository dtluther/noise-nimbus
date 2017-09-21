import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SignupFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import SearchBarContainer from '../search_bar/search_bar_container';
import Img from 'react-image';

const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

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
    Modal.modalStyle;
  }

  closeSignupModal() {
    this.setState({ signupModalIsOpen: false });
  }

  signupModal() {
    return (
      <div>
        <button className="session-button" onClick={this.openSignupModal}>Sign Up</button>
        <Modal className="session-modal"
          isOpen={this.state.signupModalIsOpen}
          onAfterOpen={this.afterOpenSignupModal}
          onRequestClose={this.closeSignupModal}
          styles={modalStyle}
          contentLabel="Signup Modal"
        >
          <div>
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
        <button className="session-button" onClick={this.openLoginModal}>Log In</button>
        <Modal className="session-modal"
          isOpen={this.state.loginModalIsOpen}
          onAfterOpen={this.afterOpenLoginModal}
          onRequestClose={this.closeLoginModal}
          styles={modalStyle}
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

  sessionButtons() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div>
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
        <button className="logo-button">NOISENIMBUS logo</button>

        <SearchBarContainer />


        {this.sessionButtons()}

      </div>
    );
  }

}

export default NavBar;
