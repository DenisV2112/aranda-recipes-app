//Dependecies
import axios from "axios";
import { useState } from "react";


export const useControllers = () => {
 const [post, setPost] = useState();
  
   
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


  return [
    post, 
    setPost,
    getMainRecipes,
  ];
};