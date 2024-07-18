import React from 'react'
import UserContextProvider from './context/UserContextProvider'

export default function App() {
  return (
    <div>
      <UserContextProvider >
        <h1 className='text-4xl text-center'>
          ContextAPI
        </h1>
      </UserContextProvider>
    </div>
  )
}
