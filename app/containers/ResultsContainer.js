import React, { Component } from 'react'
import styles from '../styles'
import { getResults } from '../utils/wikipediaHelpers'
import Results from '../components/Results'

class ResultsContainer extends Component {
  constructor () {
    super()
    this.state = {
      searchTerm: '',
      titles: [],
      descriptions: [],
      urls: []
    }
  }

  async componentDidMount () {
    const { keyword } = this.props.location.query
    try {
      const searchResults = await getResults(keyword)
      console.log(searchResults)
      this.setState({
        searchTerm: searchResults[0],
        titles: searchResults[1],
        descriptions: searchResults[2],
        urls: searchResults[3]
      })
    } catch (error) {
     console.warn('Error in componentDidMount', error)
   }
  }

  render () {
    return (
      <Results searchTerm={this.state.searchTerm}
               titles={this.state.titles}
               descriptions={this.state.descriptions}
               urls={this.state.urls} />
    )
  }
}

export default ResultsContainer
