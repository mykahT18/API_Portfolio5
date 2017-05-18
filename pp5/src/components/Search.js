import React, { Component } from 'react';


class Search extends Component{
	render(){
		return(
			<div className="searchContainer">
				<h1>Welcome! Search for any book!</h1>
				<form className="searchForm">
						<input type="text" className="searchBox" placeholder="Harry Potter"/>
						<button className="submitBtn"></button>
				</form>
				<div className="details">
						<p id="book">Find a new book to read</p>
						<p id="review">Read the reviews </p>
						<p id="plus">Add to your reading list</p>
				</div>
			</div>
		)
	}
}
export default Search;
