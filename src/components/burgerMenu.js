import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const BMenu = () => {
  const { logout } = useAuth0();
  const Clicked = () => {
    let menu = document.querySelector(".burger-menu");

      menu.style.display = "none";
  }
  return (
    <div className="burger-menu" style={{display:"none"}}>
      <div className="burger-menu-item">
        <NavLink to="/">
          <button className="btn btn-primary" onClick={Clicked}>Home</button>
        </NavLink>
      </div>{" "}
      <div className="burger-menu-item">
        <NavLink to="/wall">
          <button className="btn btn-primary" onClick={Clicked}>Wall</button>
        </NavLink>
      </div>{" "}
      <div className="burger-menu-item">
        <NavLink to="/profile">
          <button className="btn btn-primary" onClick={Clicked}>Profile</button>
        </NavLink>
      </div>
      <div className="burger-menu-item">
        <NavLink to="/contact">
          <button className="btn btn-primary" onClick={Clicked}>Contact</button>
        </NavLink>
      </div>{" "}
      <div className="burger-menu-item">
        <NavLink to="">
          <button className="btn btn-primary" onClick={logout} style={{color:"red"}}>LogOut</button>
        </NavLink>
      </div>{" "}

    </div>
  );
};

export default BMenu;
