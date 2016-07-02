import React, { PropTypes } from 'react'
import styles from '../styles'

function MainContainer ({ children }) {
  const { jumbotron } = styles
  return (
    <div className="jumbotron col-sm-6 text-center" style={jumbotron}>
      {children}
    </div>
  )
}

export default MainContainer
