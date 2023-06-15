import { useState } from 'react'

export default function InfoIcon({ info } : { info: {
  about: string;
  createdAt: string;
} }) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="project-info">
      <svg  onClick={() => setShowInfo(prevVal => !prevVal)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style={{ fill: "#FFFFFF", filter: "drop-shadow(5px 5px 15px #00000040)" }}>
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
      </svg>

      <div className={`project-description ${showInfo ? "visible" : "hidden"}`}>
        <p>{info.about}</p>
      </div>
    </div>
  )
}
