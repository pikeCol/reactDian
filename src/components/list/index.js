require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import First from '../first'
import Second from '../second'
import { BrowserRouter, Route, Link ,Switch} from 'react-router-dom'

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="index">
        <BrowserRouter>
          <div>
              <ul>
                <li><Link to="/first">first</Link></li>
                <li><Link to="/second">Inbox</Link></li>
              </ul>
              <div className="right">
                <Route path="/first" component={First} />
                <Route path="/second" component={Second} />
              </div>
           </div>
         </BrowserRouter>
      </div>
    );
  }
}


export default List;
