import React from 'react';
import ReactDOM from 'react-dom';
// import { composeWithDevTools } from 'redux-devtools-extension';
import configureStore from './store/store';
import Root from './components/root';

// TESTING START
import { signup, login, logout } from './actions/session_actions';
window.signup = signup;
window.login = login;
window.logout = logout;

import { createTrack, showTrack, deleteTrack, updateTrack } from './util/track_api_util';
window.createTrack = createTrack;
window.showTrack = showTrack;
window.deleteTrack = deleteTrack;
window.updateTrack = updateTrack;

// TESTING END

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
