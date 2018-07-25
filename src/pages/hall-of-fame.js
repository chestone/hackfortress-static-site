import React from 'react'
import Carousel from '../components/Carousel/Carousel'

const HallOfFamePage = () => (
  <div>
    <h2>Past Winners of the Golden Wrench</h2>
    <Carousel>
      <img 
        className="carousel-cell"
        src="https://photos.smugmug.com/Travel/DEFCON-21/i-4dPpMMD/0/28fd7bfd/M/DSC02353-M.jpg" 
        alt="Winner DEFCON 21" 
        />
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
    </Carousel>
    <article className="hof__article">
      <section className="hof__list">
        <h2>Shmoocon</h2>
        <ul>
          <li>
            2009 - The Shmoobs
          </li>
          <li>
            2010 - Mobile Disco
          </li>
          <li>
            2011 - Penn State
          </li>
          <li>
            2012 - Penn State/Pwn State
          </li>
          <li>
            2013 - Team Zelda
          </li>
          <li>
            2014 - Jolly & Friends
          </li>
          <li>
              2015 - Mobile Disco
          </li>
          <li>
              2016 - Mobile Disco
          </li>
          <li>
              2017 - Team SPARSA(RIT)
          </li>
          <li>
              2018 - Team Not Ready For This
          </li>
        </ul>
      </section>
      <section className="hof__list">
        <h2>DEFCON</h2>
        <ul>
          <li>
            2009 - Name of winning team has been lost to the ages
          </li>
          <li>
            2010 - No HackFortress :(
          </li>
          <li>
            2011 - Team Zelda
          </li>
          <li>
            2012 - Team Zelda
          </li>
          <li>
            2013 - Jolly & Friends
          </li>
          <li>
            2014 - Jolly & Friends
          </li>
          <li>
            2015 - Team Not Ready For This
          </li>
          <li>
            2016 - Team Not Ready For This
          </li>
          <li>
            2017 - Team Not Ready For This
          </li>
        </ul>
      </section>
    </article>
  </div>
)

export default HallOfFamePage
