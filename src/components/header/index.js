import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const arr=this.props.num;
    const items = arr.map((item)=>
       <li key={item.toString()}>{item*2}</li>
    )
    return(
      <ul>
        {items}
      </ul>
    )
  }
}

export default Header;
