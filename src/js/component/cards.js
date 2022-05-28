import React from "react";
import { Link } from "react-router-dom";

export const Cards = (props) => {

    return (
    
<div className="card" style={{width: "22rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title mb-5">{props.title}</h5>
    {props.charaInfo &&(<div>
         <p className="card-text">Gender: {props.gender}</p>
    <p className="card-text">Hair Color: {props.hairColor}</p>
    <p className="card-text">Eye Color: {props.eyeColor}</p>
    </div>)}
    {props.planetInfo && (<div><p className="card-text">Population: {props.planetInfo.population}</p> 
    <p className="card-text">Terrain: {props.planetInfo.terrain}</p></div>)}
    
    <a href="#" className="btn btn-primary">Learn More</a>
  </div>
</div>

            
    )
    
}