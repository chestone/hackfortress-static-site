import React from 'react'
import Flickity from 'react-flickity-component'

const flickityOptions = {
  autoPlay: true,
  cellAlign: "center",
  contain: true,
  imagesLoaded: true,
  initialIndex: 2
}

const Carousel = ({children}) => (
  <Flickity
    className="carousel"
    options={flickityOptions}
  >
    {children}
  </Flickity>
)

export default Carousel