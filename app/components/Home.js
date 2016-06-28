import React from 'react'
import styles from '../styles'
import PromptContainer from '../containers/PromptContainer'

const Home = React.createClass({
  render () {
    return (
      <div className="container-fluid text-center" style={styles.homeContainer}>
        <PromptContainer />
      </div>
    )
  }
});

export default Home
