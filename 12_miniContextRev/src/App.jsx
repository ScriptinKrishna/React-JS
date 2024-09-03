import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <h1>Hello Mom!</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
