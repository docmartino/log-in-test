import { useAuth0 } from "@auth0/auth0-react";

const ProfileButton = () => {
    const { isAuthenticated } = useAuth0();
    return (

        isAuthenticated && (
        
        <div className="profile-button">
        <button className="btn btn-primary">Profile</button>
        </div>
        )
    );
}

export default ProfileButton;