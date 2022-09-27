import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import Footer from '../components/Footer'
import Main from '../testFolder/Main'
function Example() {
  // disbale back button
  window.history.pushState(null, null, window.location.href)
  window.onpopstate = function () {
    window.history.go(1)
  }
  // assign a handleSave to the save button of Footer to console.log a message
  const handleSave = () => {
    console.log('Save button clicked')
  }
  return (
    <>
      <Link to='/'>
        <FaHome className='homeFont' />
      </Link>
      <div className='aboutText'>
        <Main />
      </div>
      {/*  create a input element and assign a function to detect tab out */}
      {/* access to save button in Footer */}

      <Footer handleSave={handleSave} />
    </>
  )
}

export default Example
