import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
class Results extends Component{
	constructor(props){
		super(props);
		
		
	}
	render(){
		return(
			<div className="results-container">
				<Header/>
				<Search />
				<div className="result-header">
					<h1>Results for Harry Potter: (7)</h1>
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