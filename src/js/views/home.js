import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return(
	<div>
	{actions.loadSomeData()}
	</div>
	)
};