import Main from "../components/Main"
import Head from 'next/head'
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"



export default function Home() {
 
  return (
    <div className='scrollbar scrollbar-thumb-rose-500' >
      <Head>
        <title>Gonzalo Ferreyra | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills  />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
