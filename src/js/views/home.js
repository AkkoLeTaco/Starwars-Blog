import React, {useContext} from "react";
import "../../styles/home.css";
import Cards from "../component/Card.jsx";

export const Home = () => {
	return(
	<div className="container">
		<div className="justify-content-center card-group">
			<Cards />
		</div>
	</div>
	)}