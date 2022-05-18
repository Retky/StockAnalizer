import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <header>
    <div>Menu</div>
    <NavLink to="/"><h1>CryptoMarket</h1></NavLink>
    <div>config</div>
  </header>
);

export default Nav;
