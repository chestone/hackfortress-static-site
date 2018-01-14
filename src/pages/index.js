import React from 'react'
import Link from 'gatsby-link'
import Carousel from '../components/Carousel/Carousel'

const IndexPage = () => (
  <div className="home__container">
     <h1>Welcome to Hackfortress!</h1>
    <Carousel>
      <img 
        className="carousel-cell"
        src="https://photos.smugmug.com/Travel/DEFCON-21/i-gFct2mS/0/3d4ccd3a/M/DSC02138-M.jpg" 
        alt="Hackfortress" 
        />
      <img 
        className="carousel-cell"
        src="https://photos.smugmug.com/Travel/DEFCON-21/i-XhpFh6j/0/4f945488/M/DSC02249-M.jpg" 
        alt="Hackfortress" 
        />
      <img 
        className="carousel-cell"
        src="https://photos.smugmug.com/Travel/DEFCON-21/i-RtGs64j/0/47347755/M/DSC02299-M.jpg" 
        alt="Hackfortress" 
        />
      <img 
        className="carousel-cell"
        src="https://photos.smugmug.com/Travel/DEFCON-21/i-CRmpLkv/0/88307060/M/DSC02214-M.jpg" 
        alt="Hackfortress" 
        />
      <img 
        className="carousel-cell"
        src="https://photos.smugmug.com/Travel/DEFCON-21/i-Ph9fmvD/0/22576d6a/M/DSC02221-M.jpg" 
        alt="Hackfortress" 
        />
      <img 
        className="carousel-cell"
        src="https://photos.smugmug.com/Travel/DEFCON-21/i-wzrhP2N/0/29d19529/M/DSC02232-M.jpg" 
        alt="Hackfortress" 
        />
      <img 
        className="carousel-cell"
        src="https://photos.smugmug.com/Travel/DEFCON-21/i-DCdfqzZ/0/20791b60/M/DSC02331-M.jpg" 
        alt="Hackfortress" 
        />
      <img 
        className="carousel-cell"
        src="https://photos.smugmug.com/Travel/DEFCON-21/i-4dPpMMD/0/28fd7bfd/M/DSC02353-M.jpg" 
        alt="Hackfortress" 
        />
    </Carousel>
     <section>
      Hackfortress is a unique blend of Team Fortress 2 and a computer security contest. 
      Teams are made up of 6 TF2 players and 4 hackers, TF2 players duke it out while hackers are busy 
      solving puzzles. As teams start scoring they can redeem points in the hack fortress store for bonuses. 
      Bonuses range from crits for the TF2, lighting the opposing team on fire, or preventing the other teams 
      hackers from accessing the store.
    </section>
    <section className="break">
      <p>For more checkout our <Link to="/what-is-hackfortress/">about page</Link>.</p>
    </section>
  </div>
)

export default IndexPage
