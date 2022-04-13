import { element } from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
 const Cards = () => {
    const { store, actions } = useContext(Context)
    console.log(store)
    return (
        <>
            {store.res.results && store.res.results.map((ele, index) => {
                return (
                    <><div className="row row-cols-1 row-cols-md-9 g-1 mx-2 mb-3"><div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={store.img + ele.uid + ".jpg"} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{ele.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={"/details/" + ele.uid} className="btn btn-primary px-2.5">Learn more</Link>
                            <button type="button" className="btn btn-outline-warning mx-5"><i className="fa fa-heart" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    </div>
                    </>
                )
            })}
        </>
    )
}
export default Cards