import React from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/Logo.png'
import logo3 from './assets/logo 3.png';

function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
    <div>
      <nav>
        <img src={logo3} alt="Logo" width="200" height="100">
        </img>
          <ul className="nav-links">
              <Link style={navStyle} to="/about"> 
                <li>About</li>
              </Link>
              <Link to="/weather" style={navStyle}> 
                <li>Weather</li>
              </Link>
              <Link to="/" style={navStyle}> 
                <li>Wave</li>
              </Link>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;
