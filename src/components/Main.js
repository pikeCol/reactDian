require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import First from './first'
import Second from './second'
import { BrowserRouter, Route, Link ,Switch} from 'react-router-dom'

// let yeomanImage = require('../images/yeoman.png');


class AppComponent extends React.Component {
  constructor() {
    super();
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
             <Switch>
               <Route path="/first" component={First} />
               <Route path="/second" component={Second} />
             </Switch>
           </div>
         </BrowserRouter>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
