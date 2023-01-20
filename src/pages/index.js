import Head from 'next/head'
import { Inter } from '@next/font/google'
import localFont from '@next/font/local'
import InfoIcon from '@/Icons/InfoIcon'
import GithubIcon from '@/Icons/GithubIcon'
import GoToIcon from '@/Icons/GoToIcon'
import Image1 from "../Images/Image1.png"
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

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
        <header>
          <Link href="/">
            <h3 className={`${logoFont.className} logo`}>DEVX</h3>
          </Link>

          <div className="socials">
            <Link href="https://github.com/youssef-devx">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)" }}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z">
                </path>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/youssef-boulal-0196a21a2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)" }}>
                <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
              </svg>
            </Link>
            <Link href="https://github.com/youssef-devx" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)" }}>
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z">
                </path>
              </svg>
            </Link>
          </div>
        </header>

        <div className='content'>
          <h1>
            Looking for Web Development Collaboration?
            <br />
            Whether you are a business owner or a
            <br />
            developer you are in the right place
          </h1>
          {/* {<Link href="/#contact-me">
            <button className={inter.className}>
              <span className="before"></span>
              <span className="border"></span>
              <span>Contact Me</span>
              <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.866 10.366C21.3443 9.88773 21.3443 9.11227 20.866 8.63397L13.0718 0.839746C12.5935 0.361453 11.818 0.361453 11.3397 0.839746C10.8615 1.31804 10.8615 2.0935 11.3397 2.5718L18.2679 9.5L11.3397 16.4282C10.8615 16.9065 10.8615 17.682 11.3397 18.1603C11.818 18.6385 12.5935 18.6385 13.0718 18.1603L20.866 10.366ZM0 10.7247H20V8.27526H0V10.7247Z" fill="white" />
              </svg> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg> */}
          {/* </button>
          </Link> */
          }
          <div className='scroll-cta'></div>
          <div className="projects">
            <span className="before"></span>
            <span className="border"></span>
            {projects.slice(0, 4).map((project, idx) => (
              <div className="project" key={project.link + idx}>
                <span className="before" style={{ background: `linear-gradient(180deg, ${project.color} 50%, #04212C 100%)` }}></span>
                <span className="project-border"></span>
                <img src={Image1.src} />
                <div className="options">
                  <GoToIcon title={project.link} />
                  <GithubIcon title={project.github} />
                  <InfoIcon title={project.about} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <ContactMe />

        {/* msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1) */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)", transform: "scaleY(-1)", }}>
          <path d="M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.144.206.38.996.591 1.921h-.792v2h8.032v-2h-.79c.213-.927.45-1.719.593-1.925.352-.503.726-.94 1.087-1.363z">
          </path>
        </svg> */}
      </main>
    </>
  )
}
