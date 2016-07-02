import React, { Component } from 'react'
import styles from '../styles'
import MainContainer from './MainContainer'

class Main extends Component {
  render () {
    const { background, mainContainer } = styles

    return (
      <div className="main-container" style={background}>
        <div className="container-fluid text-center" style={mainContainer}>
          <MainContainer>
            {this.props.children}
          </MainContainer>
        </div>
      </div>
    )
  }
}

export default Main
