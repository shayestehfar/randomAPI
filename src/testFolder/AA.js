import React, { useContext, useEffect } from 'react'
import { SampleContext } from './Main'

function AA() {
  const context = useContext(SampleContext)

  const testAA = () => {
    console.log('I am from AA')
  }

  useEffect(() => {
    context.setFunctionToBeCalled(() => testAA)
  }, [])

  return <div style={{ border: 'solid 1px black', margin: '20px' }}>AA</div>
}

export default AA
