import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Aboutus = () => {
  return (
    <div className='px-10 mt-20'>

      <div className='flex justify-between'>
        <div className='flex flex-col w-1/2 justify-center'>
          <div>
            <h1 className='text-3xl font-bold text-gray-700'>Recruiting the right fit the right way.</h1>
          </div>
          <div>
            <p className='mt-7'>Serviam Manpower believes in serving our clients with the best possible advice and results. Our top priority is dedicated service delivered through industry-leading search professionals. To provide our clients with faster and higher-quality delivery of the best and the brightest individuals, our unique strategy has been to consistently productize our services. Our goal is to transform organizations and in turn touch the lives of the people and clients we serve, by adding substantial value to the global leadership and executive search industry. Our recruitment processes are run by a team of search consultants (recruiters) who are highly experienced and specialize in the industry/sectors they serve. We have been providing successful HR services for more than 11 years and are among the top human resources consulting and rpo companies in India.</p>
          </div>
          <div>
          <Link href={'/contactus'}><button className='mt-7 py-2 rounded-lg bg-orange-500 text-center font-bold text-white px-7 text-lg'>Contact Us</button></Link>
          </div>
        </div>
        <div className='flex mx-auto'>
          <Image src="/about1.jpg" width={640} height={478} className='rounded-xl'></Image>
        </div>
      </div>

      <div className='mt-20 text-center'>
        <h1 className='text-3xl font-bold text-gray-700'>Human resource solutions simplified.</h1>
        <h1 className=' mt-10 text-3xl font-bold text-gray-700'>Our Process</h1>
      </div>

      <div>
        <div className='mt-16 text-xl text-end w-1/2 bg-gray-100 p-5 rounded-sm '>
          <h1 className='text-purple-700 font-bold'>Identifying clients requirements</h1>
          <p className='mt-2'>Serviam will give the client a dedicated recruiter to work with to identify the qualities of their ideal candidate.</p>
        </div>
        <div className='mt-16 text-xl w-1/2 bg-gray-100 p-5 rounded-sm '>
          <h1 className='text-purple-700 font-bold'>Conducting searches</h1>
          <p className='mt-2'>We conduct our search for suitable candidates throughout the organization in unification, enhanced by the added resources that come with proprietary local knowledge, keeping in mind the client's requirements.</p>
        </div>
        <div className='mt-16 text-xl text-end w-1/2 bg-gray-100 p-5 rounded-sm '>
          <h1 className='text-purple-700 font-bold'>Skill-Checking and Telephonic Screening Process</h1>
          <p className='mt-2'>We will then approach the ideal candidates on our client's behalf and conduct various steps like skill-checking and Pre-screening to refine the final selection even further before presenting the client with the CVs.</p>
        </div>
        <div className='mt-16 text-xl w-1/2 bg-gray-100 p-5 rounded-sm '>
          <h1 className='text-purple-700 font-bold'>Refining Process.</h1>
          <p className='mt-2'>Our search professionals focus on our client's specific requirements, a candidate's niche competencies, and functional disciplines while carrying out the recruitment and staffing process.</p>
        </div>
      </div>

      <div className='mt-32 bg-slate-100 px-5 py-7 rounded-3xl'>
        <p className='text-xl text-justify'>We also follow the True Fit philosophy. We match the candidate’s mentality and caliber with numerous other factors in our client’s organization. For example, Personality match, personal interests, location, etc. We compare the client’s expectations with the candidate’s characteristics. An employee is the most valuable asset to a company therefore we make sure that the selected candidates are the RIGHT FIT for the company.</p>
        <h1 className='text-3xl font-bold text-center mt-5 text-purple-700'>Hiring the right people can make the difference between success and failure.</h1>
        <div className='text-center'>
          <Link href={'/contactus'}><button className='mt-5 py-2 rounded-lg bg-orange-500 text-center font-bold text-white px-7 text-lg'>Contact Us</button></Link>
        </div>
      </div>

    </div>
  )
}

export default Aboutus