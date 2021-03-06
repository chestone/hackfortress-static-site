import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Typography from 'typography'
import twinPeaksTheme from 'typography-theme-twin-peaks'

import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Timeline from '../components/Timeline/Timeline'

import '../styles/reset.css'
import '../styles/index.css'
 
const typography = new Typography(twinPeaksTheme)

const TemplateWrapper = ({ children }) => (
  <div className="container">
    <Helmet
      title="Hackfortress"
      meta={[
        { name: 'description', content: 'Hackfortress a combination Team Fortress 2 & Hacking competition run tournament style at Shmoocon & DEFCON every year.' },
        { name: 'keywords', content: 'hackfortress, defcon, shmoocon, team fortress 2' },
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flickity/2.0.10/flickity.min.css' },
      ]}
    />
    <Header />
    <NavBar />
    <main className="content" role="main">
      <section className="content__main">
        {children()}
      </section>
      <section className="content__timeline">
        <Timeline />
      </section>
    </main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
