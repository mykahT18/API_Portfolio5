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
			</div>
		)
	}
}
export default Search;
