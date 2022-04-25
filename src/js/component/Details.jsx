import React, { useContext } from "react";
import "../../styles/details.css";
import { Context } from "../store/appContext";


export const Details = () => {
	const { store, actions } = useContext(Context)
	console.log(store)
	
	return (
		<>
			{store.CharacterDescription.result ? 
				<div className="card mb-3" style={{ width: "1000px" }}>
					<div className="row g-0">
						<div className="col">
									<img src={store.img + store.CharacterDescription.result.uid + ".jpg"} className="img-fluid rounded-start" alt="..." />
								</div>
						<div className="col-md-8">
							<div className="card-body">
								
								<div className="col justify-content-right">
									<h5 className="card-title">{store.CharacterDescription.result.properties.name}</h5>
									<p className="card-text">{store.CharacterDescription.result.description}</p>
								</div>
								
							</div>
						</div>
					</div>
					<hr></hr>
					<div className="d-flex d-flex justify-content-evenly text-danger">
						<div>
							<h4>Height:</h4>
							<p>{store.CharacterDescription.result.properties.height}</p>
						</div>
						<div>
							<h4>Mass:</h4>
							<p>{store.CharacterDescription.result.properties.mass}</p>
						</div>
						<div>
							<h4>Birth Year:</h4>
							<p>{store.CharacterDescription.result.properties.birth_year}</p>
						</div>
						<div>
							<h4>Hair Color:</h4>
							<p>{store.CharacterDescription.result.properties.hair_color}</p>
						</div>
						<div>
							<h4>Skin Color:</h4>
							<p>{store.CharacterDescription.result.properties.skin_color}</p>
						</div>
					</div>
				</div>
			:
				<h1 className="waitscreen text-center">Loading</h1>
			}
		</>

	);
};
