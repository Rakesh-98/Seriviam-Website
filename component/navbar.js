import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='mx-10 mt-5'>
            <div className="flex justify-between items-center text-base ">
                <div>
                    <Link href='/'><Image src='/logo.jpg' width={200} height={50}></Image></Link>
                </div>
                <div>
                    <ul className='flex text-lg space-x-12 font-bold text-gray-600'>
                        <Link href='/aboutus'><li className='hover:text-blue-500 cursor-pointer'>About Us</li></Link>
                        <Link href='/services'><li className='hover:text-blue-500 cursor-pointer'>Services</li></Link>
                        <Link href='/experties'><li className='hover:text-blue-500 cursor-pointer'>Experties</li></Link>
                        <Link href='/cvwriting'><li className='hover:text-blue-500 cursor-pointer'>CV Writing</li></Link>
                        <Link href='/openpositions'><li className='hover:text-blue-500 cursor-pointer'>Open Positions</li></Link>
                    </ul>
                </div>
                <div className='bg-orange-400 py-3 px-5 rounded-md text-white font-bold hover:bg-black shadow-md'>
                    <Link href={'/contactus'}><button>Contact Us</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar