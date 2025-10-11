import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='fixed bg-white flex w-full h-20 items-center justify-between p-4 border-b border-gray-200'>
      <div className='flex items-center'>
        <img width="44" height="14" src="https://img.icons8.com/nolan/64/calendar.png" alt="calendar"/>
        <h1 className="ml-2 self-center text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">EventCheck</h1>
      </div>
      <Link to="/signin" className='cursor-pointer px-2 py-1 rounded-md bg-purple-600 text-white font-medium'>
        Sign in.
      </Link>
    </nav>
  )
}

export default Nav