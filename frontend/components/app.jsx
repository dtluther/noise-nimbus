import React from 'react';
import { Route, Link } from 'react-router-dom';
import WelcomeContainer from './welcome/welcome_container';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <h1>NoiseNimbus</h1>
      <WelcomeContainer />
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
