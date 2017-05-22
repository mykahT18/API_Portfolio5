import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Library from './components/Library';
import Header from './components/Header';
import Results from './components/Results';
const Root = () => {
  return(
    <Router>
    	<div>
    		<Route exact path="/" component={App} />
    		<Route path="/components/Library" component={Library} />
        <Route path="/components/Results/:value" component={Results} />
		  </div>
    </Router>

    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
