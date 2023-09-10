"use client"

import BooksOne from '@/components/BooksOne'
import Faido from '@/components/Faido'
import Info from '@/components/Info'
import Navbar from '@/components/Navbar'
import ShowCase from '@/components/ShowCase'
import Image from 'next/image'
import { getSession , useSession, signIn, signOut} from "next-auth/react"
import Login from '@/components/Login'
import Footer from '@/components/Footer'

export default function Home() {
  const { data: session } = useSession()

  if(!session)  return  <Login/>

  return (
   <>
    <div className="h-[420px] w-full  top-0 bg-gray-900/10 rounded-bl-2xl rounded-br-2xl">

      <Navbar/>

      <ShowCase/>


    </div>

    <div>

      <Faido/>
      <BooksOne/>
      <Info/>


    </div>
    <Footer/>
    </>
  )
}



export  async  function getServerSideProps(context) {

  const  session = await getSession(context)


  return {

    props: {

      session,
    }
  }
}