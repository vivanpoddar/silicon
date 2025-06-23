import Navbar from '@/components/navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="120x120" type='image/x-icon' />
        <link rel="icon" href="/favicon.ico" sizes="120x120" type='image/x-icon' />
        <style>{`
            body {
              font-family: 'Space Grotesk', sans-serif;
            }
          `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
