import { ReactComponent as Burger } from "../assets/icons/burger.svg";
import { NavLink } from "react-router-dom";

const BurgerDiv = () => {
  const Clicked = () => {
    let menu = document.querySelector(".burger-menu");

    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };
  return (
    <div className="burger" onClick={Clicked}>
      <Burger id="burger" />
    </div>
  );
};

export default BurgerDiv;
