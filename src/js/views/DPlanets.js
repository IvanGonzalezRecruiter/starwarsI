import React, {useEffect, useContext} from 'react'
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
const DPlanets = () => {
    const { store, actions } = useContext(Context);
	const params = useParams();
	console.log('ACTIONS')

    useEffect( ()=>{
		actions.planetInfo(params.uid);
        
	} , [] )
  return (
    <div className='container'>
        <h1>{store.planetaActual.name}</h1>
        <p>{store.planetaActual.diameter}</p>
        <p>{store.planetaActual.rotation_period}</p>
        <p>{store.planetaActual.orbital_period}</p>
        <p>{store.planetaActual.gravity}</p>
        <p>{store.planetaActual.population}</p>


        </div>
  )
}

export default DPlanets