import React from 'react';

class Second extends React.Component {
  constructor(props) {
    super(props);
  }
  handler() {
    console.log(this.props.children)
  }
  render() {
    // let match = this.props.match
    let match = this.props.location
    console.log(match)
    return(
      <h1>我是Second，url ： {match.id} ,keys: {this.props.keys}</h1>
    )
  }
}

export default Second;
