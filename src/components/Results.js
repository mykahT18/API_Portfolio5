import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';

import { googleBookApi } from '../Helpers';
import { reviewsApi } from '../Helpers';

class Results extends Component{
 // console.log(reviewsApi(this.props.match.params.value))
	render(){
		return(
			<div className="results-container">
				<Header/>
				<Search />
				<div className="result-header">
					<h1>Results: {this.props.match.params.value}</h1>
					
				</div>
				<article className="card">
						
						<img src="https://s1.nyt.com/du/books/images/9780316553452.jpg" alt=""/>
						<div className="text-info">
							<h1>Harry Potter and the Chamber of Secerts</h1>
							<h2>by J.K. Rowling</h2>
							<p>Published Data: </p>
							<p>Reviews (100)</p>
						</div>
					</article>
			</div>
		)
	}
}
export default Results;