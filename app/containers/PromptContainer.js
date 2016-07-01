import React, { Component } from 'react'
import styles from '../styles'
import Prompt from '../components/Prompt'

class PromptContainer extends Component {
  constructor () {
    super()
    this.state = {
      keyword: ''
    }
  }

  handleUpdateQuery (event) {
    this.setState({
      keyword: event.target.value
    });
  }

  handleSubmitQuery (event) {
    event.preventDefault();
    const { keyword } = this.state
    this.setState({
      keyword: ''
    });

    this.context.router.push({
      pathname: '/results',
      query: {
        // destructure this param into a concise object.  take away key if same is same as param.
        keyword
      }
    });
  }

  render () {
    return (
      <Prompt onSubmitQuery={(event) => this.handleSubmitQuery(event)}
              onUpdateQuery={(event) => this.handleUpdateQuery(event)}
              keyword={this.state.keyword}
      />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer
