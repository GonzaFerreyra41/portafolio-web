import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,401,400&display=swap" rel="stylesheet" /> 
      </Head>
      <body className='h-32 scrollbar scrollbar-track-{#000}' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}