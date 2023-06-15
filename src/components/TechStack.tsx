import React from 'react'
import Figma from '../images/figma.png'
import Js from '../images/js.png'
import ReactImg from '../images/react.png'
import Nextjs from '../images/nextjs.png'
import Firebase from '../images/firebase.png'
import Tailwindcss from '../images/tailwindcss.png'
import Nodejs from '../images/nodejs.png'
import Expressjs from '../images/expressjs.png'
import Mongodb from '../images/mongodb.png'
import Image from "next/image"

export default function TechStack() {
  return (
    <div className="tech-stack-i-use">
      <h3>Tech Stack I use</h3>
      <ul className="tech-stack">
        <span className="border"></span>
        <span className="before"></span>
        <li>
          <Image src={Figma.src} alt="figma" width={32} height={32} />
          <span>Figma</span>
        </li>
        <li>
          <Image src={Js.src} alt="javasript" width={32} height={32} />
          <span>Javascript</span>
        </li>
        <li>
          <Image src={ReactImg.src} alt="react" width={32} height={32} />
          <span>React js</span>
        </li>
        <li>
          <Image src={Nextjs.src} alt="nextjs" width={32} height={32} />
          <span>Next js</span>
        </li>
        <li>
          <Image src={Firebase.src} alt="firebase" width={32} height={32} />
          <span>Firebase</span>
        </li>
        <li>
          <Image src={Tailwindcss.src} alt="tailwindcss" width={32} height={32} />
          <span>Tailwind css</span>
        </li>
        <li>
          <Image src={Nodejs.src} alt="nodejs" width={32} height={32} />
          <span>Node js</span>
        </li>
        <li>
          <Image src={Expressjs.src} alt="expressjs" width={32} height={32} />
          <span>Express js</span>
        </li>
        <li>
          <Image src={Mongodb.src} alt="mongodb" width={32} height={32} />
          <span>MongoDB</span>
        </li>
      </ul>
    </div>
  )
}
