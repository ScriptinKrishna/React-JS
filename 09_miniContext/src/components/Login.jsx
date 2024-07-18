import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
  let [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleOnClick = () => {

  }
  return (
    <div>
      <h2 className='Text-4xl text-center'>Login</h2>
      <input type="text" placeholder='username'/>
      <input type="password" placeholder='passowrd'/>
      <button onClick={handleOnClick}>Submit</button>
    </div>
  )
}

export default Login
