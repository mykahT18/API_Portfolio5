import React, { Component } from 'react';
import Search from './Search';

class Main extends Component{
	render(){
		return(
			<section className="homeContentContainer">
				<h1>Welcome!</h1>
				<p>Search for any book!</p>
				<Search/>
			</section>
		)
	}
}
export default Main;