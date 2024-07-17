import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div>
      <h1 className='text-4xl text-center p-3 bg-blend-darken bg-black text-white'>User : {userid}</h1>
    </div>
  )
}

export default User
