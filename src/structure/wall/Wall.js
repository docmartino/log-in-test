import { useAuth0 } from "@auth0/auth0-react";

const Wall = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) return <div>Please log in</div>;
  if (isAuthenticated) {
    return (
      <div className="dashboard">
        <h2>Welcome To Wall</h2>
      </div>
    );
  }
};

export default Wall;
