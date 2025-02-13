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
          <source src="https://www.pexels.com/download/video/853919/?fps=25.0&h=1080&w=1920" type="video/mp4" />
        </video>
        <div className='z-10'>
            <div className="gap-20 flex flex-col items-center justify-center text-center rounded-lg p-4">
              <h1 className="italic text-white text-3xl md:text-7xl">Compete. Compute. Connect. </h1>
              <motion.div
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              >
              <Image
                src="/image.png"
                alt="Silicon"
                width={100}
                height={10}
              />
              </motion.div>
            </div>
        </div>
        <div className="hidden md:block md:absolute md:bottom-0 mb-8 md:pt-6 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 text-white rounded animate-bounce">
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
      <div className="md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center px-5 sm:px-20">
        <div>
          <h1 className="md:text-3xl text-white text-lg sm:text-xl">We&apos;re on a mission to bring Computer Science to Pittsburgh schools.</h1>
          <p className='text-gray-500 sm:py-4'>
            Founded by <span className='font-bold'>two high school students</span> in 2023, Silicon started with shady.Hacks, a local hackathon initiative for the schools of Pittsburgh. We saw the issue: a substantial gap of Computer Science interest—<span className='font-bold'>then we found out this wasn&apos;t just a local issue</span>.
          </p>
          <LinkButton content="Claim your spot at shady.Hacks 2025" href="http://localhost:3000/shadyhacks" />
        </div>
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
      <div className="md:w-1/2 md:h-full flex flex-col items-center justify-center px-5 sm:px-20">
        <div>
          <h1 className="md:text-3xl text-lg text-black sm:text-xl">So what&apos;s the deal?</h1>
          <p className='text-gray-500 sm:py-4'>
          In the United States, only 60% of schools offer Computer Science courses. Of the 30 states that mandate CS curriculum, only 5.8% of the student body are enrolled in these classes. By 2030, the U.S. Bureau of Labor Statistics estimates that the CS-related job market will face a shortage of over 1.2 million openings. </p>
          <LinkButton content="Learn more" href="https://www.edtechdigest.com/2023/01/19/whats-wrong-with-todays-cs-education/" />
        </div>
      </div>
    </motion.div>
  )
}

const Panel3 = (): JSX.Element => {
  // const { scrollYProgress } = useScroll();
  // const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  // const spring = useSpring(0)

  return (
    <motion.div className="relative z-10 h-[75vh] md:h-screen w-screen flex flex-col-reverse md:flex-row bg-black">
      <div className="md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center px-5 sm:px-20">
        <div>
          <h1 className="md:text-3xl text-white text-lg sm:text-xl">Let&apos;s break down these barriers.</h1>
          <p className='text-gray-500 sm:py-4'>
            By breaking down these systemic barriers to entry at the high school level, the country can ensure a competitive workforce and population capable of driving technological advancements that uplift entire communities through their progress. </p>
          <LinkButton content="Fill our interest form" href="https://joinsilicon.org/join" />
        </div>
      </div>
      <div className="md:w-1/2  md:h-full flex items-center justify-center">
        <div className='md:h-1/2 w-3/4 md:w-full flex items-center justify-center'>
          <Image src="/panel3.jpg" width={800} height={0} alt="dude laughing"></Image>
        </div>
      </div>
    </motion.div>
  )
}

const Panel4 = (): JSX.Element => {

  return (
    <motion.div className="z-10 h-[75vh] gap-20 md:h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-t from-gray-800 to-black relative">
      <div className=" flex items-center justify-center relative z-10">
        <div className='h-full flex items-center justify-center'>
          <Image src="/community.jpg" width={1000} height={0} alt="dude laughing"></Image>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center px-5 sm:px-20 relative z-10">
        <div>
          <h1 className="sm:text-5xl text-lg text-white">We can&apos;t do this alone.</h1>
          <p className='text-gray-500 sm:text-xl sm:py-4'>
            shady.Hacks, an initiative between both organization and Shady Side Academy, aims to expose Pittsburgh highschool students to Computer Science. However, we need community support to help us further our mission. Donations, enrollment, and volunteering, and all forms of support are central to the idea that we strive to make a reality.
          </p>
          <LinkButton content="Support today" href="https://drive.google.com/file/d/19WojPMk4WdPRvx_JFe4piRdzQWok1blZ/view?usp=sharing" />
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
      <Panel4 />
      <Footer />
   </>
  )
}
