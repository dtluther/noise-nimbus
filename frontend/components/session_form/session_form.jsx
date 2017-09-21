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
      console.log('props before process form', this.props);
      this.props.processForm(user)
        .then(() => {
          console.log('state after submit', this.state);
          console.log('props', this.props);
          this.props.history.push(`/users/${this.state.username}`);});
        //                                            why does this.props.currentUser.username not work?
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
        <section className="signup-inputs">

          <input className="signup-input"
            type="text"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder="E-mail"
          />

          <br/>

          <input className="signup-input"
            type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            placeholder="First Name"
          />

          <br/>

        </section>
      </div>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit()} className="session-form-box">

          Welcome to NoiseNimbus!

          <br/>

          {this.renderErrors()}

          <div className="signup-inputs">
            {this.props.formType === "login" ? null : this.signup() }
          </div>

          <div className="login-form">
            <br/>
              <input className="login-input"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
            <br/>
              <input className="login-input"
                type="text"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input className="session-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
