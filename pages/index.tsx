import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import LinkButton from '../components/linkbutton'
import Footer from '../components/footer'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Head from 'next/head'

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Intro = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Silicon | Home</title>
      </Head>
      <motion.div className="h-[100vh] w-auto md:h-screen md:w-screen flex flex-col md:flex bg-black items-center justify-center">
        <video
          autoPlay
          muted
          loop
          disablePictureInPicture
          className=" absolute w-full h-full z-0 object-cover"
        >
          <source src="https://github.com/vivanpoddar/random-assets/raw/master/video.mp4" type="video/mp4" />
        </video>
        <div className='z-10'>
          <div className="bg-black rounded-lg p-4">
            <h1 className="text-white text-3xl md:text-7xl">Welcome to Silicon</h1>
          </div>
          <p className='text-center md:hidden'>Compute. Connect. Innovate.</p>
        </div>
        <div className="hidden md:block md:absolute md:bottom-0 mb-8 md:pt-6 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 text-white bg-black rounded animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </>
  )
}

const Panel1 = (): JSX.Element => {
  // const { scrollYProgress } = useScroll();
  // const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  // const spring = useSpring(0)
  return (
    <motion.div className="z-10 h-[75vh] md:h-screen w-screen flex flex-col-reverse md:flex-row bg-black">
      <div className="md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center">
        <h1 className="md:text-7xl text-white text-center text-5xl">Solve problems at SSAHacks.</h1>
        <LinkButton content="Claim your spot at SSAHacks 2023" href="ssahacks" />
      </div>
      <div className="md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <div className='md:h-1/2 w-3/4 md:w-full flex items-center justify-center'>
          <Image src="/panel1.jpg" width={800} height={0} alt="dude laughing"></Image>
        </div>
      </div>
    </motion.div>
  )
}

const Panel2 = (): JSX.Element => {

  return (
    <motion.div className="z-10 h-[75vh] md:h-screen w-screen flex flex-col md:flex-row bg-white">
      <div className="md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <div className='md:h-1/2 w-3/4 md:w-full flex items-center justify-center'>
          <Image src="/panel2.jpg" width={800} height={0} alt="dude laughing"></Image>
        </div>
      </div>
      <div className="md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center">
        <h1 className="md:text-7xl text-black text-center text-5xl">Jumpstart your career aspirations.</h1>
        <LinkButton content="Start your journey with Silicon" href="#" />
      </div>
    </motion.div>
  )
}

const Panel3 = (): JSX.Element => {
  // const { scrollYProgress } = useScroll();
  // const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  // const spring = useSpring(0)

  return (
    <motion.div className="z-10 h-[75vh] md:h-screen w-screen flex flex-col-reverse md:flex-row bg-black">
      <div className="md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center">
        <h1 className="md:text-7xl text-white text-center text-5xl">Compute. Connect. Innovate.</h1>
        <LinkButton content="Learn about our mission" href="ssahacks" />
      </div>
      <div className="md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <div className='md:h-1/2 w-3/4 md:w-full flex items-center justify-center'>
          <Image src="/panel3.jpg" width={800} height={0} alt="dude laughing"></Image>
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  return ( 
    <>
      <Navbar current="Home" />
      <Intro />
      <Panel1 />
      <Panel2 />
      <Panel3 />
      <Footer />
   </>
  )
}
