import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth0();
  if (isAuthenticated) {
    return (
      <div className="dashboard">
        <h2>Welcome {user.name}</h2>
        <p>You are logged in to the APP</p>
      </div>
    );
  }
};

export default Dashboard;
