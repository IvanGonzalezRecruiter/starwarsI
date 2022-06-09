import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
const DPlanets = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log("ACTIONS");

  useEffect(() => {
    actions.planetInfo(params.uid);
  }, []);
  return (
    <div>
      <h1 className="container">{store.planetaActual.name}</h1>
      <div className="d-flex">
        <p className="m-3">Diameter: {store.planetaActual.diameter}</p>
        <p className="m-3">
          Rotation Period: {store.planetaActual.rotation_period}
        </p>
        <p className="m-3">
          Orbital Period: {store.planetaActual.orbital_period}
        </p>
        <p className="m-3">Gravity: {store.planetaActual.gravity}</p>
        <p className="m-3">Population: {store.planetaActual.population}</p>
      </div>
    </div>
  );
};

export default DPlanets;
