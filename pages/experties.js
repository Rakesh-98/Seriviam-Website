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
            <p className='mt-7 text-justify text-gray-600 text-lg'>We are one of the best HR consultancy services in India. We have served numerous companies belonging to different sectors over the years. We are always ready to help various industries with recruitment challenges in the ever-evolving employment world. </p>
            <p className='mt-7 text-justify text-gray-600 text-lg'>We scale in all areas of recruitment, including RPO, staffing, and executive search. We have extensive experience in finding the best talent for you thanks to a decade of conducting talent acquisition for numerous industries.</p>
          </div>
          <div>
            <Link href={'/contactus'}><button className='mt-7 py-2 rounded-lg bg-orange-500 text-center font-bold text-white px-7 text-lg'>Contact Us</button></Link>          </div>
        </div>
        <div className='flex mx-auto'>
          <Image src="/experties.jpg" width={500} height={478} className='rounded-xl'></Image>
        </div>
      </div>

      <div>
        <div className='mt-16 flex'>
          <h1 className='text-3xl mx-auto font-bold text-gray-600 hover:text-blue-500'>SECTORS THAT WE CATER TO</h1>
        </div>

        <div className=' flex mt-20 mx-10 justify-between'>
          <div className='text-lg w-1/2 '>
            <h1 className='text-purple-700 text-2xl font-bold'>Information Technology.</h1>
            <p className='mt-3 text-gray-600 text-md'>India is known to be one of the most rapidly growing IT services markets in the world. It is also the world’s largest sourcing destination, accounting for approximately 52 percent of the US$ 124-130 billion market. Information technology in India consists of two major components: IT Services and business process outsourcing (BPO). The faster this industry is growing, the higher the need for candidates that possess unique qualities like adaptability.</p>
            <p className='mt-2 text-gray-600 text-md'>The IT industry in India employed almost 2.8 million employees in the financial year 2021. We look at a candidate’s technical skills, soft skills, and certain unique skills like adaptability and learning abilities, that match our client’s requirements while conducting our recruitment process. To discuss your hiring needs in the Information Technology industry, Contact us.</p>
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
            <h1 className='text-purple-700 text-2xl font-bold'>KPO, Research, and Analytics.</h1>
            <p className='mt-3 text-gray-600 text-md'>India, having the largest pool of hardworking and talented professionals along with specialized domain workers, has become the central hub for Knowledge Process Outsourcing (KPO).</p>
            <p className='mt-3 text-gray-600 text-md'>We have extensive experience in supporting research, sales, trading, corporate access desks as well as general management functions.</p>
            <p className='mt-3 text-gray-600 text-md'>We follow a unique approach to quality candidate sourcing through dedicated domain/sector knowledge. Our customer appreciated the high quality of the financial analysis resource provided by us.</p>
            <p className='mt-3 text-gray-600 text-md'>To discuss your hiring needs in KPO, Research, and Analytics industry, please contact us.</p>
          </div>
        </div>

        <div className=' flex mt-40 mx-10 justify-between'>
          <div className='text-lg w-1/2 '>
            <h1 className='text-purple-700 text-2xl font-bold'>Manufacturing, Engineering, and Infrastructure.</h1>
            <p className='mt-3 text-gray-600 text-lg'>India’s manufacturing, engineering, and infrastructure sectors are all vital for its economic progress. The manufacturing sector in India has improved the country’s industrial development as well as the engineering sector is closely associated with the manufacturing and infrastructure sectors of the country, and is of strategic importance to India’s economy. Growth in the sector is driven by various sub-sectors such as infrastructure, power, steel, automotive, oil & gas, consumer durables, etc.</p>
            <p className='mt-3 text-gray-600 text-lg'>As per economic survey reports, estimated employment in the manufacturing sector in India has increased to 6.24 crores in the year 2019-20. Our consultants recognize the challenges that the companies in Manufacturing, Engineering, and infrastructure industry face. Over the years we have created an exclusive space working with a select pool of clients. We can help you equip talents with the right skills needed to work in the manufacturing, engineering, and infrastructure sectors. To discuss your hiring needs in Manufacturing, Engineering, and Infrastructure industry, please contact us.</p>
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
            <h1 className='text-purple-700 text-2xl font-bold'>Media and Advertisement</h1>
            <p className='mt-3 text-gray-600 text-md'>The Indian Media and Entertainment (M&E) industry is a burgeoning sector of the economy and is making high growth steps. Proving its resilience to the world, the Indian M&E sector is on the cusp of a strong phase of growth, backed by rising consumer payments and advertising revenues across all sectors.</p>
            <p className='mt-3 text-gray-600 text-lg'>Advertising is also one of the fastest growing Industries in India. As per some reports, in terms of size, the Indian ad market will touch $11 billion in 2022 from $9.6 billion in 2021.</p>
            <p className='mt-3 text-gray-600 text-lg'>With the increasing demand for content across platforms, there has been an expansion of jobs in the media and entertainment industry. Today there is a growing demand for media professionals with several technical, business, and soft skills. Our team approach is strategic and efficient for our media & entertainment clients, to find them the best candidates.</p>
            <p className='mt-3 text-gray-600 text-lg'>To discuss your hiring needs in Media & Entertainment industry, please contact us.</p>
          </div>
        </div>

        <div className=' flex mt-40 mx-10 justify-between'>
          <div className='text-lg w-1/2 '>
            <h1 className='text-purple-700 text-2xl font-bold'>Pharmaceuticals, Healthcare, and Biotech.</h1>
            <p className='mt-3 text-gray-600 text-lg'>The Indian pharmaceutical industry is highly knowledge-based. Its flourishing growth is positively affecting the Indian economy. It has been ranked third largest in volume terms and 10th in value terms. After the Covid-19 pandemic hit the world, pharma companies had to improve and optimize several processes within them. Increased automation and new technologies in the industry have made it vital for companies to increase their workforce. Staffing services are a great solution for pharma companies, as it helps them have the talent pool they need, with lower expenses.</p>
            <p className='mt-3 text-gray-600 text-lg'>Healthcare is a huge industry in India in terms of both- Employment and Revenue. The industry comprises hospitals, medical equipment, and supplies, clinical trials, outsourcing, telemedicine, medical tourism, and medical insurance. Similarly, the biotechnology sector of India is on a high growth trajectory. These sectors overall are some of the most significant sectors in enhancing India’s Global Profile as well as contributing to the growth of the economy. Rapidly growing industries like these have to cater to their hiring needs consistently, the current focus of these sectors after the pandemic is to have highly skilled employees and we specialize in finding the most efficient candidates for industries like these.</p>
            <p className='mt-3 text-gray-600 text-lg'>To discuss your hiring needs in Pharmaceuticals, Healthcare, and Biotech Industry, please contact us.</p>
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
            <h1 className='text-purple-700 text-2xl font-bold'>BFSI</h1>
            <p className='mt-3 text-gray-600 text-md'>India’s banking sector is constantly growing. A career in the banking sector is also quite lucrative for people looking for jobs, especially in the government sector. Also, the banking sector is evolving, some reports suggest that the future of banking is digital, Globally digital banking users are expected to cross the 3.6 billons mark by 2024. The rapid growth of digitization in the banking sector has led to a change in job scenarios. Digitalization allows banks to improve their efficiency to enhance customer experience. In these evolving times, Serviam helps banking companies have highly skilled professionals who can adapt to changes in the banking sector.</p>
          </div>
        </div>

        <div className=' flex mt-40 mx-10 justify-between'>
          <div className='text-lg w-1/2 '>
            <h1 className='text-purple-700 text-2xl font-bold'>Consulting and Advisory</h1>
            <p className='mt-3 text-gray-600 text-md'>Consulting & advisory services provide strategic thoughts, plans, and advice on the most valuable ways to enhance your business efficacy. For doing so, they need to have efficient staff to help accomplish specific goals of the clients by analyzing their client’s needs. Serviam makes it easier for consulting and advisory companies to acquire business advisors, financial advisors, CA, merger and acquisition associates, and more such employees, considering the requirements of our clients.</p>
            <p className='mt-3 text-gray-600 text-lg'>To discuss your hiring needs in BFSI, Consulting, and Advisory industry, please contact us.</p>
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
            <h1 className='text-purple-700 text-2xl font-bold'>Retails and E-Commerce</h1>
            <p className='mt-3 text-gray-600 text-md'>Retail and Ecommerce companies are emerging and growing every day and therefore the need to have a tremendously talented team to work for them is also growing. E-commerce companies have very specific goals and visions that are needed to be catered to by highly skilled professionals. Serviam understands the importance of productive employees that will not only grow their business but also work efficiently towards achieving the company’s vision. Serviam has helped India’s consumer products, services organizations, and almost all of the best retail brands in the country to hire talent.</p>
            <p className='mt-3 text-gray-600 text-lg'>To discuss your hiring needs in Retails & E-commerce industry, Please contact us.</p>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <div className='text-xl text-center font-semibold'>Trusted by</div>
        <div className='mt-10 flex justify-between '>
          <div>
            <Image src='/client3.jpg' width={200} height={70}></Image>
          </div>
          <div>
            <Image src='/client2.jpg' width={200} height={70}></Image>
          </div>
          <div>
            <Image src='/client.jpg' width={200} height={70}></Image>
          </div>
          <div>
            <Image src='/client4.jpg' width={200} height={70}></Image>
          </div>
          <div>
            <Image src='/client3.jpg' width={200} height={70}></Image>
          </div>
        </div>
      </div>


      <div className='className= mt-32'>

        <div className='mt-5 flex mb-40 '>

          <div className='flex flex-col w-1/2 justify-center'>
            <div className='text-4xl font-bold text-gray-700 mb-5' >
              <h1 >Keep in touch.</h1>
            </div>
            <input type="text" placeholder='Name' className='py-3 px-3 my-2 border-2 border-gray-100 rounded-md' />
            <input type="text" placeholder='City' className='py-3 px-3 my-2 border-2 border-gray-100 rounded-md' />
            <input type="Phone" placeholder='Contact Number' className='py-3 px-3 my-2 border-2 border-gray-100 rounded-md' />
            <input type="text" placeholder='Email' className='py-3 px-3 my-2 border-2 border-gray-100 rounded-md' />
            <input type="text" placeholder='Select Service' className='py-3 px-3 my-2 border-2 border-gray-100 rounded-md' />
            <input type="text" placeholder='Message' className='py-3 px-3 my-2 border-2 border-gray-100 rounded-md' />
            <button className='bg-orange-500 w-fit px-10 py-3 rounded-md my-2 font-bold text-white text-lg'>Submit</button>
          </div>

          <div className=' flex flex-col mx-auto'>
            <div className='bg-gray-200 py-40'>
         
            </div>
            <div className='text-lg ml-10'>
              <p className='p-1'>+91 9167973828</p>
              <p className='p-1 '>contactus@serviammanpower.com</p>
              <p className='p-1 '>tanvir@serviammanpower.com</p>
              <p className='p-1 '>1B-82, paragon plaza, next to Phoenix mall Kamani, Kurla <br/> West, Saki Naka Mumbai, 400070 India</p>
              <p className='p-1 '>D-450, 2nd floor, Vashi Plaza, Sector 17,<br /> Vashi Navi Mumbai-400703</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Experties