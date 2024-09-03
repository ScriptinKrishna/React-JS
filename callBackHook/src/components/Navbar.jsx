import React, {memo} from 'react'

const Navbar = ({adjective, getAdjective}) => {
  console.log("navbar is rendered");
  return (
    <div>
      I am a {adjective} navbar
      <button onClick={() => {getAdjective()}}>I am a btn</button>
    </div>
  )
}

export default memo(Navbar)
