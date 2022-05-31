import React, {useState, useEffect} from "react";
import "../../styles/home.css";
import { Cards } from "../component/cards";

export const Home = () => {
const [planetas, setPlanetas]=useState([]);
const [personaje, setPersonaje]=useState([])
useEffect(()=>{
fetch("https://www.swapi.tech/api/planets")
.then(res => res.json())
.then(data => {console.log(data)
setPlanetas(data.results)})
.catch(err => console.error(err))
}, [])
useEffect(()=>{
	fetch("https://www.swapi.tech/api/people")
	.then(res => res.json())
	.then(data => {console.log(data)
	setPersonaje(data.results)})
	.catch(err => console.error(err))
	}, [])
	return (
	<div className="container testimonial-group" >
	<div className="row text-center">
		{
		personaje.map((item,index) => (
		<div className="col-sm-6 card-container"><Cards title={item.name} charaInfo={{gender: "male", hairColor: "brown", eyeColor: "blue"}} isFavorite={false}></Cards></div>)
		)}
		
		
	</div>

	<div className="row text-center mt-5">
		{
			planetas.map((item,index) => (<div className="col-sm-6 card-container"><Cards title={item.name} planetInfo={{population: item.population, terrain: item.terrain}}></Cards></div>
			))
		}
			
		
	</div>
	
	
	</div>)
};
