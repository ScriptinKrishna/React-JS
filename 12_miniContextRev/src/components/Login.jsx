import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ password, username });
  };

  return (
    <div>
      <h2>Login</h2>
      <br />
      <input
        type="text"
        placeholder="username"
        aria-label="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        aria-label="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <br />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
// import React, {useState, useContext} from 'react'
// import UserContext from '../Context/UserContext'

// function Login() {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     const {setUser} = useContext(UserContext)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setUser({username, password})
//     }
//   return (
//     <div>
//         <h2>Login</h2>
//         <input type='text'
//         value={username}
//         onChange={(e) => setUsername(e.target.value) }
//         placeholder='username'  />
//         {" "}
//         <input type='text'
//         value={password}
//         onChange={(e) => setPassword(e.target.value) }
//         placeholder='password'  />
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default Login
