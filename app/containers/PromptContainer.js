import React from 'react'
import styles from '../styles'

const PromptContainer = React.createClass({
  render () {
    return (
      <div className="jumbotron col-sm-6 text-center" style={styles.jumbotron}>
        <h3 style={{color: '#000000'}}>Search Wikipedia!</h3>
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="I'm searching for..."
                type="text" />
            </div>
            <div className="form-group col-sm-6 col-sm-offset-3">
              <button
                className="btn btn-block btn-success"
                type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

export default PromptContainer
