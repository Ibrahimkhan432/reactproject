import React, { useContext } from 'react'
import { NameContext } from '../App'

function Component1() {

  const {name} = useContext(NameContext)
  console.log("name=>",name.name)
  return (
    <div>
      Component1
      <h1>my name is : {name}</h1>
    </div>
  )
}

export default Component1
