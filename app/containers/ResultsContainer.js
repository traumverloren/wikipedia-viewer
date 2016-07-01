import React, { Component } from 'react'
import styles from '../styles'

class ResultsContainer extends Component {
  render () {
    const { keyword } = this.props.location.query
    // check that passing search keyword thru router works!
    console.log(keyword)
    return (
      <div>{keyword}</div>
    )
  }
}

export default ResultsContainer
