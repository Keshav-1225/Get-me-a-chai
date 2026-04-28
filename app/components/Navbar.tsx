import React from 'react'
import Link from 'next/link'
import { Button } from '../../components/ui/button'
const Navbar = () => {
  return (
    <div className='bg-gray-900 flex justify-between items-center py-4 text-gray-200'>
      <div className="logo font-extrabold text-3xl hover:text-white hover:cursor-pointer">Get me a Chai</div>
      <div>
        <ul className='flex gap-4 pr-4'>
            <li className='hover:text-white hover:cursor-pointer'>Home</li>
            <li className='hover:text-white hover:cursor-pointer'>About</li>
            <li className='hover:text-white hover:cursor-pointer'>Projects</li>
            <li className='hover:text-white hover:cursor-pointer'>Sign Up</li>
            <li className='hover:text-white hover:cursor-pointer'>
            <Link href={"/login"}>
            <Button variant={"white"}>
              Login
            </Button>
            </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
