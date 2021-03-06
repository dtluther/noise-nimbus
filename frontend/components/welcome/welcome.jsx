import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import SearchBarContainer from '../search_bar/search_bar_container';
import LoginFormContainer from '../session_form/login_form_container';
import StreamPageContainer from '../stream_page/stream_page_container';
import { login } from '../../actions/session_actions';

// background image attributed to
class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      first_name: "",
      username: "",
      password: ""
    };
  }

  demoLogin() {
    return e => {
      e.preventDefault();
      const user = new FormData();
      user.append("user[username]", "Guest");
      user.append("user[password]", "password");
      this.props.login(user)
        .then( () => this.props.history.push(`/users/Guest`));
    };
  }

  render() {
    return (
      <div className="welcome-page">
        <section className="welcome-greeting">
          <div className="connect-demo">
            <h1 className="connect">Connect on NoiseNimbus</h1>
            <p className="discover">Discover, upload, and stream your favorite music from
              emerging and major artists all over the world </p>
            <button className="demo-login"
              onClick={this.demoLogin()}
            >Demo Login</button>
        </div>
        </section>

        <section className="search-or-upload">
          <SearchBarContainer searchInputClass="welcome-search" />
          <p className="or">or</p>
          <h1 className="welcome-upload">Sign In & Upload</h1>
        </section>

        <section className="welcome-stream">
          <StreamPageContainer />
        </section>


      </div>
    );
  }
}

export default Welcome;
