import React from 'react'
import Link from 'gatsby-link'

const NavBar = () => (
  <nav id="nav" className="nav__container"  role="navigation">
    <a className="toggle__close fa fa-bars fa-2x" href="#"></a>
    <ul className="nav__list">
      <li className="nav__list-item">
        <Link to='/'>
          <h3>Home</h3>
        </Link>
      </li>
      <li className="nav__list-item">
        <Link to='/what-is-hackfortress/'>
          <h3>Rules of Hackfortress</h3>
        </Link>
      </li>
      <li className="nav__list-item">
        <Link to='/hall-of-fame/'>
          <h3>Hall of Fame</h3>
        </Link>
      </li>
    </ul>
  </nav>
)

export default NavBar
