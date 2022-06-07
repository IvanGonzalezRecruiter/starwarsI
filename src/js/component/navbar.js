import { element } from "prop-types";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
  console.log(store);
	return (
		<nav className="navbar navbar-light navbar-expand-sm bg-light mb-3 ">
			
	<div className="dropdown ">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Favorites
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {store.favoritos.map((element)=>{
      return(
        <li>{element}</li>
      )
    })}
  </ul>
</div>
		</nav>
	);
};
