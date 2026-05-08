import React from 'react'
import Component3 from './Component3'

function Component2({name}) {
  console.log("name in c2",name)
  return (
    <div>
      Component2  name is {name}
      <Component3 name={name}/>
    </div>
  )
}

export default Component2
