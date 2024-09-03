import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

export default function App() {
  return (
    <div>
      <UserContextProvider>
        <h1 className='text-4xl text-center'>
          ContextAPI
        </h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}
