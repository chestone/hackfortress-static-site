import React from 'react'
import Link from 'gatsby-link'

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/'>Rules of HF</Link>
      </li>
      <li>
        <Link to='/'>Hall of Fame</Link>
      </li>
    </ul>
  </nav>
)

export default NavBar
