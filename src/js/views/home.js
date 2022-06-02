import React, {useState, useEffect, useContext} from "react";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";

export const Home = () => {
const { store, actions } = useContext(Context);
useEffect(()=>{
actions.loadCharaData();
actions.loadPlanetData();
}, [])
	return (
	<div className="container testimonial-group" >
	<div className="row text-center">
		{
		store.people.map((item,index) => (
		<div className="col-sm-6 card-container"><Cards title={item.name} charaInfo={{gender: "male", hairColor: "brown", eyeColor: "blue"}} isFavorite={false}></Cards></div>)
		)}
		
		
	</div>

	<div className="row text-center mt-5">
		{
			store.planets.map((item,index) => (<div className="col-sm-6 card-container"><Cards title={item.name} planetInfo={{population: item.population, terrain: item.terrain}}></Cards></div>
			))
		}
			
		
	</div>
	
	
	</div>)
};
