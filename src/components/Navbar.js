//Dependencies
import React from "react";
import axios from "axios";

//Components
import { menu, home } from "./menuComponents";

//Hooks
import { useControllers } from "../hooks/useControllers";

function Navbar() {
  const [ 
    post,
    recipes,
    setPost,
    setRecipes,
    getRecipes,
    getMainRecipes,
    getRecipesCarousel
  ] = useControllers();
  
  return (
    <nav className="navbar">
      <div className="navbar__text">
        Recipe<spam className="navbar__text-colorRed">App</spam>
      </div>
      <div className="navbar__routes">
        <ul
          className="navbar__routes-ul"
          onClick={() => getRecipes(home.query)}
        >
          {home.name}
        </ul>
        {menu.map((e) => (
          <ul
            className="navbar__routes-ul"
            onClick={() => getRecipes(e.query)}
          >
            {e.shortname}
          </ul>
        ))}
      </div>
      <div
        className="navbar__home-img"
        onClick={() => getRecipes(home.query)}
      >
        {home.image}
      </div>
    </nav>
  );
}
export default Navbar;