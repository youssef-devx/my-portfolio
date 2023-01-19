import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import localFont from '@next/font/local'
import InfoIcon from '@/Icons/InfoIcon'
import GithubIcon from '@/Icons/GithubIcon'
import SeeIcon from '@/Icons/SeeIcon'
import Image1 from "../Images/Image1.png"
import ContactMe from '@/components/ContactMe'

const inter = Inter({ subsets: ['latin'] })
const logoFont = localFont({ src: '../fonts/skirmisher.ttf' })

export default function Home() {
  const projects = [
    {
      color: "#6767C3",
      link: "#",
      github: "https://github.com/youssef-devx/",
      info: {
        about: 'An API for programming posts.',
        createdAt: new Date().toLocaleDateString(),
      }
    },
    {
      color: "#4EEA9E",
      link: "#",
      github: "https://github.com/youssef-devx/",
      info: {
        about: 'An app that allows people to do something.',
        createdAt: new Date().toLocaleDateString(),
      }
    },
    {
      color: "#6767C3",
      link: "#",
      github: "https://github.com/youssef-devx/",
      info: {
        about: 'An API for programming posts.',
        createdAt: new Date().toLocaleDateString(),
      }
    },
    {
      color: "#4EEA9E",
      link: "#",
      github: "https://github.com/youssef-devx/",
      info: {
        about: 'An app that allows people to do something.',
        createdAt: new Date().toLocaleDateString(),
      }
    }
  ]

  return (
    <>
      <Head>
        <title>Devx | Pre Launch Portfolio</title>
        <meta name="description" content="Devx pre launch portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} container`}>
        <h3 className={`${logoFont.className} logo`}>DEVX</h3>

        <div className='content'>
          <h1>
            Looking for Web Development Collaboration?
            <br />
            Whether you are a business owner or a
            <br />
            developer you are in the right place
          </h1>
          <button className={inter.className}>
            <a href="#contact-me"></a>
            <span className="before"></span>
            <span className="border"></span>
            <span>Contact</span>
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.866 10.366C21.3443 9.88773 21.3443 9.11227 20.866 8.63397L13.0718 0.839746C12.5935 0.361453 11.818 0.361453 11.3397 0.839746C10.8615 1.31804 10.8615 2.0935 11.3397 2.5718L18.2679 9.5L11.3397 16.4282C10.8615 16.9065 10.8615 17.682 11.3397 18.1603C11.818 18.6385 12.5935 18.6385 13.0718 18.1603L20.866 10.366ZM0 10.7247H20V8.27526H0V10.7247Z" fill="white" />
            </svg>
          </button>
          <div className="projects">
            <span className="before"></span>
            <span className="border"></span>
            {projects.slice(0, 4).map((project, idx) => (
              <div className="project" key={project.link + idx}>
                <span className="before" style={{ background: `linear-gradient(180deg, ${project.color} 50%, #04212C 100%)` }}></span>
                <span className="project-border"></span>
                <img src={Image1.src} />
                <div className="options">
                  <SeeIcon title={project.link} />
                  <GithubIcon title={project.github} />
                  <InfoIcon title={project.about} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="coming-soon">
          <hr />
          <hr />
        </div>

        <ContactMe />
      </main>
    </>
  )
}
