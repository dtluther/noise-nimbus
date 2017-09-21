import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('session form props', props);
    this.state = {
      email: "",
      first_name: "",
      username: "",
      password: "" };
  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit() {
    return e => {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
      this.props.history.push(`/user/${this.props.currentUser.username}`);
    };
  }

  sessionLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up Instead!</Link>;
    } else {
      return <Link to="/login">Log In Instead!</Link>;
    }
  }

  signup() {
    return (
      <div className="signup-inputs-container">
        <section className="signup-inputs">

          <input className="signup-input"
            type="text"
            onChange={this.update('email')}
            placeholder="E-mail"
          />

          <br/>

          <input className="signup-input"
            type="text"
            onChange={this.update('first_name')}
            placeholder="First Name"
          />

          <br/>

        </section>
      </div>
    );
  }

  renderErrors() {
    console.log(this.props);
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

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit()} className="login-form-box">

          Welcome to NoiseNimbus!

          <br/>

          Please {this.props.formType} or {this.sessionLink()}

          {this.renderErrors()}

          <div className="signup-inputs">
            {this.props.formType === "login" ? null : this.signup() }
          </div>

          <div className="login-form">
            <br/>
              <input className="login-input"
                type="text"
                onChange={this.update('username')}
                placeholder="Username"
              />
            <br/>
              <input className="login-input"
                type="text"
                onChange={this.update('password')}
                placeholder="Password"
              />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
