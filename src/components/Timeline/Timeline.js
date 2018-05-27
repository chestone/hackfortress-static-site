import React from 'react'

export default class Timeline extends React.Component {
  render() {
    return (
      <a 
        className="twitter-timeline" 
        data-width="400" 
        data-height="600" 
        data-theme="light" 
        data-link-color="#E95F28" 
        href="https://twitter.com/tf2shmoo?ref_src=twsrc%5Etfw">
        Tweets by tf2shmoo
      </a>
    )
  }
}