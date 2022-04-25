import React, { useContext } from "react";
import "../../styles/details.css";
import { Context } from "../store/appContext";


export const Details = () => {
	const { store, actions } = useContext(Context)
	console.log(store)
	
	return (
		<>
			{store.CharacterDescription.result ? 
				<div className="card mb-3" style={{ width: "540px" }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img src={store.img + store.CharacterDescription.result.uid + ".jpg"} className="img-fluid rounded-start" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{store.CharacterDescription.result.properties.name}</h5>
								<p className="card-text">{store.CharacterDescription.result.description}</p>
								<p className="card-text text-danger"><small>Height: {store.CharacterDescription.result.properties.height}<br></br>Mass: {store.CharacterDescription.result.properties.mass}<br></br>Hair Color: {store.CharacterDescription.result.properties.hair_color}<br></br>Birth Year: {store.CharacterDescription.result.properties.birth_year}<br></br>Skin Color: {store.CharacterDescription.result.properties.skin_color}</small></p>
							</div>
						</div>
					</div>
				</div>
			:
				<h1 className="waitscreen text-center">Loading</h1>
			}
		</>

	);
};
