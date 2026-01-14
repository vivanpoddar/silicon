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
          muted
          autoPlay
          playsInline
          loop
          preload="auto"
          disablePictureInPicture
          poster="/background.png"
          className="absolute w-full h-full z-0 object-cover"
        >
          <source src="https://github.com/vivanpoddar/silicon/raw/refs/heads/main/public/videoplayback.mp4" type="video/mp4" />
        </video>
        <div className="absolute w-full h-full z-1 bg-gradient-to-t from-black"></div>
        <div className='z-10'>
            <div className="gap-8 flex flex-col items-center justify-center text-center rounded-lg p-6 max-w-6xl mx-auto">
              <motion.h1 
                className="font-bold text-white text-xl md:text-8xl leading-tight"
                initial={{ opacity: 0  }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Silicon League
              </motion.h1>
              <div>
              <motion.h2
                className="text-white text-xl md:text-4xl italic tracking-wide"
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Compete. Compute. Connect.
              </motion.h2>
              <motion.h2
                className="text-white text-xl text-bold tracking-wide"
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                15 locations. 2000+ students. 1 global championship.
              </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-4"
              >
                <Image
                  src="/image.png"
                  alt="Silicon"
                  width={120}
                  height={12}
                  className="opacity-90"
                />
              </motion.div>
            </div>
        </div>
        <div className="hidden md:block md:absolute md:bottom-0 mb-8 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 text-white rounded animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </>
  )
}

