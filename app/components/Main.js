import React from 'react'

const Main = React.createClass({
  render () {
    return (
      <div>
        Hello from Main Component!
        {this.props.children}
      </div>
    )
  }
});

export default Main
