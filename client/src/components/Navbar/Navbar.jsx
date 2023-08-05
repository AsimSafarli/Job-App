import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {
  return (
    <header className='container p-10 mx-auto' >
   
    <nav className='flex flex-row justify-between'>
     <div>
      Job
    </div>
    <ul className='flex flex-row gap-2 items-center justify-between'>
        <Link href='/'>Home</Link>
        <Link href='/job'>Jobs</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
    </ul>
    <ul>
    <Link href='/register'>Register</Link>
      <Link href='/login'>Login</Link>
    </ul>
    </nav>
   </header>
  )
}

export default Navbar