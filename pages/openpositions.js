import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Openpositions = () => {
  return (
    <div className='px-10 mt-20'>
    <div className='flex justify-between'>
      <div className='flex flex-col w-1/2 justify-center'>
        <div>
          <h1 className='text-3xl font-bold text-gray-700'>ARE YOU THE ONE?</h1>
        </div>
        <div>
          <p className='mt-7 text-justify'>We are one of the best recruitment agencies located in Mumbai and Navi Mumbai. We are constantly looking for people that have what it takes to work in leading companies from leading industries. Let us help you achieve your dream of working in prestigious organizations that will put you on your way to success.</p>
          <p className='mt-7 text-justify'>On our page, we always post the latest jobs and exciting job opportunities making your job search easy. Continue to visit our website to find your desired job posting and obtain a fast job through serviam.</p>
        </div>
        <div>
        <Link href={'/contactus'}><button className='mt-7 py-2 rounded-lg bg-orange-500 text-center font-bold text-white px-7 text-lg'>Contact Us</button></Link>        </div>
      </div>
      <div className='flex mx-auto'>
        <Image src="/positions.jpg" width={450} height={478} className='rounded-xl'></Image>
      </div>
    </div>  

  
  </div>  )
}

export default Openpositions