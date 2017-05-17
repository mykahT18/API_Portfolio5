import React, { Component } from 'react';
import Search from './Search';
import Bestseller from './Bestseller';

class Main extends Component{
	render(){
		return(
			<section className="homeContentContainer">
				<div className="asideCon">
					<Search/>
					<Bestseller />
				</div>
				<div className="details">
						<p id="book">Find a new book to read</p>
						<p id="review">Read the reviews </p>
						<p id="plus">Add to your reading list</p>
					</div>
			</section>
		)
	}
}
export default Main;