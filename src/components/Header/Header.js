import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div>
        <NavLink to="/">
          <h5>VR ANIMAL RESCUE</h5>
        </NavLink>
      </div>
      <nav>
        <NavLink to="/">
          <button>ABOUT</button>
        </NavLink>
        <NavLink to="/explore">
          <button>EXPLORE</button>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header