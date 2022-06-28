import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className='buttunLogOut'>
        <button className="logBtnOut" onClick={() => logout()}>
          Log Out
        </button>
      </div>
    )
  );
};

export default LoginButton;
