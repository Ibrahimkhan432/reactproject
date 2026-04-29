import { useEffect, useReducer, useState } from "react";

function App() {
  
// const  buttonClick = (a,b)=>{
//   console.log("button=>",a+b)
// }



const [data , setData] = useState("ali")
const [count , setCount] = useState(0)

// const [count , setCount] = useReducer(reducer,0)

useEffect(()=>{
  // setTimeout(()=>{
  //   setCount(count + 1)
  // },1000)
  console.log("use effect")
})
useEffect(()=>{
  console.log("use effect with dependency")
},[]) //dependancy
useEffect(()=>{
  console.log("use effect with count")
},[count]) //dependancy

// function reducer(action){
// console.log("action",action)
// if(action.type ==="increment"){
//   setCount(count +1 )
// }
// if(action.type ==="decrement"){
//   setCount(count -1 )
// }
// }


// const  handleChange = (e)=>{
//   setData(e.target.value)
//   console.log("handle change=>",e.target.value)
 
// }

  return <div>
    <h1>THis is heading</h1>
    {/* <button onClick={()=>buttonClick(2,3)}>Click</button> */}
    <br />
    {/* <input type="text" onChange={(e)=>handleChange(e)}  placeholder="enter your name"/> */}
    <h1>{data}</h1>
    <button onClick={()=>setData("bilal")}>click</button>

    <button onClick={()=>setCount(count + 1)}>Increment</button>
    <br />
    <h1>{count}</h1>
    <br />
    <button onClick={()=>setCount(count - 1)}>Decrement</button>
    
  </div>;
}

export default App;

// mounting , update ,unmount