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

// import {
//   createContext,
//   useContext,
//   useEffect,
//   //  useReducer,
//   useState,
// } from "react";
// import Component1 from "./component/Component1.jsx";
// import Component2 from "./component/Component2.jsx";
// import Component3 from "./component/Component3.jsx";
import Routing from "./route/Routing.jsx";

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

// function App() {
//   const [myName, setMyName] = useState("ibrahim"); //usestate snippet
//   function reducer(action,counter){
//     if(action==="increment"){
//      counter =  counter + 1
//     }
//     if(action==="decrement"){
//      counter =  counter - 1
//     }
//     return counter
//   }

//   const [count, setCount] = useState(0);
//   const [counter, dispatch] = useReducer(reducer,0);

// function handleChange(e){
// setMyName(e.target.value)
// console.log("e",e.target.value)
// }

//   return (
//     <div>
//       <h1>{myName}</h1>
//       <br />
//       <h2>{counter} : {count}</h2>
//       <br />
//       <button
//         onClick={() => setCount(count-1)}
//         style={{ border: "2px solid black" }}
//       >
//         Update
//       </button>
//       <button
//         onClick={() => dispatch("increment")}
//         style={{ border: "2px solid black" }}
//       >
//         increment
//       </button>
//       <button
//         onClick={() => dispatch("decrement")}
//         style={{ border: "2px solid black" }}
//       >
//         decrement
//       </button>
//       <br />

//       <input
//         type="text"
//         placeholder="enter name"
//         onChange={(e) => handleChange(e)}
//       />
//     </div>
//   );
// }
// export default App;

// function App() {
//   const [age, setAge] = useState(0);
//   const [doubleage, setDoubleAge] = useState(0);

//   useEffect(() => {
//   setDoubleAge((doubleage)=>doubleage * 2)
// console.log("use effect")
//   },[age]);

//   return (
//     <div>
//       <h1>My age is {age}</h1>
//       <br />
//       <h1>double age : {doubleage}</h1>
//       <button onClick={() => setAge(age + 2)}>increment</button>
//     </div>
//   );
// }
// export default App;

//  --usecontext

// const MynameContext = createContext();
// function App() {
//   const [myname, setMyname] = useState("ibrahim");
//   return (
//     <MynameContext.Provider value={myname}>
//       <div>
//         <h1>my name is : {myname}</h1>
//         {/* <App2 myname={myname} /> */}
//         <App2/>
//       </div>
//     </MynameContext.Provider>
//   );
// }
// export function App2() {
//   return (
//     <div>
//       <App3 />
//     </div>
//   );
// }
// export function App3() {
// const myname = useContext(MynameContext)
// console.log("usecontext",myname)
//   return (
//     <div>
//       <h1>myname is {myname}</h1>
//     </div>
//   );
// }

// export default App;


// context api (simple global state) / proivers
// redux / zustand (globally complex state) /slices

// export const NameContext = createContext()

// function App(){

//   const [name,setName] = useState("ali")
//   const [theme,setTheme] = useState("light")

// const toggleTheme = ()=>{
//  setTheme(theme === "light" ? "dark" : "light")
// }
//   return(
// <NameContext.Provider value={{name,toggleTheme}}>
//   <div style={{backgroundColor:"red"}}>

//   <Component1/>
//   <Component2/>
//   <Component3/>
//   </div>
// </NameContext.Provider>
//   )
// }
// export default App


//  --- globally usecontext 

function App(){
  return(
<div>
  <Routing/>

</div>
  )
}
export default App;