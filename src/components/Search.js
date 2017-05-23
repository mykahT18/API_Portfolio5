import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { googleBookApi } from '../Helpers';
class Search extends Component{
	constructor(props){
		super(props);
		// this.value = "";
		this.state = {
			book: {},
			showResults: false,
			myBooks: []
		};
	}
	handleClick(e){
		e.preventDefault();
		const value = this.searchInput.value;
		// console.log(this.searchInput.value);
		let temp = "";
		fetch("https://www.googleapis.com/books/v1/volumes?q=" + value)
		.then(data => data.json())
	  	.then(data => {
	  		console.log(data.items);
	  		this.setState({

				book: data.items
			})
	    })
	  	.catch(function(error) {
	    	console.log("REQUEST WAS BAD");
	  	});   
	}
	addBook(e){
		
		e.preventDefault();
		console.log(this.input)
		let show = this.input.getAttribute("data-btn");
		console.log(show);
		
	}
	renderResults(){
		if(this.state.showResults){
			return(
				<div className="results-container">
					<div className="result-header">
					<h1>Results: {this.searchInput.value}</h1>
					</div>
						{Object.keys(this.state.book).map((idx)=>{
							// console.log(this.state.book);
						return 	<article className="card" key={idx}>
									<div className="text-info" key={idx}>
										<img src={this.state.book[idx].volumeInfo.imageLinks.thumbnail}/>
										<h1>{this.state.book[idx].volumeInfo.title}</h1>
										<h2>By {this.state.book[idx].volumeInfo.authors}</h2>
										<p>Published: {this.state.book[idx].volumeInfo.publishedDate}</p>
										<input ref={ (input) =>{this.input = input}} data-btn={idx} onClick={ (e) => this.addBook.bind(e)} type="submit" value="Add"/>
									</div>
								</article>
						})}
					
				</div>
				);
		} return(
			<div className="details">
						<p id="book">Find a new book to read</p>
						<p id="review">Read the reviews </p>
						<p id="plus">Add to your reading list</p>
			</div>
			);
	}
	render(){
		return(
			<div className="searchContainer">
				<h1>Welcome! Search for any book!</h1>
				<form className="searchForm" onSubmit={ (e) => this.handleClick(e)}>
						<input ref={ (input) => {this.searchInput = input}} type="text" className="searchBox" placeholder="Harry Potter"/>
						<button className="submitBtn" onClick={this.showResults.bind(this)}></button>
				</form>

				{this.renderResults()}
			</div>
		)
	}
	showResults(){
		this.setState({showResults: true})
	}
}
Search.contextTypes ={
	router: PropTypes.object
}
export default Search;
