import React, { useContext } from "react";
import "../../styles/details.css";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
export const Details = () => {
	const { store, actions } = useContext(Context)
	console.log(store)
	return (
		<>

			<div className="card mb-3" style={{ width: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={store.img + store.des.result.uid + ".jpg"} class="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							{/* <h5 className="card-title">{store.des.result.properties.name}</h5> */}
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
			</div>










		</>

	);
};