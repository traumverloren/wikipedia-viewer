import React, { Component, PropTypes } from 'react'
import styles from '../styles'

function Prompt (props) {
  const { jumbotron } = styles
  const { onSubmitQuery, onUpdateQuery, keyword } = props
  return (
    <div>
      <h3 style={{color: '#000000'}}>Such Wikipedia</h3>
      <div className="col-sm-12">
        <form onSubmit={onSubmitQuery}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="So Wow, I Find"

              onChange={onUpdateQuery}
              value={keyword}
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

Prompt.propTypes = {
  onSubmitQuery: PropTypes.func.isRequired,
  onUpdateQuery: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired
}

export default Prompt
