import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {


  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-8">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> Turbo
          </h1>
          <AuthShowcase />
        </div>
      </main>
    </>
  )
}

export default Home

const AuthShowcase: React.FC = () => {


  return (
    <div className="flex flex-col items-center justify-center gap-4">
    </div>
  )
}
