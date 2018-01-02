import React from 'react';
import Link from 'gatsby-link';

class Header extends React.Component {
  render() {
    return (
      <header class="main-header">
        <h1>
          <Link
            to="/"
          >
            Hackfortress
          </Link>
        </h1>
      </header>
    )
  }
}

export default Header;