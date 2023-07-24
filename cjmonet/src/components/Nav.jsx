import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/bio">Bio</Link>
          <Link to="/tour">Tour</Link>
          <Link to="/music">Music</Link>
          <Link to="/merch">Merch</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Nav;
