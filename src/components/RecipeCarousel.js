//Dependencies
import axios from "axios";
import React from "react";

//Assents
import ic_favorite from "../assenst/icons/ic_favorite.svg";
import ic_star from "../assenst/icons/ic_star.svg";
import ic_portion from "../assenst/icons/ic_portion.svg";
import ic_time from "../assenst/icons/ic_time.svg";
import ic_chef from "../assenst/icons/ic_chef.svg";

//Hooks
import { useControllers } from "../hooks/useControllers";


function RecipeCarousel({ids}) {
  const [ 
    post,
    recipe,
    setPost,
    setRecipes,
    getRecipes,
    getMainRecipes,
    getRecipesCarousel,
  ] = useControllers();


  React.useEffect(() => {
  getRecipesCarousel(ids) }
, []);
 if(!recipe) return null;
  
  if (ids !== recipe.id ) 
  getRecipesCarousel(ids)

  

  return (
    <>
      <div key={recipe.id} className="carousel">
        <div className="carousel__food">
          <img className="carousel__food-img" src={recipe.image} />
          <h1 className="carousel__food-text">
            {recipe.title}
            <spam className="carousel__food-spam">{}</spam>
          </h1>
        </div>{" "}
        <div className="carousel-icons">
          <div className="carousel__star">
            <img src={ic_star} />
            <p className="carousel__star-text"> {recipe.aggregateLikes}   </p>
          </div>
          <div className="carousel__star">
          <img src={ic_favorite} className="carousel__favorite" />
            <p className="carousel__star-text">{recipe.healthScore}</p>
          </div>
          
        </div>
        <div className="carousel__hoverElements">
          <div className="carousel__hoverElements-contenedores">
            <img className="carousel__hoverElements-img" src={ic_portion} />
            <p className="carousel__hoverElements-description">
              Tamano de porcion
            </p>
            <p className="carousel__hoverElements-info">
              {recipe.servings} raciones
            </p>
          </div>
          <div className="carousel__hoverElements-contenedores">
            <img className="carousel__hoverElements-img" src={ic_time} />
            <p className="carousel__hoverElements-description">
              Tiempo de preparacion
            </p>
            <p className="carousel__hoverElements-info">
              {recipe.readyInMinutes} minutos
            </p>
          </div>
          <div className="carousel__hoverElements-contenedores">
            <img className="carousel__hoverElements-img" src={ic_chef} />
            <p className="carousel__hoverElements-description">Dificultad</p>
            <p className="carousel__hoverElements-info">Facil</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default RecipeCarousel;
