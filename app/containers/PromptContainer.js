import React, { Component } from 'react'
import styles from '../styles'

class PromptContainer extends Component {
  constructor () {
    super()
    this.state = {
      keyword: ''
    }
  }

  onUpdateQuery (event) {
    this.setState({
      keyword: event.target.value
    });
  }

  onSubmitQuery (event) {
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

  // The bind(this) will go away once move this to Prompt component...

  render () {
    return (
      <div className="jumbotron col-sm-6 text-center" style={styles.jumbotron}>
        <h3 style={{color: '#000000'}}>Such Wikipedia</h3>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitQuery.bind(this)}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="So Wow, I Find"

                onChange={this.onUpdateQuery.bind(this)}
                value={this.state.keyword}
                type="text" />
            </div>
            <div className="form-group col-sm-6">
              <button
                className="btn btn-success"
                type="submit">
                Much Search
              </button>
            </div>
            <div className="form-group col-sm-offset-6">
              <button
                className="btn btn-warning"
                type="submit">
                Amaze Random
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PromptContainer
