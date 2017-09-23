import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import SearchBarContainer from '../search_bar/search_bar_container';
import LoginFormContainer from '../session_form/login_form_container';
import { login } from '../../actions/session_actions';

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
          <h1>This is the welcome page!</h1>
          <h1>greeting and background image go here</h1>

          <button className="demo-login"
            onClick={this.demoLogin()}
          >Demo Login</button>
        </section>

        <section className="search-or-upload">
          <SearchBarContainer />
          <button className="upload">Upload</button>
        </section>

        <section className="pending">
          <h1>Pending</h1>
        </section>


      </div>
    );
  }
}

export default Welcome;
