"use client"

import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import { useCart } from 'react-use-cart';
import {FaCartPlus}  from "react-icons/fa"
import {BsFillCartXFill}  from "react-icons/bs"

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {updateItemQuantity, items, cartTotal}  = useCart();
  return (
    <>
    <div>
       <div>
        <Navbar/>
    </div>

    </div>


<div  className='flex flex-col md:flex-row justify-between  space-x-8 mt-10 max-w-4xl mx-auto px-5 md:px-0'>
   {/* mian */}

   <div className=' md:w-1/2 w-96  mx-auto md:mt-5 '>


{

  items.map((datas)  => (

    <div  key={datas.id} className='bg-gray-900/10 px-10 py-5  max-w-md '>

  <div  className='flex  space-x-16'>
    
  <Image src={datas.image}  className='h-20  w-20'  width={40}  height={40}  alt='image' />

  <div className='flex flex-col space-y-3'>
    
  <h1  className='text-md font-semibold text-cyan-700'>{datas.name}</h1>
  <p className='text-md font-DM font-semibold'>{datas.quantity}  * {datas.price}</p>
  <div className='my-3 flex space-x-4'>
  <button  onClick={()  => updateItemQuantity(datas.id, datas.quantity - 1)}>

<BsFillCartXFill className = "text-xl text-red-600  cursor-pointer "
/>
</button>
    <button  onClick={()  => updateItemQuantity(datas.id, datas.quantity + 1)}>

    <FaCartPlus className = "text-xl text-green-600  cursor-pointer "
          />
    </button>
    

  </div>
  </div>

  </div>



    

    </div>
  ))


}






</div>




<div className='flex flex-col space-y-3 mx-auto mt-10  md:w-1/2 h-44     w-96 bg-gray-900/10 px-5 py-5 '>

<div className='flex justify-around'>

  <span className='font-DM text-md font-semibold'>Shipping</span> 
  <span className='font-DM text-md font-"semibold'>$0</span>
</div>
<div className='flex justify-around'>

  <span className='font-DM text-md font-semibold'>Discount</span> 
  <span className='font-DM text-md font-"semibold'>$0</span>
</div>
<div className='flex justify-around'>

  <span className='font-DM text-xl font-bold text-cyan-700'>Total</span> 
  <span className='font-DM text-xl font-bold text-blue-700'>${cartTotal}</span>
</div>

<div className='my-10'>

  <button className='px-5  w-full py-2 bg-yellow-600 text-white
  hover:bg-orange-400  transition-all  duration-500'>Place Order </button>


</div>





</div>


</div>

   
    </>
  )
}

export default page