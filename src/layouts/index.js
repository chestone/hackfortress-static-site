import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'

import '../styles/reset.css'
import '../styles/index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hackfortress"
      meta={[
        { name: 'description', content: 'Hackfortress a combination Team Fortress 2 & Hacking competition run tournament style at Shmoocon & DEFCON every year.' },
        { name: 'keywords', content: 'hackfortress, defcon, shmoocon, team fortress 2' },
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Roboto:400,500,700' },
      ]}
    />
    <NavBar />
    <main>
      {children()}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
