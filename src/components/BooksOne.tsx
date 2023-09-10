"use client"

import React from 'react'
import  sectionData  from "../context/SectionData.json"
import Image from 'next/image'
import {FaCartPlus}  from "react-icons/fa"
import {BsFillCartXFill}  from "react-icons/bs"
import { useCart } from 'react-use-cart'



function BooksOne() {
    const { addItem, removeItem,inCart} = useCart();
  return (
    <>
    <div  className='max-w-4xl mx-auto p-3 mt-10'>

        
        <div  className='grid grid-cols-1 md:grid-cols-3 gap-3'>

            {

                sectionData.map((datas) => (

                    <div  key={datas.id}  className='bg-white shadow-2xl shadow-gray-500 px-16 py-3 
                    gap-5  hover:translate-y-2 transition-all duration-500'>
                        <div className='flex space-x-5 md:flex-col'>
                        <Image src={datas.image}  className='h-40 w-40' width={100}  height={100}  alt='image' />
                        <div className='flex flex-col my-3 space-y-3'>
                            <h1 className='text-md font-DM font-bold text-cyan-600'>{datas.name}</h1>
                            <h2 className='font-semibold'>{datas.sosare}</h2>
                            <h3 className='text-red-700 font-semibold'>${datas.price}</h3>
                            <div className='flex justify-around space-x-4'>
                            
                            {
                                inCart(datas.id)  && (

                                    <BsFillCartXFill  className = "text-xl cursor-pointer text-red-600 "
                                    onClick= {()  => removeItem(datas.id)}
                             />
                                )
                            }
                            <FaCartPlus className = "text-xl text-green-600  cursor-pointer "
                            onClick= {()  => addItem(datas)} />


                        </div>
                        </div>

                       

                            
                        </div>
                       

                        

                    </div>
                ))
            }



        </div>



    </div>

    </>
   
  )
}

export default BooksOne