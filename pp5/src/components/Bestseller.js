import React, { Component } from 'react';

const urlForRequest = request =>
	`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=a76746f5c0b94c5c90c10cb55d5766a1
	list=hardcover-fiction`

class Bestseller extends Component{
	constructor(props){
		super(props)
		this.state = {
			requestFailed: false
		}
	}
	componentDidMount(){
		fetch(urlForRequest())
		.then(response=>{
			return response
		})
		.then(data => data.json())
		.then(data => {
			this.setState({
				result: data.results.lists,
				num_results: 10
			})
		}), ()=>{
			this.setState({
				requestFailed: true
			})
		}

	}
	render(){
		if(!this.state.result) return <p>Loading.....</p>
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
				{Object.keys(this.state.result).map((list)=>{
					return Object.keys(this.state.result[list].books).map((book,idx)=>{
						console.log(this.state.result[list].books[book].title);
						return <p key={idx}>Key: {idx}, Title: {this.state.result[list].books[book].title}</p>;
					})

				})}
			</section>

			</aside>
		)
	}
}
export default Bestseller;