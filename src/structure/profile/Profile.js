import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    (isAuthenticated && (
      <div className="profile">
        <div className="containerProfile">
          <div className="profile-pic">
            <div>
              {" "}
              <img
                src={user.picture}
                alt={user.name}
                className="profilepicture"
              />
            </div>
            <div>
              <h2 style={{ textAlign: "center" }}>
                Welcome To your Profile <br />
                <em>
                  <b>{user.name}</b>
                </em>{" "}
              </h2>
            </div>
          </div>
          <input
            type="text"
            name="name"
            defaultValue={user.nickname}
            style={{ width: "100%" }}
          />
          <input
            type="text"
            name="name"
            defaultValue={user.email}
            style={{ width: "100%" }}
          />
          <input
            type="text"
            name="name"
            defaultValue={user.sub}
            style={{ width: "100%" }}
          />

          <div className="buttonProfile" style={{ width: "100%" }}>
            <button>Save change</button>
          </div>

          <div style={{ width: "100%", marginTop: "25px" }}>
            {JSON.stringify(user, null, 2)}
            {/* <JSONPretty data={user} /> */}
          </div>
        </div>
      </div>
    )) || <div className="profile">Please log in</div>
  );
};

export default Profile;
