// Footer component with two buttons for save and cancel buttons

import React from 'react'
import './footer.css'

// style Footer component

function Footer({ handleSave }) {
  return (
    <div className='footer'>
      <button className='saveButton' onClick={handleSave}>
        Save
      </button>
      <button className='cancelButton'>Cancel</button>
    </div>
  )
}

export default Footer
