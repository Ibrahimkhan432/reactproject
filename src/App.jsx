// const { Component } = require("react");
// class App extends Component{
// constructor(){
//   super()
// this.state ={
//   name:"ibrahim",
//   age:"20",
// }
// }
//   render(){
//     return(
// <h1>class app{this.state.age}</h1>
//     )
//   }
// }
// export default App;

import { useReducer, useState } from "react";

//  -- withuot usestate function
// function App() {
//   // let myName = "ibrahim"
// function updateValue(){
//   myName = "updated"
//   console.log("updated value",myName)
// }
// console.log("updated value",myName)
// function handleChange(abd){
//   console.log("change",abd.target.value)
//   myName = abd.target.value
//   console.log("myname updated=>",myName)
// }
//   return (
//     <div>
//       <h1>{myName}</h1>
//       <br />
//       <br />
//       <input type="text"  placeholder="enter name" onChange={(abd)=>handleChange(abd)}/>
//       <button onClick={()=>updateValue()}>Update the name </button>
//     </div>
//   );
// }
// export default App;

// create - mount
// update - update ( didmount)
// finish - unmount
// react lifecycle

// class rendering without lifecycle - hooks
// usestate - state update
// usereducer - state (complex logic)

//   -- usestate function

function App() {
  const [myName, setMyName] = useState("ibrahim");
  
  function reducer(action,counter){
    if(action==="increment"){
     counter =  counter + 1
    }
    if(action==="decrement"){
     counter =  counter - 1
    }
    return counter
  }
  
  const [count, setCount] = useState(0);
  const [counter, dispatch] = useReducer(reducer,0);

function handleChange(e){
setMyName(e.target.value)
console.log("e",e.target.value)
}

  return (
    <div>
      <h1>{myName}</h1>
      <br />
      <h2>{counter} : {count}</h2>
      <br />
      <button
        onClick={() => setCount(count-1)}
        style={{ border: "2px solid black" }}
      >
        Update
      </button>
      <button
        onClick={() => dispatch("increment")}
        style={{ border: "2px solid black" }}
      >
        increment 
      </button>
      <button
        onClick={() => dispatch("decrement")}
        style={{ border: "2px solid black" }}
      >
        decrement
      </button>
      <br />

      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
export default App;
