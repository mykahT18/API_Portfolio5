import React, { Component } from 'react';

class Search extends Component{
	render(){
		return(
			<form className="searchForm">
				<div className="subContainer">
					<input type="text" className="searchBox" placeholder="Harry Potter"/>
					<button className="submitBtn">Search</button>
				</div>
			</form>
		)
	}

}
export default Search;
