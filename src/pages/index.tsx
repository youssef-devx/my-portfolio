import Head from "next/head";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Preloader from "@/components/Preloader";
import TechStack from "@/components/TechStack";
import PortfolioProjects from "@/components/PortfolioProjects";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [preloading, setPreloading] = useState(true);

  useEffect(() => {
    document.onload = () => {
      setTimeout(() => setPreloading(false), 1500);
    };
    // @ts-ignore
    document.onload();

    return () => (document.onload = null);
  }, []);

  return (
    <>
      <Head>
        <title>Devx | Pre Launch Portfolio</title>
        <meta name="description" content="Devx pre launch portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Preloader show={preloading} />
      {!preloading && (
        <main className={`${inter.className} container`}>
          <Header />

          <div className="content">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              Looking for Web Development Collaboration?
              <br />
              Whether you are a business owner or a
              <br />
              developer you are in the right place
            </motion.h1>
            <motion.div
              className="scroll-cta"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            ></motion.div>
            <PortfolioProjects />
          </div>

          <TechStack />

          {/* <ContactMe /> */}

          {/* Probably add a cool playfull animation by draging a torch at a certain position  */}
        </main>
      )}
    </>
  );
}
