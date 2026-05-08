import React, { useContext } from 'react'
import { NameContext } from '../App'

function Component3() {
    const name = useContext(NameContext)
    console.log("name in c3=>",name)
    console.log("theme in c3=>",name.toggleTheme)
  return (
    <div>
      Component3
<h1>
   my name is : {name} is component 3
  </h1>
    </div>
  )
}

export default Component3
