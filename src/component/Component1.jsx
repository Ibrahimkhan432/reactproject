import { useContext } from "react";
import { NameContext } from "../App";

function Component1(){

const name = useContext(NameContext)
console.log("name=>",name)
  return(
<div>
  comp 1
  <h1>{name}</h1>
</div>
  )
}
export default Component1;