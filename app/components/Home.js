import React, { Component } from 'react'
import styles from '../styles'
import PromptContainer from '../containers/PromptContainer'

class Home extends Component {
  render () {
    return (
      <div className="container-fluid text-center" style={styles.homeContainer}>
        <PromptContainer />
      </div>
    )
  }
}

export default Home
