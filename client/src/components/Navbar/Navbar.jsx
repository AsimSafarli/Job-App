'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {
  const [open,setOpen] =useState(false)
  return (
    <header className='container p-10 mx-auto' >
   
    <nav className='flex flex-row justify-between '>
     <div className='text-xl text-blue-800'>
      Job
    </div>
    <ul className='flex flex-row gap-2 items-center justify-between'>
        <Link href='/' className='hover:text-blue-800'>Home</Link>
        <Link href='/job' className='hover:text-blue-800'>Jobs</Link>
        <Link href='/about' className='hover:text-blue-800'>About</Link>
        <Link href='/contact' className='hover:text-blue-800'>Contact</Link>
    </ul>
    <ul className='flex flex-row gap-x-2 '>
    <Link href='/register' className='p-1 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white'>Register</Link>
      <Link href='/login' className='p-1 bg-blue-800 text-white hover:border hover:border-blue-800 hover:text-blue-800 hover:bg-transparent	'>Login</Link>
    </ul>
    </nav>
   </header>
  )
}

export default Navbar