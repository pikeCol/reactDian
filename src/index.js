import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

import First from './components/first/index'
import Second from './components/second/index'
// import { Router, Link } from 'react-router'
import { BrowserRouter, Route,Switch } from 'react-router-dom'

// Render the main component into the dom
ReactDOM.render(
  // <App />,
  (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/first" component={First} />
          <Route path="/second" component={Second} />
        </Switch>
      </div>
    </BrowserRouter>
  ),
   document.getElementById('app')
 );
