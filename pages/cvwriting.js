
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'


const Cvwriting = () => {
  return (
    <div className='px-10 mt-20'>
      <div className='flex justify-between'>
        <div className='flex flex-col w-1/2 justify-center'>
          <div>
            <h1 className='text-4xl font-bold text-gray-700'>Your CV Is Your Gateway To Success.</h1>
          </div>
          <div>
            <p className='mt-7 text-justify text-gray-600 text-lg'>We turn to experts for help in our day-to-day chores such as getting a hairstylist to cut our hair, or a mechanic to fix our car, similarly, executive CVs should also be written with the help of experts as its the most important career document in a senior-level candidate’s life. A CV acts like a bridge between you and your potential employer, it represents you before you’re called for an interview. It should be able to convince your employers to call you for an interview. Therefore, professional touch on your CV is highly needed in today’s competitive job market.</p>
          </div>
          <div>
            <Link href={'/contactus'}><button className='mt-7 py-2 rounded-lg bg-orange-500 text-center font-bold text-white px-7 text-lg'>Contact Us</button></Link>          </div>
        </div>
        <div className='flex mx-auto'>
          <Image src="/cvwriting.jpg" width={540} height={478} className='rounded-xl'></Image>
        </div>
      </div>

      <div className='mt-10'>
        <div className='bg-gray-200 p-12'>
          <div className='flex mx-auto justify-center'>
            <Image src="/about1.jpg" width={150} height={150} ></Image>
          </div>
          <div>
            <h1 className='text-4xl text-center font-bold text-gray-700 mt-5'>Your CV Is Your Gateway To Success.</h1>
          </div>
          <div>
            <p className='mt-10 text-center text-lg text-gray-600'> CV means curriculum vitae also known as resume are simply a summary of your skills, experience, and achievements that you send to your readers (employers) when you are seeking a job. It is not just a critical tool to have when searching for a job but how you draft your CV plays an important role in attracting employers. Hence, a Professional CV writing service helps you create quality and effectiveness in your CV to help you land a job. It assists you in showcasing your strengths and accomplishments beginning with your educational background in the most beneficial way.</p>
          </div>
        </div>
      </div>

      <div className='mt-28 flex '>
        <div className='flex mx-auto'>
          <Image src="/cvwriting.jpg" width={340} height={278} className='rounded-xl'></Image>
        </div>
        <div className='flex-col w-1/2 '>
          <h1 className='text-4xl font-bold text-gray-700'>What We Do?</h1>
          <p className='mt-5 text-gray-600 text-lg text-justify'>Serviam offers professional CV writing services for senior-level candidates that apply for executive positions in an organization.</p>
          <p className='mt-5 text-gray-600 text-lg text-justify'>Executive resumes should be compelling as well as clear and concise. When you have a lot of experience to draw from, it can be difficult to condense your achievements and merits into one single document. A candidate can have a background of being consistent in a single job whereas another candidate could have had several jobs throughout their career. Our Resume writing service will ensure that you have an impressive and expertly tailored CV aligning all your accomplishments, educational background, and skills leading you to your desired executive position.</p>
        </div>
      </div>

      <div className='mt-20'>
        <h1 className='text-4xl text-center font-bold text-gray-700 mt-5'>Advantages of outsourcing your CV writing need to us</h1>
        <p className='mt-10 text-center text-lg text-gray-600'>An executive resume is the most important career document for candidates applying for senior-level positions. Today’s top resume writers ensure the success of senior executives and board-level executives across the globe.</p>
      </div>

      <div className='p-24 space-x-16 flex'>
        <div className='p-8 w-1/3 bg-blue-400 rounded-3xl'>
          <div className=' flex justify-center'>
            <Image src="/cvwriting.jpg" width={140} height={100}></Image>
          </div>
          <div className='mt-5 text-center'>We will make your resume capture the reader’s attention with high-quality writing. Your resume should personally brand you and it should have all your core skills and competencies written strategically and our resume writers know exactly how to do that.</div>
        </div>
        <div className='p-8 w-1/3 bg-blue-400 rounded-3xl'>
          <div className=' flex justify-center'>
            <Image src="/cvwriting.jpg" width={140} height={100}></Image>
          </div>
          <div className='mt-5 text-center'>We will make your resume capture the reader’s attention with high-quality writing. Your resume should personally brand you and it should have all your core skills and competencies written strategically and our resume writers know exactly how to do that.</div>
        </div>
        <div className='p-8 w-1/3 bg-blue-400 rounded-3xl'>
          <div className=' flex justify-center'>
            <Image src="/cvwriting.jpg" width={140} height={100}></Image>
          </div>
          <div className='mt-5 text-center'>We will make your resume capture the reader’s attention with high-quality writing. Your resume should personally brand you and it should have all your core skills and competencies written strategically and our resume writers know exactly how to do that.</div>
        </div>
      </div>

      <div className='text-2xl font-bold text-center text-gray-600'>We work hard to make resume writing in India as beneficial as possible for all job seekers that come our way. For the best resume writing services contact us today.</div>

    </div>
  )
}

export default Cvwriting