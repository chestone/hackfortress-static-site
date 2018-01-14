import React from 'react'

export default class Carousel extends React.Component {
  componentDidMount() {
      const carousel = this.refs.carousel
      const options = {
        autoPlay: true,
        cellAlign: "center",
        contain: true,
        imagesLoaded: true,
        initialIndex: 2
      }
      const Flickity = require('flickity')
      this.flkty = new Flickity(carousel, options)
  }

  componentWillUnmount() {
    if (this.flkty) {
      this.flkty.destroy()
    }
  }

  render() {
    return (
      <div ref='carousel' className='carousel'>
        {this.props.children}
      </div>
    )
  }
}
