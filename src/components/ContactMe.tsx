import { Inter } from '@next/font/google'
import React from "react"

const inter = Inter({ subsets: ['latin'] })

export default function ContactMe() {

  function onSend(e: { preventDefault: () => void }) {
    e.preventDefault()
  }

  return <div className='contact-me' id='contact-me'>
      <h2>Contact Me</h2>

      <form onSubmit={onSend}>
        <div className="form-group">
          <label htmlFor="fullname">Full name:</label>
          <div className='input-container'>
            <input required={true} type="text" name='fullname' />
            <span className="before"></span>
            <span className="border"></span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <div className='input-container'>
            <input required={true} type="email" name='email' />
            <span className="before"></span>
            <span className="border"></span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <div className='input-container'>
            <textarea required={true} rows={8} name='description'></textarea>
            <span className="before"></span>
            <span className="border"></span>
          </div>
        </div>
        <button type="submit" className={inter.className} onClick={onSend}>
          <span className="before"></span>
          <span className="border"></span>
          <span style={{ display: "block" }}>Send</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)" }}>
            <path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path>
          </svg>
        </button>
      </form>
    </div>
  
}
