import Head from 'next/head'



export default function Home() {
  return (
    <div className="h-screen bg-slate-400" style={{
      backgroundImage: 'url("/bg.jpeg")',
      backgroundSize:"cover",
      overdlowY:"scroll"
    }} >
      <Head>
        <title>Aman Shukla | Full Stack Developer</title>
        <meta name="description" content="Digital Resume by Aman Shukla powered by Next Js and Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-mono underline">
        Hello world!
      </h1>
    </div>
  )
}
