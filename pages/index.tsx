import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Blog from './Blog'


import Contact from './Contact'
import Navbar from '@/components/Navbar/Navbar'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>    

     <Contact />
      {/* <Blog /> */}
     


      {/* <Blog /> */}
      {/* <Navbar /> */}
     

     {/* <Contact /> */}

      <Blog />
     

     {/* <Contact /> */}


    </>
  )
}
