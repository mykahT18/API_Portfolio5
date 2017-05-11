import React, { Component } from 'react';
import Bookmarks from '../bookmarks.svg';

class Header extends Component{
	render(){
		return(
			<header>
				<nav className="navBar">
					<img src={Bookmarks} alt=""/>
					<ul className="navList">
						<li><a href="#">Home</a></li>
						<li><a href="#">Reading List</a></li>
					</ul>
				</nav>
			</header>
		)
	}
}
export default Header;