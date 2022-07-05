import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const HomeButton = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="home-button menu-BTN">
        <NavLink to="/">
          <button className="btn btn-primary">Home</button>
        </NavLink>
      </div>
    )
  );
};

export default HomeButton;
