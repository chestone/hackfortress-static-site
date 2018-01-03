import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="home__container">
    <h1>Welcome to Hackfortress!</h1>
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
