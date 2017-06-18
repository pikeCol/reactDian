require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import First from './first'
import Second from './second'
import { BrowserRouter, Route, Link ,Switch} from 'react-router-dom'

// let yeomanImage = require('../images/yeoman.png');
import List from './list'
import Firstside from './firstside'
import Secondside from './secondside'
import Login from './login'

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {children} = this.props;
    return (
      <div className="index">
        <BrowserRouter>
          <div>
              <ul>
                <li><Link to="/">List</Link></li>
                <li><Link to="/first">first</Link></li>
                <li><Link to="/second/3333">second</Link></li>
                <li><Link to="/login">second</Link></li>
              </ul>
               <Route exact path="/" component={List}/>
               <Route path="/first" render={(props)=>(
                 <First {...props} keys={1} />
               )}/>
             <Route path="/second/:id" render={(props)=>(
                 <Second {...props} keys={2} />
               )} />
           </div>
         </BrowserRouter>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
