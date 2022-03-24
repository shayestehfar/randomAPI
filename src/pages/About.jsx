import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
function About() {
  return (
    <>
      <div className='about'>
        <h4>About the project</h4>
        <h2>Code By Mehdi</h2>
        <h2>API : https://randomuser.me/api</h2>
        <Link to='/'>
          <FaHome className='homeFont' />
        </Link>
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
