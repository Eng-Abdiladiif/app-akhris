"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import {FcReading}  from "react-icons/fc"
import {FiShoppingCart}  from "react-icons/fi"
import img  from "../../public/cartlogo.png"
import Image from 'next/image'
import {MdMenuBook}  from "react-icons/md"
import { useCart } from 'react-use-cart'
import {signOut}  from "next-auth/react"


function Navbar() {

  const [open , setOpen]  = useState(false)
  const {totalUniqueItems}  = useCart();
 
  return (
    <div className='max-w-4xl flex justify-between  mx-auto pt-10 px-5 '>



         

      <div className='flex space-x-3 items-center '>

        <FcReading  className = "text-4xl" />
        <h1 className='mt-2 font-DM '>Reading</h1>
      </div>

      <div  className='md:hidden z-10  cursor-pointer'
      onClick={() =>  setOpen(!open)}>

        <MdMenuBook  className = "text-3xl text-blue-600"/>


      </div>

      <div  className='hidden md:flex space-x-8'>
          <Link className='font-semibold font-DM  ' href= "/">Home</Link>
          <Link className='font-semibold font-DM  ' href= "/Books">Books</Link>

          <Link className='font-semibold font-DM  ' href= "/Cartpage">
            

            <div className='relative'>
              <span className='absolute bottom-3 left-4 bg-orange-400 text-white px-1 rounded-full'>
              {totalUniqueItems}
              </span>
              <Image src={img}  width={30} height={30}  alt='img' />
              
            </div>
          </Link>
          <button  className='pl-10'  onClick= {() => signOut()}>
          
          signOut
          </button>

        </div>
      <div className={` absolute top-0 right-0 flex flex-col justify-center items-center
                 h-screen  w-52 bg-gray-900/10 opacity-85   space-y-16 ${open  ? "flex" : "hidden"}`}>
          <Link className='font-semibold font-DM  ' href= "/">Home</Link>
          <Link className='font-semibold font-DM  ' href= "/Books">Books</Link>
          <Link className='font-semibold font-DM  ' href= "/Cartpage">
            

            <div className='relative'>
              <span className='absolute bottom-3 left-4 bg-orange-400 text-white px-1 rounded-full'>
                {totalUniqueItems}
              </span>
              <Image src={img}  width={30} height={30}  alt='img' />
              
            </div>
          </Link>
          
          <button  onClick= {() => signOut()}>
          
          signOut
          </button>

        </div>









    </div>
  )
}

export default Navbar