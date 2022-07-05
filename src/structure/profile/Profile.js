import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    (isAuthenticated && (
      <div className="profile">
        <h2 style={{textAlign:'center'}}>Welcome To your Profile</h2>

        <img src={user.picture} alt={user.name} className="profilepicture" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* <JSONPretty data={user} /> */}
        <input
          type="text"
          name="name"
          defaultValue={user.name}
          style={{ width: "200px" }}
        />
        <input
          type="text"
          name="name"
          defaultValue={user.email}
          style={{ width: "200px" }}
        />

        {/* {JSON.stringify(user, null, 2)} */}
      </div>
    )) || <div className="profile">Please log in</div>
  );
};

export default Profile;
