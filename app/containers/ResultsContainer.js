import React, { Component, PropTypes } from 'react'
import styles from '../styles'
import { getResults } from '../utils/wikipediaHelpers'
import ResultsList from '../components/ResultsList'

class ResultsContainer extends Component {
  constructor () {
    super()
    this.state = {
      results: ['', [], [], []]
    }
  }

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
    return (
      <ResultsList results={this.state.results} />
    )
  }
}

ResultsContainer.propTypes = {
  results: PropTypes.array.isRequired
}


export default ResultsContainer
