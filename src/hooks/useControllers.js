//Dependecies
import axios from "axios";
import { useState } from "react";


export const useControllers = () => {
 const [post, setPost] = useState();
 const[recipes, setRecipes] = useState();
  
 const getMainRecipes = () => {
  axios
  .get(
    `${process.env.REACT_APP_ENDPOINT_POST}`
  )
  .then((response) => {
    setPost(response.data);
  })
  .then(console.log);
  
};

const getRecipes = (query) => {
  axios
  .get(
    `${process.env.REACT_APP_ENDPOINT_RECIPES}${query}`
  )
  .then((response) => {
    setPost(response.data);
  })
  .then(console.log);
  
  
};

const getRecipesCarousel = (ids) => {

  axios
  .get(`https://api.spoonacular.com/recipes/${ids}${process.env.REACT_APP_ENDPOINT_RECIPES2}`)
  .then((response) => {
    setRecipes(response.data);
  })
  .then(console.log);

}


  return [
    post, 
    recipes,
    setPost,
    setRecipes,
    getRecipes,
    getMainRecipes,
    getRecipesCarousel
  ];
};