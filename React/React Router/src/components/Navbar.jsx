import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className='text-fuchsia-300 bg-fuchsia-700 flex justify-end items-center gap-2 p-4  '>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </ul>
    </div>
  )
}

export default Navbar
