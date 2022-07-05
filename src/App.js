import "./style/App.css";
import NavBar from "./structure/navbar/navBar";
import { useAuth0 } from "@auth0/auth0-react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogBtn from "./components/buttonLogin";
import BMenu from "./components/burgerMenu";
import { Outlet } from "react-router-dom";

function App() {

  const { isLoading, isAuthenticated } = useAuth0();
  
  if (isLoading) return <div className="ring">Loading<span id="loading"></span></div>;

  return (
    <>
      {isAuthenticated ? <NavBar /> : <LogBtn />}
      <BMenu/>
      <div className="App">
        <Outlet />
      </div>
    </>
  );
}

export default App;
