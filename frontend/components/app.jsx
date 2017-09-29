import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import WelcomeContainer from './welcome/welcome_container';
import UserPageContainer from './user_page/user_page_container';
import UploadPage from './upload_page/upload_page';
import TrackPageContainer from './track_page/track_page_container';
import PlayBarContainer from './play_bar/play_bar_container';
import SearchPage from './search_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="mother-app">
    <header>
      <NavBarContainer />
    </header>

    <section className="main-container">
      <Switch>
        <AuthRoute exact path="/" component={WelcomeContainer} />
        <ProtectedRoute path="/users/:username" component={UserPageContainer} />
        <ProtectedRoute path="/upload" component={UploadPage} />
        <Route path="/tracks/:title" component={TrackPageContainer} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </section>

    <footer>
      <PlayBarContainer />
    </footer>
  </div>
);

export default App;
