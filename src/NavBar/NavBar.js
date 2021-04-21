import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import logo from '../images/bridgethegap.png';

function NavBar(props) {
    return (
        <div className="nav-bar">
        <div className="logo">
        <img className="circle-logo" src={logo} alt="logo" />
        </div>
      <div className="links">
      <Link to="/" className = "link-button">Home</Link>
      <Link to="/about" className = "link-button">About</Link>
        
        <Link to="/shopmerch" className = "link-button">Merchandise</Link> 

        </div>
            
        </div>
    );
}

export default NavBar;