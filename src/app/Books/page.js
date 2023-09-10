"use client"
import React from 'react'
import Navbar  from "../../components/Navbar"
import Image from 'next/image'
import  showimage from "../../../public/showimage.png"
import AllData from   "../../context/AllData.json"
import {FaCartPlus}  from "react-icons/fa"
import {BsFillCartXFill}  from "react-icons/bs"
import Iq   from "../../../public/icons8-brain-48.png"
import aqoon  from "../../../public/icons8-knowledge-48.png"
import dhisid  from "../../../public/icons8-motivator-64.png"


import { useCart } from 'react-use-cart'

function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { addItem, removeItem,inCart} = useCart();
  return (
    <>
    <div >

    
    <div >
        <Navbar/>
    </div>

    <main   className='max-w-4xl mx-auto p-4 mt-10'>

        <div className='flex flex-col md:flex-row  items-center justify-between  '>

            
            <div className='px-16 md:px-0'>

                <h1 className='py-2 font-DM text-xl text-cyan-800 font-semibold'>Akhrisku </h1>
                <p className='text-sm font-DM leading-7'>waxx muhiim ah inaad maanta taqaano ahmiyada uu leeyhaya wax Akhrisku
                    kaso oo manca ama horimar u leh noloshada aqoon ahaa iyo koritan ahaan caqligaga
                </p>
            </div>
            <Image src= {showimage} className='max-w-xl'  width={0}  height={0}  alt='image'/>


        </div>

        <div className='mt-10'>
        <div  className='grid grid-cols-1 md:grid-cols-3 gap-3'>

{

    AllData.map((datas) => (

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


   <div className='mt-10'>

    <div className=' py-10 text-center'>

        <h1 className='font-DM  font-semibold text-xl text-cyan-800'>Akhrisku Faidadiisa </h1>
    </div>
   <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>


{/* one */}

<div className='flex flex-col justify-center items-center  space-y-4 px-2 py-4 md:border  rounded-3xl '>

    <Image  src={Iq}  className='h-20 w-20' width={0}  height={0}  alt='image' />

    <h1 className='font-DM text-md font-semibold'>Kobadac maskaxda</h1>
</div>
<div className='flex flex-col justify-center items-center  space-y-4 px-2 py-4 md:border  rounded-3xl '>

    <Image  src={aqoon}  className='h-20 w-20' width={0}  height={0}  alt='image' />

    <h1 className='font-DM text-md font-semibold'>Aqoon ahaan</h1>
</div>
<div className='flex flex-col justify-center items-center  space-y-4 px-2 py-4 md:border  rounded-3xl '>

    <Image  src={dhisid}  className='h-20 w-20' width={0}  height={0}  alt='image' />

    <h1 className='font-DM text-md font-semibold'>Hab falan qayn ahan</h1>
</div>



</div>


   </div>



        </div>


    </main>
    </div>

    </>

  
  )
}

export default page