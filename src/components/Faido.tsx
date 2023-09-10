import React from 'react'
import brain  from "../../public/icons8-brain-48.png"
import knowlege from "../../public/icons8-knowledge-48.png"
import motivator from "../../public/icons8-motivator-64.png"
import Image from 'next/image'

function Faido() {
  return (
    <div className='max-w-4xl mx-auto mt-10 p-4'>


        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>


            {/* one */}

            <div className='flex flex-col justify-center items-center  space-y-4 px-2 py-4 md:border  rounded-3xl '>

                <Image  src={brain}  className='h-20 w-20' width={0}  height={0}  alt='image' />

                <h1 className='font-DM text-md font-semibold'>Kobadac maskaxda</h1>
            </div>
            <div className='flex flex-col justify-center items-center  space-y-4 px-2 py-4 md:border  rounded-3xl '>

                <Image  src={knowlege}  className='h-20 w-20' width={0}  height={0}  alt='image' />

                <h1 className='font-DM text-md font-semibold'>Aqoon ahaan</h1>
            </div>
            <div className='flex flex-col justify-center items-center  space-y-4 px-2 py-4 md:border  rounded-3xl '>

                <Image  src={motivator}  className='h-20 w-20' width={0}  height={0}  alt='image' />

                <h1 className='font-DM text-md font-semibold'>Hab falan qayn ahan</h1>
            </div>



        </div>



  


    </div>
  )
}

export default Faido