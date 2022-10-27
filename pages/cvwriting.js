
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'


const Cvwriting = () => {
  return (
    <div className='px-10 mt-20'>
      <div className='flex justify-between'>
        <div className='flex flex-col w-1/2 justify-center'>
          <div>
            <h1 className='text-3xl font-bold text-gray-700'>Your CV Is Your Gateway To Success.</h1>
          </div>
          <div>
            <p className='mt-7 text-justify'>We turn to experts for help in our day-to-day chores such as getting a hairstylist to cut our hair, or a mechanic to fix our car, similarly, executive CVs should also be written with the help of experts as its the most important career document in a senior-level candidate’s life. A CV acts like a bridge between you and your potential employer, it represents you before you’re called for an interview. It should be able to convince your employers to call you for an interview. Therefore, professional touch on your CV is highly needed in today’s competitive job market.</p>
          </div>
          <div>
          <Link href={'/contactus'}><button className='mt-7 py-2 rounded-lg bg-orange-500 text-center font-bold text-white px-7 text-lg'>Contact Us</button></Link>          </div>
        </div>
        <div className='flex mx-auto'>
          <Image src="/cvwriting.jpg" width={540} height={478} className='rounded-xl'></Image>
        </div>
      </div>  

    
    </div>
  )
}

export default Cvwriting