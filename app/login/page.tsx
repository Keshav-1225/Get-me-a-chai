"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import Link from 'next/link'
import ChaiGif from '../assets/coffee-break.gif'
// import { Field, FieldDescription, FieldLabel } from '../../components/ui/input'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'

import NextAuth from 'next-auth'
// import 

const page = () => {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
  return (
    <div className='bg-blue-950 text-white min-h-screen'>
      {/* <div className='mt-6 w-screen flex justify-center text-4xl font-semibold'>Login to get your fans to support you</div> */}
      <div className='flex min-h-[90vh]'>
        <div className='flex-col w-[50vw] flex justify-center items-center text-6xl font-extrabold'>
          <div><img src={ChaiGif.src} width={400} alt='Coffee break' /></div>
          <div>
            Get me a Chai
          </div>
        </div>
        <div className='w-[50vw] flex justify-center items-center'>
          <div className='w-[40vw] h-[80vh] rounded-2xl bg-white px-10 text-slate-950 shadow-2xl pt-[10vh]'>
            <div className='flex w-full justify-center pt-10 text-4xl font-bold text-emerald-700'>Welcome Back!</div>
            <div className='flex flex-col gap-4 pt-10'>
              <Input className='h-11 border-slate-300 bg-slate-50 px-4 text-slate-950 placeholder:text-slate-500 focus-visible:border-emerald-600 focus-visible:ring-emerald-600/25' placeholder='Email'></Input>
              <Input className='h-11 border-slate-300 bg-slate-50 px-4 text-slate-950 placeholder:text-slate-500 focus-visible:border-emerald-600 focus-visible:ring-emerald-600/25' placeholder='Password' type='password'></Input>
              <Button variant={"blue"} className={"p-6 text-lg"}>Login</Button>
              <div className='text-center text-sm text-slate-600'>
                Don&apos;t have an account? <Link href={"/sign-in"}>sign-in</Link>
              </div>
              <button className='flex h-11 items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-800 shadow-sm transition-colors hover:bg-slate-50'>
                <svg className='h-5 w-5' viewBox='0 0 24 24' aria-hidden='true'>
                  <path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' />
                  <path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' />
                  <path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' />
                  <path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z' />
                </svg>
                Sign in with google
              </button>
              <button className='flex h-11 items-center justify-center gap-3 rounded-lg bg-slate-950 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-slate-800'>
                <svg className='h-5 w-5' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                  <path d='M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.64-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.12 10.12 0 0 0 22 12.26C22 6.58 17.52 2 12 2z' />
                </svg>
                Sign in with github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
