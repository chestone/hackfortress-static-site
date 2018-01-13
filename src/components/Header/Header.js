import React from 'react';
import Link from 'gatsby-link';

import { toggleNav } from '../../utils/header'

class Header extends React.Component {
  render() {
    return (
      <header className="header__container" role="banner">
        <a className="header__item header__nav-toggle fa fa-bars fa-2x" onClick={toggleNav}></a>
        <h1 className="header__item header__title">
          <Link to="/">
            Hackfortress
          </Link>
        </h1>
      </header>
    )
  }
}

export default Header;