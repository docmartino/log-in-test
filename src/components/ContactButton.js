import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const ProfileButton = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="profile-button ">
        <NavLink to="/contact">
          <button className="btn btn-primary menu-BTN">
            Contact
          </button>
        </NavLink>
      </div>
    )
  );
};

export default ProfileButton;
