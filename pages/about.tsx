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
      <motion.div className="h-screen w-screen flex flex-col bg-black items-center justify-center relative overflow-hidden">
        <video
          autoPlay
          playsInline
          muted
          loop
          disablePictureInPicture
          className="absolute w-full h-full z-0 object-cover opacity-70"
        >
          <source src="https://github.com/vivanpoddar/silicon/raw/refs/heads/main/public/videoplayback.mp4" type="video/mp4" />
        </video>
        <div className="absolute w-full h-full z-1 bg-gradient-to-t from-black via-black/50"></div>
        <div className='z-10 max-w-6xl mx-auto px-6'>
            <div className="gap-16 flex flex-col items-center justify-center text-center">
              <motion.h1 
                className="font-light tracking-tight text-white text-4xl sm:text-6xl md:text-8xl leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Compete. <br className="md:hidden" />Compute. <br className="md:hidden" />Connect.
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  src="/image.png"
                  alt="Silicon"
                  width={120}
                  height={120}
                  className="drop-shadow-2xl"
                />
              </motion.div>
            </div>
        </div>
        <motion.div 
          className="hidden md:block absolute bottom-12 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10 text-white/70 animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </>
  )
}

const Panel1 = (): JSX.Element => {
  return (
    <motion.div 
      className="z-10 min-h-screen w-screen flex flex-col-reverse md:flex-row bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/2 flex flex-col items-center justify-center px-8 sm:px-16 lg:px-24 py-16 md:py-0">
        <motion.div 
          className="max-w-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">
            We&apos;re on a mission to bring Computer Science to American schools.
          </h1>
          <p className='text-gray-400 text-base sm:text-lg leading-relaxed mb-8'>
            Founded by <span className='text-white font-semibold'>two high school students</span> in 2023, Silicon started with shady.Hacks, a local hackathon initiative for the schools of Pittsburgh. We saw the issue: a substantial gap of Computer Science interest—<span className='text-white font-semibold'>then we found out this wasn&apos;t just a local issue</span>.
          </p>
          <LinkButton content="Claim your spot at shady.Hacks 2025" href="http://localhost:3000/shadyhacks" />
        </motion.div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-12">
        <motion.div 
          className='w-full max-w-2xl'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image src="/panel1.jpg" width={800} height={600} alt="Student collaboration" className="rounded-2xl shadow-2xl" />
        </motion.div>
      </div>
    </motion.div>
  )
}

const Panel2 = (): JSX.Element => {

  return (
    <motion.div 
      className="z-10 min-h-screen w-screen flex flex-col md:flex-row bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-12">
        <motion.div 
          className='w-full max-w-2xl'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image src="/panel2.jpg" width={800} height={600} alt="Education statistics" className="rounded-2xl shadow-2xl" />
        </motion.div>
      </div>
      <div className="md:w-1/2 flex flex-col items-center justify-center px-8 sm:px-16 lg:px-24 py-16 md:py-0">
        <motion.div 
          className="max-w-xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black font-light leading-tight mb-6">
            So what&apos;s the deal?
          </h1>
          <p className='text-gray-600 text-base sm:text-lg leading-relaxed mb-8'>
            In the United States, only <span className='text-black font-semibold'>60% of schools</span> offer Computer Science courses. Of the 30 states that mandate CS curriculum, only <span className='text-black font-semibold'>5.8% of the student body</span> are enrolled in these classes. By 2030, the U.S. Bureau of Labor Statistics estimates that the CS-related job market will face a shortage of over <span className='text-black font-semibold'>1.2 million openings</span>.
          </p>
          <LinkButton content="Learn more" href="https://www.edtechdigest.com/2023/01/19/whats-wrong-with-todays-cs-education/" />
        </motion.div>
      </div>
    </motion.div>
  )
}

const Panel3 = (): JSX.Element => {

  return (
    <motion.div 
      className="relative z-10 min-h-screen w-screen flex flex-col-reverse md:flex-row bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/2 flex flex-col items-center justify-center px-8 sm:px-16 lg:px-24 py-16 md:py-0">
        <motion.div 
          className="max-w-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">
            Let&apos;s break down these barriers.
          </h1>
          <p className='text-gray-400 text-base sm:text-lg leading-relaxed mb-8'>
            By breaking down these systemic barriers to entry at the high school level, the country can ensure a competitive workforce and population capable of driving technological advancements that uplift entire communities through their progress.
          </p>
          <LinkButton content="Fill our interest form" href="https://joinsilicon.org/join" />
        </motion.div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-12">
        <motion.div 
          className='w-full max-w-2xl'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image src="/panel3.jpg" width={800} height={600} alt="Breaking barriers" className="rounded-2xl shadow-2xl" />
        </motion.div>
      </div>
    </motion.div>
  )
}

const Panel4 = (): JSX.Element => {

  return (
    <motion.div 
      className="z-10 min-h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-t from-gray-800 to-black relative py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center relative z-10 px-8 mb-12 md:mb-16">
        <motion.div 
          className='w-full max-w-5xl'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image src="/community.jpg" width={1200} height={800} alt="Community collaboration" className="rounded-2xl shadow-2xl" />
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center px-8 sm:px-16 lg:px-24 relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white font-light leading-tight mb-6">
            We can&apos;t do this alone.
          </h1>
          <p className='text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto'>
            We need the support of educators, parents, industry leaders, and passionate individuals like you to help us expand access to Computer Science education. Whether you can offer mentorship, resources, or simply help spread the word, your involvement makes a difference. Join today.
          </p>
          <LinkButton content="Support today" href="https://drive.google.com/file/d/19WojPMk4WdPRvx_JFe4piRdzQWok1blZ/view?usp=sharing" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Home() {
	return (
		<>
			<Navbar current="About" />
			<Panel1 />
			<Panel2 />
			<Panel3 />
			<Panel4 />
			<Footer />
		</>
	)
}