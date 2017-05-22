import React, { Component, PropTypes } from 'react';


class Search extends Component{
	constructor(props){
		super(props);
		this.value = '';
	}
	handleClick(e){
		e.preventDefault();
		
		this.value = this.refs.input.value;
		console.log(this.refs.input.value);
		this.context.router.history.push('/components/Results');
	}
	render(){
		return(
			<div className="searchContainer">
				<h1>Welcome! Search for any book!</h1>
				<form className="searchForm" onSubmit={this.handleClick.bind(this)}>
						<input ref="input" type="text" className="searchBox" placeholder="Harry Potter"/>
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
