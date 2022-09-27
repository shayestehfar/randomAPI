import React from 'react'
import A from './A'
import B from './B'
function Main() {
  const middle = () => {
    console.log('I am from B')
  }
  return (
    <div>
      <A />
      <B handleClick={middle} />
    </div>
  )
  // run handlesave function on click event of Component B
}

export default Main
