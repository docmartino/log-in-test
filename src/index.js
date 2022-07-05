import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./structure/profile/Profile";
import Contact from "./structure/contact/Contact";
import Wall from "./structure/wall/Wall";
import Dashboard from "./structure/dashboard/Dashboard";


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Routes>
        {" "}
        <Route path="/" element={<App />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wall" element={<Wall />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);
