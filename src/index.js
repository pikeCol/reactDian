import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

// import { BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom'

// import First from './components/first'
// import Firstside from './components/firstside'
// import Second from './components/Second'
// import Secondside from './components/Secondside'

// Render the main component into the dom
ReactDOM.render(
  <App />,
  // (
  //   <Router>
  //       <Route path='/' component={App}>
  //           <Route path="first" components={{main:First,sidebar:Firstside}} />
  //           <Route path="second" components={{main:Second,sidebar:Secondside}} />
  //        </Route>
  //    </Router>
  // ),
   document.getElementById('app')
 );
