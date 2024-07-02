"use client"
import Head from "next/head"
import { Inter } from "@next/font/google"
import { useEffect, useState } from "react"
import Preloader from "@/components/Preloader"
import TechStack from "@/components/TechStack"
import PortfolioProjects from "@/components/PortfolioProjects"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [preloading, setPreloading] = useState(true)

  // @ts-ignore
  useEffect(() =>  {
    document.onload = () => {
      setTimeout(() => setPreloading(false), 2000)
    }
    // @ts-ignore
    document.onload()

    return () => (document.onload = null)
  }, [])

  return <>
    <Head>
      <title>Devx | Portfolio</title>
      <meta name="google-site-verification" content="gCR7MljD8MbDmiF-iZZ7sYEHCv1pFP-85BVAu7b_eH4" />
      <meta name="description" content="Devx portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Preloader show={preloading} />
    {!preloading && (
      <main className={`${inter.className} container`}>
        <Header />

        <div className="content">
          <h1>
            Looking for Web Development Collaboration?
            <br />
            Whether you are a business owner or a
            <br />
            developer you are in the right place
          </h1>
          <div className="scroll-cta"></div>
          <PortfolioProjects />
        </div>

        <TechStack />

        {/* <ContactMe /> */}
      </main>
    )}
  </>
}
