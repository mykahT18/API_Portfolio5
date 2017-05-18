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
const Root = () => {
  return(
    <Router>
    	<div>
    		<Route exact path="/" component={App} />
    		<Route path="/components/Library" component={Library} />
		</div>
    </Router>

    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
