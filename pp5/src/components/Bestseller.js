import React, { Component } from 'react';

const urlForRequest = request =>
	`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=a76746f5c0b94c5c90c10cb55d5766a1`

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
				result: data.results.books
			
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
				<li><a href="#">Fiction</a></li>
				<li><a href="#">NonFiction</a></li>
				<li><a href="#">Young Adult</a></li>
				<li><a href="#">Children</a></li>
			</ul>
			<section className="bestResults">
				<h1>This week:</h1>
				{Object.keys(this.state.result).map((list,idx)=>{
						console.log(this.state.result[list].title);
						return 	<div>
									<h1 key={idx}>{this.state.result[list].title}</h1>
									<h2 key={idx}>{this.state.result[list].author}</h2>
								</div>

				})}
			</section>

			</aside>
		)
	}
}
export default Bestseller;