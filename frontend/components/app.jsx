import React from 'react';
import { Route, Link } from 'react-router-dom';
import WelcomeContainer from './welcome/welcome_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>NoiseNimbus</h1>
      <WelcomeContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
