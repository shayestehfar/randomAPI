import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function Example() {
  // disbale back button
  window.history.pushState(null, null, window.location.href)
  window.onpopstate = function () {
    window.history.go(1)
  }

  return (
    <>
      <Link to='/'>
        <FaHome className='homeFont' />
      </Link>
      <div className='aboutText'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum incidunt
        inventore eum nesciunt voluptates maxime rem distinctio, ipsa amet vitae
        labore adipisci cum accusamus ex in excepturi omnis perferendis dolorum!
      </div>
    </>
  )
}

export default Example
