import React, { Component } from 'react';

class Bestseller extends Component{
	render(){
		return(
			<aside className="mainContainer">
			<h1>The New York Bestsellers</h1>
			<ul className="subNav">
				<li>Fiction</li>
				<li>NonFiction</li>
				<li>Young Adult</li>
				<li>Children</li>
			</ul>
			<section className="bestResults">
			<h1>This week:</h1>
			
			</section>

			</aside>
		)
	}
}
export default Bestseller;