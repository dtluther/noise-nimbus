import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className='signup-login'>
    <Link to='/signup'>Create Account</Link>
    &nbsp;or&nbsp;
    <Link to='/login'>Log In</Link>
  </nav>
);

const welcomeMessage = (currentUser, logout) => (
  <div>
    <h1>Welcome, {currentUser.username}</h1>
    <button onClick={logout}>Log Out</button>
  </div>
);

const Welcome = ({ currentUser, logout}) => (
  currentUser ? welcomeMessage(currentUser, logout) : sessionLinks()
);

export default Welcome;
