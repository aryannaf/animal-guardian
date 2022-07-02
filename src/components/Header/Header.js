import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <div className="header">
      <div className="header__contents">
        <div className="header__logo">
          <NavLink to="/" className="header__logo-link">
            <img src={logo} alt="vr animal rescue logo" className="header__logo-image" />
          </NavLink>
        </div>
        <nav className="header__nav">
          <NavLink to="/" className="header__nav-link">
            <button className="header__about">ABOUT</button>
          </NavLink>
          <NavLink to="/explore" className="header__nav-link">
            <button className="header__explore">EXPLORE</button>
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Header