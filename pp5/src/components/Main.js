import React, { Component } from 'react';
import Search from './Search';
import Bestseller from './Bestseller';

class Main extends Component{
	render(){
		return(
			<section className="homeContentContainer">
				<div className="asideCon">
					<h1>Welcome! Search for any book!</h1>
					<Search/>
					<Bestseller/>
				</div>
			</section>
		)
	}
}
export default Main;