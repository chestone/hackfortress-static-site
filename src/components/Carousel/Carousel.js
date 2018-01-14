import React from 'react'
import Flickity from 'react-flickity-component'

const flickityOptions = {
  autoPlay: true,
  cellAlign: "center",
  contain: true,
  imagesLoaded: true,
  initialIndex: 2
}

const Carousel = () => (
  <Flickity
    className="carousel"
    options={flickityOptions}
  >
    <img 
      className="carousel-cell"
      src="https://photos.smugmug.com/Events/Hackfortress-Photos/i-3B54Xjm/0/4a3541e8/M/NOT_READY_FOR_THIS-M.jpg" 
      alt="Winner Shmoocon 2016" 
      />
    <img 
      className="carousel-cell"
      src="https://photos.smugmug.com/Events/Hackfortress-Photos/i-qzX7rdf/0/8a8fdf41/M/DEFCON2017-M.jpg" 
      alt="Winner DEFCON 2017" 
      />
    <img 
      className="carousel-cell"
      src="https://photos.smugmug.com/Events/Hackfortress-Photos/i-wLGqzMh/0/6c839ff4/M/hf-shmoo-2016-M.jpg" 
      alt="Winner DEFCON 2015" 
      />
    <img 
      className="carousel-cell"
      src="https://photos.smugmug.com/Events/Hackfortress-Photos/i-PKzhzMQ/0/25f6aa7d/M/NOTREADYFORTHIS2015-M.jpg" 
      alt="Winner Team Not Ready For This" 
      />
  </Flickity>
)

export default Carousel