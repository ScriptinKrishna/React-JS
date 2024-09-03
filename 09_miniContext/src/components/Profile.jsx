import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  
  if (!user) return <div className="text-center">Please enter full details</div>;
  
  return <div className="text-center">Welcome {user}</div>;
}

export default Profile;
