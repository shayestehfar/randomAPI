import React from 'react'

function B({ handleClick }) {
  return (
    <div style={{ border: 'solid 1px red', marginBottom: '20px' }}>
      <button
        onClick={handleClick}
        style={{
          border: 'none',
          padding: '20px',
          cursor: 'pointer',
          backgroundColor: 'orange',
          margin: '20px',
        }}
      >
        Click
      </button>
    </div>
  )
}

export default B
