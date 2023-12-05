//Assenst
import ic_cake from "../assenst/icons/ic_cake.svg";
import ic_fast_food from "../assenst/icons/ic_fast_food.svg";
import ic_kids from "../assenst/icons/ic_kids.svg";
import ic_main from "../assenst/icons/ic_main.svg";
import ic_soup from "../assenst/icons/ic_soup.svg";
import ic_vegetarian from "../assenst/icons/ic_vegetarian.svg";
import ic_home from "../assenst/icons/ic_home.svg";


export const menu = [
  {
    name: "Vegetarianos",
    image: <img className="home__menu-img" src={ic_vegetarian} />,
    shortname: "Vegetarianos",
    query: `&tags=vegetarian&number=10`,
  },
  {
    name: "Principales",
    image: <img className="home__menu-img" src={ic_main} />,
    shortname: "Platos Principales",
    query: `&type=maincourses&number=10`,
  },
  {
    name: "Tortas",
    image: <img className="home__menu-img" src={ic_cake} />,
    shortname: "Tortas",
    query: `&query=cakes&number=10`,
  },
  {
    name: "Rapida",
    image: <img className="home__menu-img" src={ic_fast_food} />,
    shortname: "Comida rapida",
    query: `&query=fast&number=10`,
  },
  {
    name: "Ninos",
    image: <img className="home__menu-img" src={ic_kids} />,
    shortname: "Menu Ninos",
    query: `&query=kids&number=10`,
  },
  {
    name: "Sopas",
    image: <img className="home__menu-img" src={ic_soup} />,
    shortname: "Sopas",
    query: `&type=soup&number=10`,
  },
];
export const home = {
  name: "Home",
  image: <img className="home__menu-img" src={ic_home} />,
};
