import "./styles/App.css";
import React from "react";
import { useState } from "react";
import axios from "./api/axios";

function App() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [Auth, setAuth] = useState(false);
  const [success, setSuccess] = useState(false);
  cosnt [errMsg, setErrMsg] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    console.log(email + " " + pwd);

    const user = { email: email, pwd: pwd };


  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, pwd);
    try {
      const userSend = {
        password: `${pwd}`,
        email: `${email}`,
        username: `${email}`,
      };
      // userPast = userSend;
      const response = await axios.post("/users", JSON.stringify(userSend), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // withCredentials: true
      });
      console.log(JSON.stringify(response.data));
      const accessToken = response.data.token;

      setAuth({ email, pwd, accessToken });
      setEmail("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err.response) {
        setErrMsg("No server Response");
      } else if (err.response.status === 400) {
        setErrMsg("Incorrect email or password");
      } else if (err.response.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  }
  
  // const FetchUsers = async () => {
  //   try {
  //     const response = await axios.post("/users", JSON.stringify(user), {
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     console.log(response.data);
  //   } catch (err) {
  //     if (err.response) {
  //       console.log(err.response);
  //     } else {
  //       console.log(`Error: ${err.message}`);
  //     }
  //   }
  //   setPwd("");
  //   setEmail("");
  // };


  return (
    <div className="App">
      <div className="logContainer">
        <div className="log">
          <form className="form">
            <label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </label>
            <button type="submit" onClick={Submit}>
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
