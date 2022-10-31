import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Openpositions = () => {
  return (
    <div className='px-10 mt-20'>
      <div>
        <div className='flex justify-between'>
          <div className='flex flex-col w-1/2 justify-center'>
            <div>
              <h1 className='text-4xl font-bold text-gray-700'>ARE YOU THE ONE?</h1>
            </div>
            <div>
              <p className='mt-7 text-justify text-gray-600 text-lg'>We are one of the best recruitment agencies located in Mumbai and Navi Mumbai. We are constantly looking for people that have what it takes to work in leading companies from leading industries. Let us help you achieve your dream of working in prestigious organizations that will put you on your way to success.</p>
              <p className='mt-7 text-justify text-gray-600 text-lg'>On our page, we always post the latest jobs and exciting job opportunities making your job search easy. Continue to visit our website to find your desired job posting and obtain a fast job through serviam.</p>
            </div>
            <div>
              <Link href={'/contactus'}><button className='mt-7 py-2 rounded-lg bg-orange-500 text-center font-bold text-white px-7 text-lg'>Contact Us</button></Link>        </div>
          </div>
          <div className='flex mx-auto'>
            <Image src="/positions.jpg" width={450} height={478} className='rounded-xl'></Image>
          </div>
        </div>
      </div>

      <div>
        <div className='text-4xl font-bold mx-auto w-fit mt-20 text-gray-600  hover:text-blue-500'>Open Positions</div>
      </div>

      <div className='mt-20' >

        <div className='mt-5 flex justify-between space-x-10'>

          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>HR Intern</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>Intern Fees</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>Fresher</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>
          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>Executive /SR Executive Logistics operations</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>upto 5LPA</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>04 to 7 years</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>
          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>Sales and Marketing Manager-Petrochemical industry</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>Upto 10LPA</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>5 to 10 years</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>


        </div>
        <div className='mt-5 flex justify-between space-x-10'>

          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>HR Intern</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>Intern Fees</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>Fresher</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>
          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>Executive /SR Executive Logistics operations</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>upto 5LPA</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>04 to 7 years</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>
          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>Sales and Marketing Manager-Petrochemical industry</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>Upto 10LPA</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>5 to 10 years</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>


        </div>
        <div className='mt-5 flex justify-between space-x-10'>

          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>HR Intern</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>Intern Fees</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>Fresher</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>
          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>Executive /SR Executive Logistics operations</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>upto 5LPA</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>04 to 7 years</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>
          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>Sales and Marketing Manager-Petrochemical industry</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>Upto 10LPA</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>5 to 10 years</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>


        </div>
        <div className='mt-5 flex justify-between space-x-10'>

          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>HR Intern</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>Intern Fees</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>Fresher</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>
          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>Executive /SR Executive Logistics operations</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>upto 5LPA</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>04 to 7 years</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>
          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>Sales and Marketing Manager-Petrochemical industry</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>Upto 10LPA</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>5 to 10 years</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>


        </div>
        <div className='mt-5 flex justify-between space-x-10'>

          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>HR Intern</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>Intern Fees</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>Fresher</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>
          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>Executive /SR Executive Logistics operations</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>upto 5LPA</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>04 to 7 years</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>
          <div className='flex flex-col p-7 bg-gray-200 rounded-2xl text-xl w-1/2'>
            <div className='font-semibold text-2xl'>
              <h1>Sales and Marketing Manager-Petrochemical industry</h1>
            </div>
            <div className='flex space-x-5 mt-4 '>
              <h1>Upto 10LPA</h1>
              <h1>Any Graduate</h1>
            </div>
            <div className='flex space-x-5 mt-4'>
              <h1>5 to 10 years</h1>
              <h1>Navi Mumbai</h1>
            </div>
            <div className='bg-orange-500 w-fit p-1.5 px-5 rounded-lg mt-4'>
              <button>Apply Now</button>
            </div>
          </div>


        </div>

      </div>

    </div>)
}

export default Openpositions