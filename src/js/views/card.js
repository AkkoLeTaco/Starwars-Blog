import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
 const Cards = () => {
    const { store, actions } = useContext(Context)
    const image = "https://starwars-visualguide.com/assets/img/characters/"
console.log(store)
function getId(url) {
    return url.split('/')[url.split('/').length - 1]
  }
    return (
        <div>
            {store.res.results && store.res.results.map((ele, index) => {
                return (
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={image + getId(ele.url) + ".jpg"} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{ele.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Learn more</a>
                            <button type="button" className="btn btn-outline-warning"><i className="fa fa-heart" aria-hidden="true"></i></button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Cards