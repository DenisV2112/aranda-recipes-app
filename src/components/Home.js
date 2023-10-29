//Dependecies
import React from "react";
import axios from "axios";

//Components
import RecipeCarousel from "./RecipeCarousel";

//Menu Items
import { menu } from "./menuComponents";

//Hooks
import { useControllers } from "../hooks/useControllers";

function Home() {
  const [ 
    post,
    setPost,
    getMainRecipes
  ] = useControllers();

  React.useEffect(() => {
    getMainRecipes();
  },[]);

  if (!post) 
    
    return <div className="home__tittle-recetas">Page no was found</div>;


  return (
    <div className="home">
      <div className="home-background">
        <div className="home__tittle">
          <h1 className="home__tittle-text">Recetas</h1>
          <spam className="home__tittle-spam">para todos</spam>
        </div>
        <div></div>
      </div>
      <div className="home__menu">
        {menu.map((e) => (
          <div
            type="button"
            className="home__menu-components"
            onClick={() => getMainRecipes()}   /*poner el e.onclick me genera un bucle de peticiones*/ 
          >
            {e.image}
            <p className="home__menu-description">{e.name}</p>
          </div>
        ))}
      </div>
      <h1 className="home__tittle-recetas">Nuevas Recetas</h1>
      <div className="home__recipecarousel">
        {post.recipes == null
          ? post.results.map((e) => {
              return <RecipeCarousel ids={e.id} />;
            })
          : post.recipes.map((e) => {
              return <RecipeCarousel ids={e.id} />;
            })}
      </div>
    </div>
  );
}
export default Home;
