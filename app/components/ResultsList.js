import React, { Component } from 'react'
import styles from '../styles'
import { Link } from 'react-router'

function StartOver () {
  return (
    <div>
      <div className="form-group pull-left" style={{marginRight: '20px'}}>
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

function ResultsList (props) {
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
      paddingTop: '120px'
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
        <h3 style={resultsHeader}>Such Results:  <span style={resultsTitle}>"{props.results[0]}"</span></h3>

          {props.results[1].map((result, index) => {
            const descript = props.results[2][index].replace(/\(([^\)]+)\)/, '')

            return <p><a href={props.results[3][index]}>{props.results[1][index]}</a>: {descript}</p>
          })}
        </div>
        <StartOver />

      </div>
  )
}

export default ResultsList
