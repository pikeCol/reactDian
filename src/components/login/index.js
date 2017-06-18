import React from 'react';

class login extends React.Component {
  constructor(props) {
    super(props);
  }
  handler(){
    this.props.islogin=true;
  }
  render() {
    return(
     <button onClick={this.handler}></button>
    )
  }
}

export default login;
