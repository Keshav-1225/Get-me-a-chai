"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { LayoutDashboard, UserRound, LogOut, UserIcon } from 'lucide-react'

import { Button } from '../../components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../../components/ui/dropdown-menu'


const Navbar = () => {
  const { data: session } = useSession()
  const router = useRouter()
  let username = `${session?.user?.name}`.split("%20").join("-")
  function gotoDashboard()
  {
      const router = useRouter()
      router.push("/dashboard")
  }
  return (
    <div className='bg-gray-900 flex justify-between items-center py-4 text-gray-200'>
      <div className="logo font-extrabold text-3xl hover:text-white hover:cursor-pointer" onClick={()=>{router.push("/")}}>Get me a Chai</div>
      <div>
        <ul className='flex gap-4 pr-4'>
          {session &&

            <li className='hover:text-white hover:cursor-pointer'>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant={"blue"}>Welcome {`${session?.user?.name}`}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={()=>{router.push("/dashboard")}}>
                    <LayoutDashboard /> Dashboard 
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={()=>{router.push(`/${session.user?.name}`)}}>
                    <UserIcon /> Your Profile 
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut /> Dashboard 
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          }
          {!session &&

            <li className='hover:text-white hover:cursor-pointer'>
              <Link href={"/login"}>
                <Button variant={"white"}>
                  Login
                </Button>
              </Link>
            </li>
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
