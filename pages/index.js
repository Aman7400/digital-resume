import { Icon } from '@iconify/react'
import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Resume from '../components/Resume'



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative" style={{
      backgroundImage: 'url("/dark-theme/bg.jpeg")',
      backgroundSize: "cover",
      overflowY: "scroll",
      backgroundPosition: "center",
    }} >
      <Head>
        <title>Aman Shukla | Full Stack Developer</title>
        <meta name="description" content="Digital Resume by Aman Shukla powered by Next Js and Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toolbar />
      <Resume />
      <Footer />
    </div>
  )
}


function Toolbar() {
  const [currentTheme,setCurrentTheme] = React.useState("dark")

  const handleThemeChange = () => {


    setCurrentTheme((prev) => {
      if (prev === 'light') {
        return 'dark'
      } 
      return 'light'
    }) 


  }

  return (
    <div className="absolute right-8 top-8">
      <section onClick={handleThemeChange}>
        <Icon  icon={currentTheme === "light" ? "bxs:sun" : "bxs:moon"} className="text-4xl pointer-events-none cursor-pointer text-white" />
      </section>
    </div>
  )
}