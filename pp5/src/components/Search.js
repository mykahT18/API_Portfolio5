import React, { Component } from 'react';

class Search extends Component{
	render(){
		return(
			<form className="searchForm">
				<input type="text" className="searchBox" placeholder="Harry Potter"/>
				<button className="submitBtn"/>
			</form>
		)
	}

}
export default Search;