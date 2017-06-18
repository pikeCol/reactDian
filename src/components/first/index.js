import React from 'react';

class First extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.location)
    return(
      <h1>我是first,传来的key是{this.props.keys}</h1>
    )
  }
}

export default First;
