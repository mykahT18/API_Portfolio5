import React, { Component, PropTypes } from 'react';

import { googleBookApi } from '../Helpers';
class Search extends Component{
	constructor(props){
		super(props)
		this.value = "";
	}
	handleClick(e){
		e.preventDefault();
		const value = this.searchInput.value;
		// console.log(this.searchInput.value);
		googleBookApi(value);
		this.context.router.history.push(`/components/Results/${value}`);
	}
	render(){
		return(
			<div className="searchContainer">
				<h1>Welcome! Search for any book!</h1>
				<form className="searchForm" onSubmit={ (e) => this.handleClick(e)}>
						<input ref={ (input) => {this.searchInput = input}} type="text" className="searchBox" placeholder="Harry Potter"/>
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
Search.contextTypes ={
	router: PropTypes.object
}
export default Search;
