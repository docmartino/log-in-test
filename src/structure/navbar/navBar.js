import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";
import ProfileButton from "../../components/ProfileButton";
import ContactButton from "../../components/ContactButton";
import Home from "../../components/HomeButton";
import Wall from "../../components/WallButton";
import "../../style/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1> My App  </h1>
      <div className='btnNavBarMenu'>
      <Home />
      <Wall />
      <ProfileButton />
      <ContactButton />
      </div>
      <LoginButton/>
      <LogoutButton />

    </nav>
  );
};
export default NavBar;

