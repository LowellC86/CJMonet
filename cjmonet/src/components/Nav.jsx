import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/nav.css'

const Nav = () => {
  return (
    <div id="headerNav" className="tmpl-loading positioned" style={{marginLeft: 0, marginTop: 10, marginBottom: 0}}>
      <div className="index home">
        <Link to="/">Home</Link>
      </div>
      <div className="index home">
        <Link to="/news">News</Link>
      </div>
      <div className="index home">
        <Link to="/bio">Bio</Link>
      </div>
      <div className="index home">
        <Link to="/tour">Tour</Link>
      </div>
      <div className="index base active">
        <Link to="/music">Music</Link>
      </div>
      <div className="collection">
        <Link to="/merch">Merch</Link>
      </div>
      <div className="collection">
        <Link to="/signup">Signup</Link>
      </div>
      <div className="collection">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav