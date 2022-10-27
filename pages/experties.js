import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Experties = () => {
  return (
    <div className='px-10 mt-20'>
      <div className='flex justify-between'>
        <div className='flex flex-col w-1/2 justify-center'>
          <div>
            <h1 className='text-3xl font-bold text-gray-700'>At Serviam manpower, quality service is our top priority.</h1>
          </div>
          <div>
            <p className='mt-7 text-justify'>We are one of the best HR consultancy services in India. We have served numerous companies belonging to different sectors over the years. We are always ready to help various industries with recruitment challenges in the ever-evolving employment world. </p>
            <p className='mt-7 text-justify'>We scale in all areas of recruitment, including RPO, staffing, and executive search. We have extensive experience in finding the best talent for you thanks to a decade of conducting talent acquisition for numerous industries.</p>
          </div>
          <div>
          <Link href={'/contactus'}><button className='mt-7 py-2 rounded-lg bg-orange-500 text-center font-bold text-white px-7 text-lg'>Contact Us</button></Link>          </div>
        </div>
        <div className='flex mx-auto'>
          <Image src="/experties.jpg" width={500} height={478} className='rounded-xl'></Image>
        </div>
      </div>


    </div>
  )
}

export default Experties