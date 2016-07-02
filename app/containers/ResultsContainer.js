import React, { Component } from 'react'
import styles from '../styles'
import { getResults } from '../utils/wikipediaHelpers'

class ResultsContainer extends Component {
  constructor () {
    super()
    this.setState = {
      searchResults: []
    }
  }

  // component did mount: return results from wikipedia api, top 5?
  async componentDidMount () {
    const { keyword } = this.props.location.query

    const result = await getResults(keyword)
    console.log(result)
  }

  render () {
    const { keyword } = this.props.location.query
    const { jumbotron } = styles

    return (
      <div>
        <h3 style={{color: '#000000'}}>Such Results</h3>
        <div className="col-sm-12">

          <p>{keyword}</p>
        </div>
      </div>
    )
  }
}

export default ResultsContainer
