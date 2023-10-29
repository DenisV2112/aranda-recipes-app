//Dependencies
import React from "react";
import axios from "axios";

//Components
import { menu, home } from "./menuComponents";

//Hooks
import { useControllers } from "../hooks/useControllers";

function Navbar() {
  

  const setPost = useControllers();

  return (
    <nav className="navbar">
      <div className="navbar__text">
        Recipe<spam className="navbar__text-colorRed">App</spam>
      </div>
      <div className="navbar__routes">
        <ul
          className="navbar__routes-ul"
          onClick={function getRecipes() {
            axios
              .get(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=fa85de31b05345ce861061c6ca0246a4&number=5`
              )
              .then((response) => {
                setPost(response.data);
              })
              .then(console.log);
            console.log("esta funcionando recetas home ");
          }}
        >
          {home.name}
        </ul>
        {menu.map((e) => (
          <ul
            className="navbar__routes-ul"
            onClick={ function getRecipes(){
              axios
               .get(e.onclick)
               .then((response) => {
                 setPost(response.data);
               })
               .then(console.log);
              console.log("esta funcionando recetas " + e.name  +setPost + 'hello denis');
            }}
          >
            {e.shortname}
          </ul>
        ))}
      </div>
      <div
        className="navbar__home-img"
        onClick={function getRecipes() {
          axios
            .get(home.url)
            .then((response) => {
              setPost(response.data);
            })
            .then(console.log);
          console.log("esta funcionando recetas home");
        }}
      >
        {home.image}
      </div>
    </nav>
  );
}
export default Navbar;