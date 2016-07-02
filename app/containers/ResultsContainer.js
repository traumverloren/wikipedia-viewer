import React, { Component } from 'react'
import styles from '../styles'
import { getResults } from '../utils/wikipediaHelpers'

class ResultsContainer extends Component {
  constructor () {
    super()
    this.state = {
      results: []
    }
  }

  // component did mount: return results from wikipedia api, top 5?
  async componentDidMount () {
    const { keyword } = this.props.location.query
    try {
      const searchResults = await getResults(keyword)
      console.log(searchResults)
      this.setState({
        results: searchResults
      })
    } catch (error) {
     console.warn('Error in componentDidMount', error)
   }
  }

  render () {
    const { keyword } = this.props.location.query
    const { jumbotron } = styles

    return (
      <div>
        <h3 style={{color: '#8e44ad'}}>Such Results</h3>
        <div className="col-sm-12">

          <p>{this.state.results}</p>
        </div>
      </div>
    )
  }
}

export default ResultsContainer
