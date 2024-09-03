import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleOnClick = (e) => {
    e.preventDefault();
    setUser(username); // Only set username for simplicity
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl text-center">Login</h2>
      <input
        type="text"
        className="border p-2 text-black"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        className="border p-2"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="border p-2" onClick={handleOnClick}>Submit</button>
    </div>
  );
}

export default Login;
