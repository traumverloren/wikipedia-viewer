import React from 'react'
import styles from '../styles'

const PromptContainer = React.createClass({
  render () {
    return (
      <div className="jumbotron col-sm-6 text-center" style={styles.jumbotron}>
        <h3 style={{color: '#000000'}}>Such Wikipedia</h3>
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="So Wow I Seek"
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
});

export default PromptContainer
