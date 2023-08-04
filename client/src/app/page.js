import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <header>
    <div>
      Job
    </div>
    <nav>
      <Link href='/register'>Register</Link>
      <Link href='/login'>Login</Link>

    </nav>
   </header>
  )
}
