import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import LinkButton from '../components/linkbutton'
import Footer from '../components/footer'
import Image from 'next/image'

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Intro = (): JSX.Element => {
  return (
    <>
      <motion.div className="h-screen overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          disablePictureInPicture
          className="absolute w-full h-full z-0"
          style={{ objectFit: 'cover' }}
        >
          <source src="https://github.com/vivanpoddar/random-assets/raw/master/video.mp4" type="video/mp4" />
        </video>
        <div className="bg-black rounded-lg p-4 z-10 flex">
          <Link href="/"><h1 className="text-white text-7xl">Welcome to&nbsp;</h1></Link>
          <h1 className="text-7xl text-white font-medium">Silicon</h1>
        </div>
        <div className="absolute bottom-0 mb-8 pt-6 bg-black rounded-lg p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 text-white animate-bounce">
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
    <motion.div className="flex bg-black">
      <div className="w-1/2 flex items-center justify-center">
        <div className="p-24">
          <h1 className="text-7xl text-white">Realize your imagination at SSAHacks.</h1>
          <LinkButton content="Claim your spot at SSAHacks 2023" href="ssahack" />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center relative " style={{ height: '100vh' }}>
        <div className='h-1/2 w-auto'>
          <Image src="/panel1.jpg" width={800} height={720} alt="dude laughing"></Image>
        </div>
      </div>
    </motion.div>
  )
}

const Panel2 = (): JSX.Element => {
  return (
    <motion.div className="flex bg-white">
      <div className="w-1/2 flex items-center justify-center relative" style={{ height: '100vh' }}>
        <div className='h-1/2 w-auto'>
          <Image src="/panel2.jpg" width={800} height={720} alt="dude laughing"></Image>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="p-24">
          <h1 className="text-black text-7xl">Jumpstart your career aspirations.</h1>
          <LinkButton content="Start your journey with Silicon" href="join" />
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
    <motion.div className="bg-black flex">
      <div className="w-1/2 flex items-center justify-center">
        <div className="p-24">
          <h1 className="text-white text-7xl">We make student-led education a reality.</h1>
          <LinkButton content="Learn about Silicon's mission" href="about" />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center relative" style={{ height: '100vh' }}>
        <div className='h-1/2 w-auto'>
          <Image src="/panel3.jpg" width={800} height={720} alt="dude laughing"></Image>
        </div>      
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      <Navbar current="Home"/>
      <Intro/>
      <Panel1/>
      <Panel2/>
      <Panel3/>
      <Footer/>
    </>
  )
}
