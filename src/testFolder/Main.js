import React, { createContext, useState } from 'react'
import A from './A'
import B from './B'

export const SampleContext = createContext()
function Main() {
  const [functionToBeCalled, setFunctionToBeCalled] = useState()

  return (
    <SampleContext.Provider
      value={{ functionToBeCalled, setFunctionToBeCalled }}
    >
      <div>
        <A />
        <B />
      </div>
    </SampleContext.Provider>
  )
  // run handlesave function on click event of Component B
}

export default Main
