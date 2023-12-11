import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Image from 'next/image';

export default function App({ Component, pageProps }: AppProps) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight)

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);



  if (windowWidth && windowWidth < 1250 && windowHeight && windowHeight < 1000) {
    return (
      <div className='w-[100vw] h-[100vh] text-xl flex flex-col justify-center items-center'>
        <Image priority={true} src="/image.png" alt="Silicon" width={50} height={50} />
        <span className='pt-4'>Please switch to a desktop view for a better experience.</span>
      </div>
    );
  }
  return <Component {...pageProps} />
}
