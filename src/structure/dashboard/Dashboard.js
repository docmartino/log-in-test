import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated)
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100%"
        }}
      >
        Please log in to <br/>enter in the App
      </div>
    );
  if (isAuthenticated) {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <p>You are logged in!</p>
      </div>
    );
  }
};

export default Dashboard;
