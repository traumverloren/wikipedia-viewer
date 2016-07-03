import React, { Component } from 'react'
import styles from '../styles'

function ResultsList (props) {
  const { resultsWrapper, resultsHeader, resultsTitle } = styles
  return (
    <div className="col-sm-12" style={resultsWrapper}>
      <h2 style={resultsHeader}>Such Results:  <span style={resultsTitle}>"{props.results[0]}"</span></h2>

      {props.results[1].map((result, index) => {
        const descript = props.results[2][index].replace(/\(([^\)]+)\)/, '')

        return <p><a href={props.results[3][index]}>{props.results[1][index]}</a>: {descript}</p>
      })}
    </div>
  )
}

export default ResultsList
