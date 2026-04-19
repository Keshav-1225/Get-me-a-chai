import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-800 flex justify-between items-center py-4 text-gray-200'>
      <div className="logo font-extrabold text-3xl hover:text-white hover:cursor-pointer">Get me a Chai</div>
      <div>
        <ul className='flex gap-4 pr-4'>
            <li className='hover:text-white hover:cursor-pointer'>Home</li>
            <li className='hover:text-white hover:cursor-pointer'>About</li>
            <li className='hover:text-white hover:cursor-pointer'>Projects</li>
            <li className='hover:text-white hover:cursor-pointer'>Sign Up</li>
            <li className='hover:text-white hover:cursor-pointer'>login</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
