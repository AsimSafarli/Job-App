import React from 'react'
import Image from 'next/image'
function Banner() {
  return (
    <div className=' flex flex-row justify-between'>
    <div>
    <div className='text-5xl font-medium'>Find a job that suits <br/> your interest & skills.</div>
    </div>
    <div>
        <Image src='/banner.png' width={492} height={382}/>
    </div>
    </div>
  )
}

export default Banner