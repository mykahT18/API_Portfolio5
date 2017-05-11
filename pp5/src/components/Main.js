import React, { Component } from 'react';
import Search from './components/Search';

class Main extends Component{
	render(){
		return(
			<section className="homeContentContainer">
				<h1>Welcome!</h1>
				<Search/>
				<p>Search for any book!</p>
			</section>
		)
	}
}
export default Main;