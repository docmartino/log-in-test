import "./App.css";
import Profile from "./structure/profile/Profile";
import Contact from "./structure/contact/Contact";
import NavBar from "./structure/navbar/navBar";
import Dashboard from "./structure/dashboard/Dashboard";
import Wall from "./structure/wall/Wall";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <Routes>
            {" "}
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/wall' element={<Wall />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
