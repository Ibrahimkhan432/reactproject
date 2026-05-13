import React, { useContext } from 'react'
import { NameContext } from '../App'

function Component2() {
  const name=useContext(NameContext)

  return (
    <div>
      comp 2 
      <h1>{name} in comp 2</h1>
    </div>
  )
}

export default Component2
