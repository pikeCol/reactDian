import React from 'react';

import {Router, Route, IndexRoute} from 'react-router';
import App from '../components/Main'
import First from '../components/first'
import Header from '../components/header'

class RouterMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route path='/' component={App} />
          <Route path='/first' component={First} />
        </div>
      </BrowserRouter>
    )
  }
}

export default RouterMap;
