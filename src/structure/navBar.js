import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import ProfileButton from "../components/ProfileButton";
import "./nav.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <LoginButton/>
      <LogoutButton />
      <ProfileButton />
    </nav>
  );
};

export default NavBar;
