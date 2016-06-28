import React from 'react'
import styles from '../styles'

const Main = React.createClass({
  render () {
    return (
      <div className="main-container" style={styles.mainContainer}>
        {this.props.children}
      </div>
    )
  }
});

export default Main
