import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Dropdown
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenu2">
						<button className="dropdown-item" type="button">Action</button>
						<button className="dropdown-item" type="button">Another action</button>
						<button className="dropdown-item" type="button">Something else here</button>
					</div>
				</div>
			</div>
		</nav>
	);
};
