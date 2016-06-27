import React from 'react'
import styles from '../styles'

const Home = React.createClass({
  render () {
    return (
      <div className="container-fluid text-center" style={styles.homeBg}>
          <div className="jumbotron col-xs-8 text-center" style={styles.jumbotron}>
            <h1 style={{color: '#000000'}}>Search Wikipedia!</h1>
            <div>
            // PromptContainer w/ biz logic
              // Prompt function with form and onSubmit action variable
            </div>
          </div>
        </div>
    )
  }
});

export default Home
