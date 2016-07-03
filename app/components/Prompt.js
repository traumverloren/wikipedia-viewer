import React, { Component, PropTypes } from 'react'
import styles from '../styles'
import MainContainer from './MainContainer'

function Prompt (props) {
  const { onSubmitQuery, onUpdateQuery, keyword } = props
  return (
    <MainContainer>
      <h3 style={{color: '#8e44ad'}}>Such Wikipedia</h3>
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
        </form>
        <div className="form-group col-sm-offset-6">
          <a href="https://en.wikipedia.org/wiki/Special:Random">
            <button
              className="btn btn-warning"
              type="submit">
              Amaze Random
            </button>
          </a>
        </div>
      </div>
    </MainContainer>

  )
}

Prompt.propTypes = {
  onSubmitQuery: PropTypes.func.isRequired,
  onUpdateQuery: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired
}

export default Prompt
