import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import HelloContainer from './home/hello_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import WelcomeContainer from './welcome/welcome_container';
import SessionFormContainer from './session_form/session_form_container';
import UserPageContainer from './user_page/user_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="mother-app">

    <NavBarContainer />

    <Switch>
      <AuthRoute exact path="/" component={WelcomeContainer} />
      <Route path="/users/:username" component={UserPageContainer} />
    </Switch>

  </div>
);

export default App;
