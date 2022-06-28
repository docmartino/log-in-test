import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const WallButton = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="wall-button">
        <NavLink to="/wall">
          <button className="btn btn-primary">Wall</button>
        </NavLink>
      </div>
    )
  );
};

export default WallButton;
