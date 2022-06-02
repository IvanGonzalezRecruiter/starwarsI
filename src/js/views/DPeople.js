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
    <div>{store.pjActual.name}</div>
  )
}

export default DPeople