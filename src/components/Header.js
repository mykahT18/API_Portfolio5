import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
class Header extends Component{
	render(){
		return(
			<header>
				<nav className="navBar">
					<ul className="navList">
						<li><a href="https://github.com/mykahT18/API_Portfolio5">Git Hub</a></li>
						<li><NavLink to="/">Home</NavLink></li>
						<li><NavLink to="/components/Library">My Library</NavLink></li>
					</ul>

				</nav>
			</header>
		)
	}
}
export default Header;