import React, { Component, PropTypes } from 'react'
import styles from '../styles'
import { Link } from 'react-router'

function StartOver () {
  return (
    <div>
      <div className="form-group pull-left" style={{marginRight: '10px'}}>
        <Link to='/'>
          <button type="button" className="btn btn-danger">Search Again</button>
        </Link>
      </div>

      <div className="form-group pull-right">
        <a href="https://en.wikipedia.org/wiki/Special:Random">
          <button
            className="btn btn-warning"
            type="submit">
            Amaze Random
          </button>
        </a>
      </div>
    </div>
  )
}

function Result ({title, description, url}) {
  return (
    <div className="row">
      <div className="col-sm-3">
        <a href={url}>{title}</a>
      </div>
      <div className="col-sm-9 text-left" style={{'paddingBottom': '2px'}}>
        {description.replace(/\(([^\)]+)\)/, '')}
      </div>
    </div>
  )
}


function Results ({ searchTerm, titles, descriptions, urls }) {
  const { resultsWrapper, resultsHeader, resultsTitle } = styles
  var style

  // omg what a hack for media query on small screen.  embarassing.
  if (document.documentElement.clientWidth < 767) {
    style = {resultsFlexContainer: {
      display: 'flex',
      maxHeight: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '180px'
    }}
  }
  else {
    style = {resultsFlexContainer: {
      display: 'flex',
      maxHeight: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  }

  return (
      <div style={style.resultsFlexContainer}>
        <div className="results-wrapper" style={resultsWrapper}>
        <h4 style={resultsHeader}>Such Results:  <span style={resultsTitle}>"{searchTerm}"</span></h4>

          {titles.map((result, index) => {
            return (
              <Result key={index} title={titles[index]} description={descriptions[index]} url={urls[index]} />
            )
          })}
        </div>
        <StartOver />

      </div>
  )
}

Results.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  titles: PropTypes.array.isRequired,
  descriptions: PropTypes.array.isRequired,
  urls: PropTypes.array.isRequired
}

export default Results
