import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

let hard = "hardcover-fiction";
const urlForRequest = request =>
	`https://api.nytimes.com/svc/books/v3/lists/current/${hard}.json?api-key=a76746f5c0b94c5c90c10cb55d5766a1`

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
				<article className="bookItemsContainer">
					{Object.keys(this.state.result).map((idx)=>{
						// console.log(this.state.result[idx]);
						return 	<div className="bk-sub-contanier" key={idx}>
									<img src={this.state.result[idx].book_image}/>
									<h1>{this.state.result[idx].title}</h1>
									<h2>{this.state.result[idx].author}</h2>
								</div>
					})}
				</article>
			</section>

			</aside>
		)
	}
}
export default Bestseller;