import React, { useContext } from 'react'
import { SampleContext } from './Main'

function B({ handleClick }) {
  const context = useContext(SampleContext)

  return (
    <div style={{ border: 'solid 1px red', marginBottom: '20px' }}>
      <button
        onClick={context.functionToBeCalled}
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
