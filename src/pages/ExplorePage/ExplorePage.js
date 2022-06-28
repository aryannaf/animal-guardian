import React from 'react';
import './ExplorePage.scss';
import { NavLink } from 'react-router-dom';

function ExplorePage() {
  return (
    <main>
      <div>
        <NavLink to="/animal/:speciesId">
          <button>DISCOVER</button>
        </NavLink>
        <NavLink to="/categories/:categoryId">
          <button>ALL</button>
        </NavLink>
        <NavLink to="/categories/:categoryId">
          <button>CRITICALLY ENDANGERED</button>
        </NavLink>
        <NavLink to="/categories/:categoryId">
          <button>ENDANGERED</button>
        </NavLink>
        <NavLink to="/categories/:categoryId">
          <button>VULNERABLE</button>
        </NavLink>
        <NavLink to="/categories/:categoryId">
          <button>NEAR THREATENED</button>
        </NavLink>
      </div>
    </main>
  )
}

export default ExplorePage