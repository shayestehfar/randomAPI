import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const About = () => {
  return (
    <>
      <div className='about'>
        <h4>About the project</h4>
        <h2>Code By Mehdi</h2>
        <h2>API : https://randomuser.me/api</h2>
        <div className='linkSection'>
          <Link
            to='/'
            // target='_blank'
            // rel='noopener noreferrer'
            // onClick={window.close}
            // prevent back button
          >
            <FaHome className='homeFont' />
          </Link>
          <Link to='/example'>
            <h2>Example</h2>
          </Link>
        </div>
        <div className='aboutText'>
          This example project contains use of differnet hooks
          "useState,useCallback,useContext,useEffect" as well as routing via
          react-router-dom.Also it shows the "Toast" element and differnet
          icons. The API fetching is done by "AXIOS" and saves the data in
          "UserContext" and localStorage.Delete function will remove the item
          from localStorage
        </div>
      </div>
    </>
  )
}
export default About
