import React, { Component } from 'react';

const urlForRequest = request =>
	`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=a76746f5c0b94c5c90c10cb55d5766a1`

class Fiction extends Component{
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
					{Object.keys(this.state.result).map((list,idx)=>{
						return 	<div className="bk-sub-contanier" key={idx+1}>
									<img key={idx+4} src={this.state.result[list].book_image}/>
									<h1 key={idx+2}>{this.state.result[list].title}</h1>
									<h2 key={idx+3}>{this.state.result[list].author}</h2>
								</div>
					})}
				</article>
			</section>
		</aside>
		)
	}
}
export default Fiction;