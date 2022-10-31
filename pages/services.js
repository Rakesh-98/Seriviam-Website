
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

const Services = () => {
  return (
    <div className='px-10 mt-20'>
      <div className='flex justify-between'>
        <div className='flex flex-col w-1/2 justify-center'>
          <div>
            <h1 className='text-4xl font-bold text-gray-600'>Recruitment Solutions for all.</h1>
          </div>
          <div>
            <p className='mt-7 text-gray-600 text-lg text-justify'>We are a manpower consultancy in Mumbai. At Serviam, Our manpower consultants strongly believe that the price of success is hard work, determination, and dedication. Our contribution brings a direct positive impact on our client’s business and the future of the candidate we provide. To serve our clients best, we keep a thorough understanding of their requirements and provide the best service to them. In-depth consulting expertise with advanced research processes enables us to offer value for money and the best return on leadership talent. Read more about our services below</p>
          </div>
          <div>
            <Link href={'/contactus'}><button className='mt-7 py-2 rounded-lg bg-orange-500 text-center font-bold text-white px-7 text-lg'>Contact Us</button></Link>          </div>
        </div>
        <div className='flex mx-auto'>
          <Image src="/services1.jpg" width={540} height={478} className='rounded-xl'></Image>
        </div>
      </div>

      <div className='mt-16 flex'>
        <h1 className='text-4xl mx-auto font-bold text-gray-600 hover:text-blue-500'>Our Services</h1>
      </div>

      <div className=' flex mt-20 mx-10 justify-between'>
        <div className='text-lg w-1/2 '>
          <h1 className='text-purple-700 text-2xl font-bold'>Executive search and selection</h1>
          <h1 className='text-gray-600 italic text-xl mt-3 font-bold'>Searching best Minds.</h1>
          <p className='mt-3 text-gray-600 text-lg'>Serviam Manpower is one of the top executive search firms in India. We specialize in executive search practice and headhunting focusing on top and middle-level management for large multinationals and local firms in a variety of industries including but not limited to the financial sector, Advanced Global technology, life sciences, consumer products, and industrial organizations.</p>
          <p className='mt-2 text-gray-600 text-lg'>We, as executive headhunters provide a proactive and research-based recruiting service, backed by industry know-how and active networking, to organizations seeking the very best executive talent to lead their companies. Our executive placement experts find leaders who are as unique as the organizations they serve.</p>
        </div>
        <div className='flex mx-auto'>
          <h1>Illustration</h1>
        </div>
      </div>

      <div className=' flex mt-40 mx-10 justify-between'>
        <div className='flex mx-auto'>
          <h1>Illustration</h1>
        </div>
        <div className='text-lg w-1/2 '>
          <h1 className='text-purple-700 text-2xl font-bold'>Permanent hiring.</h1>
          <h1 className='text-gray-600 italic text-xl mt-3 font-bold'>Recruiting the best and brightest for your Company.</h1>
          <p className='mt-3 text-gray-600 text-lg'>Serviam Manpower understands the importance of having quality and dedicated permanent employees that help organizations succeed and survive in the long run. We offer permanent hiring solutions to organizations by finding highly qualified and passionate candidates that have the required skills to meet the strategic and long-term requirements of the organization as well as the determination and dedication to growing with the organization over time.</p>
        </div>
      </div>

      <div className=' flex mt-40 mx-10 justify-between'>
        <div className='text-lg w-1/2 '>
          <h1 className='text-purple-700 text-2xl font-bold'>RPO</h1>
          <h1 className='text-gray-600 italic text-xl mt-3 font-bold'>Strengthening your Workforce.</h1>
          <p className='mt-3 text-gray-600 text-lg'>In today’s rapidly changing economic scenarios, companies need a simplified recruitment process that boosts business agility.</p>
          <p className='mt-3 text-gray-600 text-lg'>Serviam makes it easier for organizations to acquire the right talent by offering effective end-to-end RPO solutions, that help them drive cost and quality benefits as well as reduce fill time.</p>
          <p className='mt-3 text-gray-600 text-lg'>We understand that different companies have various recruitment needs so if a company is looking to bring more flexibility and agility to their recruitment functions and overcome various challenges related to recruitment like cost, scalability, and quality, then RPO is perfect for them.</p>
        </div>
        <div className='flex mx-auto'>
          <h1>Illustration</h1>
        </div>
      </div>
      <div className=' flex mt-40 mx-10 justify-between'>
        <div className='flex mx-auto'>
          <h1>Illustration</h1>
        </div>
        <div className='text-lg w-1/2 '>
          <h1 className='text-purple-700 text-2xl font-bold'>Professional Staffing.</h1>
          <h1 className='text-gray-600 italic text-xl mt-3 font-bold'>Finding the best solutions for your staffing problems.</h1>
          <p className='mt-3 text-gray-600 text-lg'>Tight labor markets, competition for candidates, and soaring attrition are all challenges that have made recruitment functions a daunting task for many organizations, especially after Covid-19. Staffing is one of our specializations, which caters to this competitive edge. Staffing at Serviam is a process of employee recruitment, screening, and selection done for organizations looking for short-term hiring needs. We take care of hiring fresh candidates, payroll, compliance, and many more for our clients.</p>
          <p className='mt-3 text-gray-600 text-lg'>If you are looking to hire for a short time and need the resources for 6 months or a year, you can always give us a knock. We would be happy to help with custom-made solutions. Contact us for staffing services.</p>
        </div>
      </div>

      <div className=' flex mt-40 mx-10 justify-between'>
        <div className='text-lg w-1/2 '>
          <h1 className='text-purple-700 text-2xl font-bold'>Industry Mapping</h1>
          <h1 className='text-gray-600 italic text-xl mt-3 font-bold'>Get that competitive advantage!</h1>
          <p className='mt-3 text-gray-600 text-lg'>Industry mapping is a service that we provide to our clients to help them understand their competitor’s organizational structure and intellectual capital. This helps our clients understand the level of talent their competitors have and accordingly strategize their candidate requirements to acquire better and more competent talents. This service requires a long-term commitment from a client to understand the profile of competitors and is a source of strategic competitive advantage. We use headhunting as the ultimate form of target marketing and this is why it yields great results. If you would like to understand how our research team can provide you with a competitive advantage and competitive edge, we are more than happy to help you..</p>
          </div>
        <div className='flex mx-auto'>
          <h1>Illustration</h1>
        </div>
      </div>

      <div className='text-3xl font-bold text-center mt-20 text-gray-600 hover:text-blue-500'>For all of your HR consulting needs, we want to be your go-to place. Reach out to Serviam, an expert recruitment agency in Mumbai and Navi Mumbai.</div>

      <div className='text-4xl font-bold text-center mt-20 hover:text-blue-500'>Awards</div>
        <div className='flex justify-between mx-20 mt-20'>
          <div>
            <Image src='/award1.jpg' width={100} height={100}></Image>
          </div>
          <div>
            <Image src='/award2.jpg' width={300} height={100}></Image>
          </div>
          <div>
            <Image src='/award3.jpg' width={300} height={100}></Image>
          </div>
          <div>
            <Image src='/award4.jpg' width={100} height={100}></Image>
          </div>
        </div>





    </div>
  )
}

export default Services