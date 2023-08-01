import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/nav.css';

const Nav = () => {
  return (
    <div id="header" style={{ marginLeft: 0, marginTop: 10, marginBottom: 0 }}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/bio">Bio</Link>
      </div>
      <div>
        <Link to="/tour">Tour</Link>
      </div>
      <div>
        <Link to="/music">Music</Link>
      </div>
      <div>
        <Link to="/merch">Merch</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;