const Panel1 = (): JSX.Element => {
  return (
    <motion.div className="z-10 gap-20 md:h-[100vh] w-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-black via-black to-gray-800 relative overflow-hidden">
      <motion.div 
        className="absolute top-10 -left-32 w-[500px] h-[500px] bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none z-0"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.3, 0.4, 0.25, 0.3],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-blue-500 opacity-20 rounded-full blur-2xl pointer-events-none z-0"
        animate={{
          x: [0, -25, 35, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.8, 1.2, 1],
          opacity: [0.2, 0.35, 0.15, 0.2],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 left-1/4 w-4 h-4 bg-purple-400 rounded-full blur-sm opacity-70 pointer-events-none z-0"
        animate={{
          y: [0, -100, 50, 0],
          x: [0, 30, -20, 0],
          opacity: [0.7, 0.9, 0.4, 0.7],
          scale: [1, 1.5, 0.8, 1],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-300 rounded-full blur-3xl opacity-60 pointer-events-none z-0"
        animate={{
          y: [0, 80, -40, 0],
          x: [0, -40, 25, 0],
          opacity: [0.6, 0.8, 0.3, 0.6],
          scale: [1, 2, 0.5, 1],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3,
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/6 w-5 h-5 bg-gradient-to-r from-purple-400 blur-xl to-blue-400 rounded-full opacity-50 pointer-events-none z-0"
        animate={{
          y: [0, -120, 60, 0],
          x: [0, 45, -30, 0],
          opacity: [0.5, 0.8, 0.2, 0.5],
          rotate: [0, 360, 180, 0],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      <motion.div 
        className="absolute top-1/4 right-1/5 w-6 h-6 bg-cyan-400 rounded-full blur-xl opacity-40 pointer-events-none z-0 shadow-lg shadow-cyan-400/50"
        animate={{
          y: [0, 90, -50, 0],
          x: [0, -35, 40, 0],
          opacity: [0.4, 0.7, 0.1, 0.4],
          scale: [1, 0.6, 1.8, 1],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 5,
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-purple-500 rounded-full blur-xl opacity-55 pointer-events-none z-0 shadow-md shadow-purple-500/40"
        animate={{
          y: [0, -70, 40, 0],
          x: [0, 50, -25, 0],
          opacity: [0.55, 0.85, 0.25, 0.55],
          scale: [1, 1.4, 0.7, 1],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 14,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 7,
        }}
      />
      <motion.div 
        className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full opacity-65 pointer-events-none z-0 shadow-sm shadow-blue-500/60"
        animate={{
          y: [0, -60, 30, 0],
          x: [0, -20, 35, 0],
          opacity: [0.65, 0.9, 0.3, 0.65],
          scale: [1, 2.2, 0.4, 1],
        }}
        transition={{
          duration: 16,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />
      
      <motion.div 
        className="absolute top-1/6 left-2/3 w-12 h-12 bg-purple-400 rounded-full blur-2xl opacity-50 pointer-events-none z-0"
        animate={{
          y: [0, -100, 60, 0],
          x: [0, 80, -50, 0],
          opacity: [0.5, 0.8, 0.2, 0.5],
          scale: [1, 2.5, 0.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      <motion.div 
        className="absolute bottom-1/8 left-1/2 w-14 h-14 bg-cyan-500 rounded-full blur-3xl opacity-35 pointer-events-none z-0"
        animate={{
          y: [0, 90, -70, 0],
          x: [0, -60, 100, 0],
          opacity: [0.35, 0.7, 0.15, 0.35],
          scale: [1, 0.4, 3, 1],
        }}
        transition={{
          duration: 28,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 5,
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/8 w-10 h-10 bg-blue-600 rounded-full blur-xl opacity-60 pointer-events-none z-0"
        animate={{
          y: [0, -120, 40, 0],
          x: [0, 30, -90, 0],
          opacity: [0.6, 0.9, 0.25, 0.6],
          scale: [1, 1.8, 0.5, 1],
          rotate: [0, -270, 0],
        }}
        transition={{
          duration: 24,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3,
        }}
      />
      <motion.div 
        className="absolute top-5/6 left-1/8 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full blur-lg opacity-55 pointer-events-none z-0"
        animate={{
          y: [0, 50, -110, 0],
          x: [0, 110, -40, 0],
          opacity: [0.55, 0.85, 0.2, 0.55],
          scale: [1, 0.6, 2.2, 1],
        }}
        transition={{
          duration: 32,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 7,
        }}
      />
      
      <div className="flex-1 flex items-center justify-center relative z-10 py-12 md:py-0">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-700/40">
          <Image src="/hackathonpres.jpg" width={500} height={400} alt="dude laughing" className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" priority={false} />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-16 py-12 md:py-0 relative z-10">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight drop-shadow-lg">
              How it works
            </h1>
            <div className="flex justify-center">
              <span className="inline-block w-24 h-px bg-white" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/60 p-6 sm:p-8 rounded-2xl border border-gray-700/60 shadow-xl backdrop-blur-md">
            <div className="flex items-center space-x-4 text-white text-lg md:text-xl font-semibold justify-center mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Passion</span>
              <span className="text-gray-400">→</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Regional Dominance</span>
              <span className="text-gray-400">→</span>
              <span className="bg-gray-900 px-3 py-1 rounded-full text-sm">World Stage</span>
            </div>
            <p className='text-gray-200 text-lg sm:text-xl leading-relaxed text-center'>
              There&apos;s DECA, there&apos;s NSDA, there&apos;s HOSA, but where are the competitions for national and global-level high school Computer Science? The Silicon League is the <span className="font-semibold text-white">first-ever global hackathon tournament</span> designed exclusively for high school students. It&apos;s your chance to compete against the world&apos;s brightest young minds and launch your tech career before you even graduate.
            </p>
          </div>
          <div className="text-center ">
            <div className="inline-block drop-shadow-lg">
              <LinkButton content="Join the Silicon League" href="/join" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Panel2 = (): JSX.Element => {
  return (
    <motion.div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 overflow-hidden py-12 md:py-0">
      <motion.div 
        className="absolute top-10 right-10 w-[350px] h-[350px] bg-blue-300 opacity-25 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -25, 0],
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.25, 0.4, 0.15, 0.25],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-200 opacity-20 rounded-full blur-2xl pointer-events-none"
        animate={{
          x: [0, 35, -30, 0],
          y: [0, -20, 40, 0],
          scale: [1, 0.9, 1.3, 1],
          opacity: [0.2, 0.3, 0.1, 0.2],
        }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3,
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 left-1/5 w-2 h-2 bg-blue-400 rounded-full blur-sm opacity-60 pointer-events-none"
        animate={{
          scale: [1, 1.8, 0.3, 1],
          opacity: [0.6, 0.9, 0.2, 0.6],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-1/2 right-1/5 w-3 h-3 bg-purple-300 rounded-full blur-sm opacity-40 pointer-events-none"
        animate={{
          y: [0, -20, 15, 0],
          x: [0, 15, -10, 0],
          scale: [1, 0.5, 2, 1],
          opacity: [0.4, 0.7, 0.1, 0.4],
        }}
        transition={{
          duration: 14,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1.5,
        }}
      />
        <motion.div 
          className="absolute top-1/4 left-1/3 w-16 h-16 bg-blue-200 rounded-full blur-3xl opacity-40 pointer-events-none"
          animate={{
            y: [0, -90, 50, 0],
            x: [0, 60, -40, 0],
            opacity: [0.4, 0.7, 0.2, 0.4],
            scale: [1, 2.2, 0.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 26,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-purple-150 rounded-full blur-2xl opacity-35 pointer-events-none"
          animate={{
            y: [0, 70, -60, 0],
            x: [0, -50, 80, 0],
            opacity: [0.35, 0.6, 0.15, 0.35],
            scale: [1, 0.5, 2.8, 1],
          }}
          transition={{
            duration: 22,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 4,
          }}
        />
        <motion.div 
          className="absolute top-2/3 left-1/6 w-10 h-10 bg-cyan-200 rounded-full blur-xl opacity-50 pointer-events-none"
          animate={{
            y: [0, -90, 30, 0],
            x: [0, 40, -70, 0],
            opacity: [0.5, 0.8, 0.25, 0.5],
            scale: [1, 1.6, 0.6, 1],
            rotate: [0, -270, 0],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div 
          className="absolute top-1/6 right-1/3 w-14 h-14 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-2xl opacity-30 pointer-events-none"
          animate={{
            y: [0, 55, -85, 0],
            x: [0, -75, 45, 0],
            opacity: [0.3, 0.55, 0.1, 0.3],
            scale: [1, 3, 0.3, 1],
          }}
          transition={{
            duration: 30,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 6,
          }}
        />
        <motion.div 
          className="absolute bottom-1/6 left-1/2 w-8 h-8 bg-indigo-200 rounded-full blur-lg opacity-45 pointer-events-none"
          animate={{
            y: [0, 45, -100, 0],
            x: [0, 90, -35, 0],
            opacity: [0.45, 0.75, 0.2, 0.45],
            scale: [1, 0.7, 2.4, 1],
            rotate: [0, 360, 180],
          }}
          transition={{
            duration: 24,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3,
          }}
        />
        
        <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-8 md:py-0 z-10 order-2 md:order-1">
        <div className="max-w-2xl w-full mx-auto space-y-8">
          <div className="text-left space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Why participate?
          </h1>
          <span className="block w-20 h-px bg-gray-900 mt-2" />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-gray-100/90 p-6 rounded-2xl border border-gray-300 shadow-md">
            <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
          For hackathon organizers
            </h3>
            <ul className="space-y-2 text-gray-700 text-base list-disc pl-6">
          <li>
            Connect with a global network of hackathons and developers
          </li>
          <li>
            Get access to templates, guides, mentorship, and best practices
          </li>
          <li>
            Get marketing and sponsorship outreach for your hackathon 
          </li>
          <li>
            Get involved in the leadership of the global championship.
          </li>
          <p>
            What do we want in return? <strong>Nominate your top winners to our global championship.</strong>
          </p>
            </ul>
          </div>
          <div className="flex-1 bg-white/90 p-6 rounded-2xl border border-gray-200 shadow-md">
            <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
          For students
            </h3>
            <ul className="space-y-2 text-gray-700 text-base list-disc pl-6">
          <li>
            College applications that <strong>stand out</strong> with the portfolios you build through hackathons.
          </li>
          <li>
            Exclusive <strong>scholarship opportunities</strong> and university partnerships
          </li>
          <li>
            Mentorship from industry leaders at <strong>Amazon, Microsoft, CMU, and Bay Area startups</strong>
          </li>
          <li>
            Meet a global network of brilliant peers passionate about technology
          </li>
            </ul>
          </div>
          </div>
          <div className="text-center">
          <LinkButton content="Full benefits list? Contact our team" href="/contact" />
          </div>
        </div>
        </div>
      <div className="flex-1 flex items-center justify-center z-10 order-1 md:order-2 py-8 md:py-0">
      <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-gray-200/60 bg-white/70">
        <Image
        src="/academix.jpg"
        width={480}
        height={380}
        alt="Students collaborating"
        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        priority={false}
        />
      </div>
      </div>
    </motion.div>
  )
}

const Panel3 = (): JSX.Element => {
  return (
    <motion.div className="z-10 w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-gray-900 relative overflow-hidden py-12">
      <motion.div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500 opacity-20 rounded-full blur-3xl pointer-events-none z-0"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 0.7, 1.4, 1],
          opacity: [0.2, 0.35, 0.1, 0.2],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-700 opacity-20 rounded-full blur-2xl pointer-events-none z-0"
        animate={{
          x: [0, -45, 25, 0],
          y: [0, 35, -30, 0],
          scale: [1, 1.3, 0.6, 1],
          opacity: [0.2, 0.3, 0.15, 0.2],
        }}
        transition={{
          duration: 17,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4,
        }}
      />
      
      <motion.div 
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-300 rounded-full blur-sm opacity-25 pointer-events-none z-0"
        animate={{
          y: [0, -60, 40, 0],
          x: [0, 35, -25, 0],
          opacity: [0.25, 0.4, 0.1, 0.25],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-purple-400 rounded-full blur-md opacity-15 pointer-events-none z-0"
        animate={{
          y: [0, 70, -35, 0],
          x: [0, -30, 45, 0],
          scale: [1, 1.5, 0.5, 1],
          opacity: [0.15, 0.3, 0.05, 0.15],
        }}
        transition={{
          duration: 16,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />
      
      <motion.div 
        className="absolute top-1/5 left-1/5 w-18 h-18 bg-cyan-400 rounded-full blur-3xl opacity-45 pointer-events-none z-0"
        animate={{
          y: [0, -110, 70, 0],
          x: [0, 85, -60, 0],
          opacity: [0.45, 0.8, 0.2, 0.45],
          scale: [1, 2.8, 0.3, 1],
          rotate: [0, 270, 0],
        }}
        transition={{
          duration: 32,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      <motion.div 
        className="absolute bottom-1/5 right-1/6 w-16 h-16 bg-purple-500 rounded-full blur-2xl opacity-35 pointer-events-none z-0"
        animate={{
          y: [0, 90, -80, 0],
          x: [0, -70, 95, 0],
          opacity: [0.35, 0.7, 0.15, 0.35],
          scale: [1, 0.4, 3.2, 1],
        }}
        transition={{
          duration: 26,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 5,
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/8 w-12 h-12 bg-teal-400 rounded-full blur-xl opacity-55 pointer-events-none z-0"
        animate={{
          y: [0, -75, 45, 0],
          x: [0, 65, -90, 0],
          opacity: [0.55, 0.9, 0.25, 0.55],
          scale: [1, 1.9, 0.5, 1],
          rotate: [0, -180, 360],
        }}
        transition={{
          duration: 28,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3,
        }}
      />
      <motion.div 
        className="absolute top-3/4 right-1/3 w-20 h-20 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-full blur-3xl opacity-25 pointer-events-none z-0"
        animate={{
          y: [0, 60, -120, 0],
          x: [0, -100, 50, 0],
          opacity: [0.25, 0.6, 0.1, 0.25],
          scale: [1, 3.5, 0.2, 1],
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 7,
        }}
      />
      <motion.div 
        className="absolute top-1/8 right-1/2 w-10 h-10 bg-indigo-400 rounded-full blur-lg opacity-60 pointer-events-none z-0"
        animate={{
          y: [0, 105, -40, 0],
          x: [0, 30, -110, 0],
          opacity: [0.6, 0.95, 0.3, 0.6],
          scale: [1, 0.6, 2.6, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 24,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4,
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-purple-600 rounded-full blur-2xl opacity-40 pointer-events-none z-0"
        animate={{
          y: [0, -85, 55, 0],
          x: [0, 75, -125, 0],
          opacity: [0.4, 0.75, 0.18, 0.4],
          scale: [1, 2.4, 0.4, 1],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 6,
        }}
      />
      
        <div className="w-full flex flex-col items-center z-10 mb-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight drop-shadow-lg text-center">
          What sets hackathons apart?
        </h1>
        <span className="inline-block w-24 h-px bg-white mt-4" />
        <p className="text-gray-300 text-lg sm:text-2xl mt-6 max-w-2xl text-center">
          Want to build real-world skills, make friends, and have fun? Hackathons are the perfect way to do it. We want you to find a new passion in computer science.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full z-10">
        <div className="bg-gray-900/90 p-6 rounded-2xl flex items-center">
          <span className="text-gray-200 text-lg">Challenges designed for <strong>your skill level</strong>—no experience required</span>
        </div>
        <div className="bg-gray-800/90 p-6 rounded-2xl flex items-center">
          <span className="text-gray-200 text-lg">Workshops &amp; mentorship from <strong>industry pros</strong> to help you grow</span>
        </div>
        <div className="bg-gray-900/90 p-6 rounded-2xl flex items-center">
          <span className="text-gray-200 text-lg">Team up with friends or go solo—<strong>everyone belongs</strong></span>
        </div>
        <div className="bg-gray-800/90 p-6 rounded-2xl flex items-center">
          <span className="text-gray-200 text-lg">Beginner tracks, <strong>safe community</strong>, and a focus on learning</span>
        </div>
      </div>
      <div className="text-center pt-10 z-10">
        <div className="inline-block drop-shadow-lg">
          <LinkButton content="See competition details" href="/hackathons" />
        </div>
      </div>
    </motion.div>
  )
}

const Panel4 = (): JSX.Element => {
  return (
    <motion.div className="z-10 gap-20 md:h-[100vh] w-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      <motion.div 
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none z-0"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.4, 0.7, 1],
          opacity: [0.3, 0.45, 0.2, 0.3],
        }}
        transition={{
          duration: 28,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 opacity-20 rounded-full blur-2xl pointer-events-none z-0"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -35, 0],
          scale: [1, 0.8, 1.5, 1],
          opacity: [0.2, 0.4, 0.1, 0.2],
        }}
        transition={{
          duration: 19,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 5,
        }}
      />
      
      <motion.div 
        className="absolute top-1/4 left-1/4 w-22 h-22 bg-purple-400 rounded-full blur-3xl opacity-50 pointer-events-none z-0"
        animate={{
          y: [0, -130, 80, 0],
          x: [0, 100, -70, 0],
          opacity: [0.5, 0.85, 0.25, 0.5],
          scale: [1, 3, 0.3, 1],
          rotate: [0, 360, 180],
        }}
        transition={{
          duration: 40,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/5 w-18 h-18 bg-cyan-500 rounded-full blur-2xl opacity-40 pointer-events-none z-0"
        animate={{
          y: [0, 95, -110, 0],
          x: [0, -80, 120, 0],
          opacity: [0.4, 0.8, 0.15, 0.4],
          scale: [1, 0.4, 3.6, 1],
        }}
        transition={{
          duration: 34,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 6,
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-14 h-14 bg-blue-600 rounded-full blur-xl opacity-60 pointer-events-none z-0"
        animate={{
          y: [0, -65, 85, 0],
          x: [0, 45, -140, 0],
          opacity: [0.6, 0.95, 0.3, 0.6],
          scale: [1, 2.2, 0.4, 1],
          rotate: [0, -270, 0],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      <motion.div 
        className="absolute top-1/6 right-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full blur-2xl opacity-35 pointer-events-none z-0"
        animate={{
          y: [0, 75, -95, 0],
          x: [0, -115, 60, 0],
          opacity: [0.35, 0.7, 0.12, 0.35],
          scale: [1, 4, 0.2, 1],
        }}
        transition={{
          duration: 36,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 8,
        }}
      />
      <motion.div 
        className="absolute bottom-1/6 left-1/3 w-12 h-12 bg-indigo-500 rounded-full blur-lg opacity-55 pointer-events-none z-0"
        animate={{
          y: [0, 110, -50, 0],
          x: [0, 35, -160, 0],
          opacity: [0.55, 0.9, 0.25, 0.55],
          scale: [1, 0.5, 2.8, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 28,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4,
        }}
      />
      
      <div className="flex-1 flex items-center justify-center relative z-10 py-12 md:py-0">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-700/40">
          <Image
            src="/winner.webp"
            width={500}
            height={400}
            alt="Championship community"
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            priority={false}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-16 py-12 md:py-0 relative z-10">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight drop-shadow-lg">
              The Championship Experience
            </h1>
            <div className="flex justify-center">
              <span className="inline-block w-24 h-px bg-white" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/60 p-6 sm:p-8 rounded-2xl border border-gray-700/60 shadow-xl backdrop-blur-md">
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed text-center mb-6">
              Our championship, taking place in May TBA, is a <span className="font-semibold text-white">celebration of young innovation</span> aiming to support the top hackathon competitors. Competitors receive free goodies and will experience <span className="font-semibold text-white">one week of creative coding</span> with industry mentorship, multiple skill tracks, and the chance to compete with the best of the best of high school Computer Science talent.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block drop-shadow-lg">
              <LinkButton content="Find a hackathon near you" href="/hackathons" />
            </div>
          </div>
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