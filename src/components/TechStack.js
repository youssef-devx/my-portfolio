import Figma from '../images/figma.png'
import Js from '../images/js.png'
import React from '../images/react.png'
import Nextjs from '../images/nextjs.png'
import Firebase from '../images/firebase.png'
import Tailwindcss from '../images/tailwindcss.png'
import Nodejs from '../images/nodejs.png'
import Expressjs from '../images/expressjs.png'
import Mongodb from '../images/mongodb.png'

export default function TechStack() {
  return (
    <div className="tech-stack-i-use">
      <h3>Tech Stack I use</h3>
      <ul className="tech-stack">
        <span className="border"></span>
        <span className="before"></span>
        <li>
          <img src={Figma.src} alt="figma" />
          <span>Figma</span>
        </li>
        <li>
          <img src={Js.src} alt="javasript" />
          <span>Javascript</span>
        </li>
        <li>
          <img src={React.src} alt="react" />
          <span>React js</span>
        </li>
        <li>
          <img src={Nextjs.src} alt="nextjs" />
          <span>Next js</span>
        </li>
        <li>
          <img src={Firebase.src} alt="firebase" />
          <span>Firebase</span>
        </li>
        <li>
          <img src={Tailwindcss.src} alt="tailwindcss" />
          <span>Tailwind css</span>
        </li>
        <li>
          <img src={Nodejs.src} alt="nodejs" />
          <span>Node js</span>
        </li>
        <li>
          <img src={Expressjs.src} alt="expressjs" />
          <span>Express js</span>
        </li>
        <li>
          <img src={Mongodb.src} alt="mongodb" />
          <span>MongoDB</span>
        </li>
      </ul>
    </div>
  )
}
