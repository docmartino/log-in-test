import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";
import ProfileButton from "../../components/ProfileButton";
import ContactButton from "../../components/ContactButton";
import Home from "../../components/HomeButton";
import Wall from "../../components/WallButton";
import './navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1> Yopla App </h1>
      <Home />
      <Wall />
      <ProfileButton />
      <ContactButton />
      <LoginButton/>
      <LogoutButton />
    </nav>
  );
};

export default NavBar;
