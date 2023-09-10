

import {BiRename,}  from "react-icons/bi"
import  {MdEmail}  from  "react-icons/md"
import {BsFillTelephonePlusFill,}  from "react-icons/bs"
import {BiSolidHomeSmile}  from "react-icons/bi"
import {BiSolidBrain}  from "react-icons/bi"
import {MdCastForEducation}  from "react-icons/md"
import {LiaHistorySolid}  from "react-icons/lia"
import {FaExternalLinkSquareAlt} from "react-icons/fa"

function Footer() {
  return (
    <div className='max-w-3xl mx-auto p-4 mt-10 
    grid grid-cols-2 md:grid-cols-3 gap-5'>

        {/* one */}

        <div className='space-y-3 ' >

            {/* three type conatine */}
            <div className='flex space-x-3'>
                <BiRename className='text-xl'/>
                <h1 className='font-DM text-sm '>Akhris-App</h1>
            </div>

            {/* two */}
            <div className='flex space-x-3'>
                <MdEmail className='text-xl'/>
                <h1 className='font-DM text-sm '>Akhris-app@gmail.com</h1>

            </div>
            <div className='flex space-x-3'>
                <BsFillTelephonePlusFill className='text-xl'/>
                <h1 className='font-DM text-sm '>063-4991174</h1>

            </div>


        </div>


        {/* two */}
        <div className='space-y-2'> 

              <div className='flex space-x-3'>
              <BiSolidBrain className='text-xl'/>
            <h1 className='font-DM text-sm '>Maska dhis</h1>
              </div>

              <div className='flex space-x-3'>

                <MdCastForEducation className='text-xl'/>
                <h1 className='font-DM text-sm '>Aqoon Dhis</h1>
              </div>
              <div className='flex space-x-3'>
                <LiaHistorySolid className='font-DM text-sm '/>
                <h1 className='font-DM text-sm '>Tariikh</h1>

              </div>
            
        </div>
        {/* three */}

        <div className='space-y-2'>

            <div className='flex space-x-3'>
                <FaExternalLinkSquareAlt className='font-DM text-sm '/>
                <h1 className='font-DM text-sm '>erigavo</h1>
            </div>
            <div className='flex space-x-3'>
                <BiSolidHomeSmile className='font-DM text-sm '/>
                <h1 className='font-DM text-sm '>Manhal/area</h1>
            </div>
          
            
        </div>

    </div>
  )
}

export default Footer