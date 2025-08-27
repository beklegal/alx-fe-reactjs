import React, { useContext } from "react";
import { UserContext } from "./context/UserContext"; // adjust path if needed

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({ name: "Boamah Evans", email: "boamah@example.com" });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email || "Not provided"}</p>
      <button onClick={handleLogin}>Login as Boamah Evans</button>
    </div>
  );
};

export default UserProfile;
