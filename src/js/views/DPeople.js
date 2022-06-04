import React, {useEffect, useContext} from 'react'
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
const DPeople = () => {
    const { store, actions } = useContext(Context);
	const params = useParams();
	console.log('ACTIONS')
useEffect( () => {
    actions.charaInfo(params.uid);
}, [])

  return (
    <div >
      <h1 className='container'>{store.pjActual.name}</h1>
      <div className='d-flex'>  
      <p className='m-3'>Height: {store.pjActual.height}</p>
      <p className='m-3'>Mass: {store.pjActual.mass}</p>
      <p className='m-3'>Skin Color: {store.pjActual.skin_color}</p>
      <p className='m-3'>Eye Color: {store.pjActual.eye_color}</p>
      <p className='m-3'>Year of birth: {store.pjActual.birth_year}</p>
      <p className='m-3'>Gender: {store.pjActual.gender}</p>
      </div>
    
      </div>
  )
}

export default DPeople