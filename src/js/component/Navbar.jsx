import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.CharacterFavorite && store.CharacterFavorite.map((ele, index) => {
							return(
								<>
								<Link to={"/details/" + ele.uid}>
									<li key={index} onClick={() => { actions.loadDetails(ele.uid); } }><p className="dropdown-item">{ele.name}</p></li>
								</Link>
								<button onClick={() => {actions.deleteFavorites(index)} }><i className="fa fa-trash" aria-hidden="true"></i></button>
								</>		
							)
						})}
					</ul>
			</div>
		</nav>
	);
};
