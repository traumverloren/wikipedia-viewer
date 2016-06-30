import React, { Component } from 'react'
import styles from '../styles'

class Main extends Component {
  render () {
    return (
      <div className="main-container" style={styles.mainContainer}>
        {this.props.children}
      </div>
    )
  }
}

export default Main
