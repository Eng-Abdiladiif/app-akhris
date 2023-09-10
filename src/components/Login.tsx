"use client"

import React from 'react'
import {FcReading}  from "react-icons/fc"
import  {FcGoogle}  from  "react-icons/fc"
import {signIn, signOut}  from "next-auth/react"

function Login() {
  return (
    <div  className=' max-w-4xl mx-auto   p-4 mt-10 h-96'>

        <div className='flex flex-col justify-center items-center space-y-5 mt-20'>
            <FcReading  className = "text-9xl"/>
            <h1 className='text-3xl text-blue-600 font-DM font-bold'>Akhris-App</h1>
        </div>

        <div className='flex flex-col justify-center items-center mt-5'>

            <button  onClick={() =>  signIn('google')}  className='flex items-center space-x-3 bg-blue-500  px-5 py-2
            rounded-md '>

                <FcGoogle className = "text-xl text-white"/>
                <h1 className='text-white'>sing in Google</h1>
            </button>


        </div>









    </div>
  )
}

export default Login