import React, { Component } from 'react'
import styles from '../styles'

class Main extends Component {
  render () {
    const { background, mainContainer } = styles

    return (
      <div className="main-container" style={background}>
        <div className="container-fluid text-center" style={mainContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main
