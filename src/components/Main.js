require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Link } from 'react-router-dom'


// let yeomanImage = require('../images/yeoman.png');


class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.children)
    return (
      <div className="index">
        <ul>
          <li><Link to="/first">first</Link></li>
        <li><Link to="/second">second</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
