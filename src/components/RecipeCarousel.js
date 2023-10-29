//Dependencies
import axios from "axios";
import React from "react";

//Assents
import ic_favorite from "../assenst/icons/ic_favorite.svg";
import ic_star from "../assenst/icons/ic_star.svg";
import ic_portion from "../assenst/icons/ic_portion.svg";
import ic_time from "../assenst/icons/ic_time.svg";
import ic_chef from "../assenst/icons/ic_chef.svg";


function RecipeCarousel({ ids }) {
 const[
  recipes,
  setRecipes
  ] = React.useState('');
//intentar crear esta constante en el hook
  const getCarouselRecipes =()=>{
    axios
    .get(`https://api.spoonacular.com/recipes/${ids}${process.env.REACT_APP_ENDPOINT_RECIPES2}`)
    .then((response) => {
      setRecipes(response.data);
    })
    .then(console.log);
  }

  React.useEffect(() => {
   getCarouselRecipes()
  }, []);

  if (!recipes) return null;
  
  if (ids !== recipes.id) 
  getCarouselRecipes()
    

  return (
    <>
      <div key={recipes.id} className="carousel">
        <div className="carousel__food">
          <img className="carousel__food-img" src={recipes.image} />
          <h1 className="carousel__food-text">
            {recipes.title}
            <spam className="carousel__food-spam">{}</spam>
          </h1>
        </div>{" "}
        <div className="carousel-icons">
          <div className="carousel__star">
            <img src={ic_star} />
            <p className="carousel__star-text"> {recipes.aggregateLikes}   </p>
          </div>
          <div className="carousel__star">
          <img src={ic_favorite} className="carousel__favorite" />
            <p className="carousel__star-text">{recipes.healthScore}</p>
          </div>
          
        </div>
        <div className="carousel__hoverElements">
          <div className="carousel__hoverElements-contenedores">
            <img className="carousel__hoverElements-img" src={ic_portion} />
            <p className="carousel__hoverElements-description">
              Tamano de porcion
            </p>
            <p className="carousel__hoverElements-info">
              {recipes.servings} raciones
            </p>
          </div>
          <div className="carousel__hoverElements-contenedores">
            <img className="carousel__hoverElements-img" src={ic_time} />
            <p className="carousel__hoverElements-description">
              Tiempo de preparacion
            </p>
            <p className="carousel__hoverElements-info">
              {recipes.readyInMinutes} minutos
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
