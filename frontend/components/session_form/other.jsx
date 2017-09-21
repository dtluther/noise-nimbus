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

  sessionLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up Instead!</Link>;
    } else {
      return <Link to="/login">Log In Instead!</Link>;
    }
  }
