import React from "react";
import "../../styles/home.css";
import { Cards } from "../component/cards";

export const Home = () => (
	<div className="container testimonial-group" >
	<div className="row text-center">
		<div className="col-sm-6 card-container"><Cards title="Anakin Skywalker" charaInfo></Cards></div>
		<div className="col-sm-6 card-container"><Cards title="titulo"></Cards></div>
		<div className="col-sm-6 card-container"><Cards title="titulo"></Cards></div>
		<div className="col-sm-6 card-container"><Cards title="titulo"></Cards></div>
		<div className="col-sm-6 card-container"><Cards title="titulo"></Cards></div>
		<div className="col-sm-6 card-container"><Cards title="titulo"></Cards></div>
		<div className="col-sm-6 card-container"><Cards title="titulo"></Cards></div>
		<div className="col-sm-6 card-container"><Cards title="titulo"></Cards></div>
	</div>
	
	</div>
);
