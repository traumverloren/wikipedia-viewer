import React, { Component } from 'react'
import styles from '../styles'

class ResultsContainer extends Component {
  constructor () {
    super()
    this.setState = {
      searchResults: []
    }
  }

  // component did mount: return results from wikipedia api, top 5?


  render () {
    const { keyword } = this.props.location.query
    const { jumbotron } = styles

    return (
      <div>
        <h3 style={{color: '#000000'}}>Such Wikipedia</h3>
        <div className="col-sm-12">

          <p>{keyword}</p>
        </div>
      </div>
    )
  }
}

export default ResultsContainer
