import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Contactus = () => {
  return (
    
    <div className='px-10 mt-10'>
    <div className='flex justify-between'>
      <div className='flex flex-col w-1/2 justify-center'>
        <div>
          <h1 className='text-3xl font-bold text-gray-700'>We are here to create a wonderful future for you.</h1>
        </div>
        <div>
          <p className='mt-7 text-justify'>To Elevate your organization, you need the right people on your team. You need proficient human resources to upscale your business. Being an executive search firm offering end-to-end recruitment solutions, let us search for the best minds for your company who will help you achieve excellence and build a better future.</p>
          <p className='mt-7 text-justify'>Contact Serviam, one of the best recruitment agencies in India.</p>
        </div>
        <div>
        <Link href={'/contactus'}><button className='mt-7 py-2 rounded-lg bg-orange-500 text-center font-bold text-white px-7 text-lg'>Contact Us</button></Link>          </div>
      </div>
      <div className='flex mx-auto'>
        <Image src="/contact.jpg" width={608} height={600} className='rounded-xl'></Image>
      </div>
    </div>


  </div>

  )
}

export default Contactus