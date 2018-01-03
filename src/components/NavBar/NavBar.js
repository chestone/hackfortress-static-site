import React from 'react'
import Link from 'gatsby-link'

const NavBar = () => (
  <nav id="nav" className="nav__container"  role="navigation">
    <a class="toggle toggle__close close fa fa-bars fa-2x" href="#"></a>
    <ul className="nav__list">
      <li className="nav__list-item">
        <Link to='/'>Home</Link>
      </li>
      <li className="nav__list-item">
        <Link to='/'>Rules of HF</Link>
      </li>
      <li className="nav__list-item">
        <Link to='/'>Hall of Fame</Link>
      </li>
    </ul>
  </nav>
)

export default NavBar
