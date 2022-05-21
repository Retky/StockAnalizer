import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => (
  <header>
    <div>
      <FontAwesomeIcon icon={faBars} size="xl" className="burger" />
    </div>
    <NavLink to="/"><h1>CryptoMarket</h1></NavLink>
    <div>
      <FontAwesomeIcon icon={faGear} size="xl" className="config" />
    </div>
  </header>
);

export default Nav;
