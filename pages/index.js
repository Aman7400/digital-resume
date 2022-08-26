import Head from 'next/head'
import Footer from '../components/Footer'
import Resume from '../components/Resume'



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center" style={{
      backgroundImage: 'url("/bg.jpeg")',
      backgroundSize:"cover",
      overflowY:"scroll"
    }} >
      <Head>
        <title>Aman Shukla | Full Stack Developer</title>
        <meta name="description" content="Digital Resume by Aman Shukla powered by Next Js and Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Resume />
     <Footer/>
    </div>
  )
}
