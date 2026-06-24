// // const { Component } = require("react");
// // class App extends Component{
// // constructor(){
// //   super()
// // this.state ={
// //   name:"ibrahim",
// //   age:"20",
// // }
// // }
// //   render(){
// //     return(
// // <h1>class app{this.state.age}</h1>
// //     )
// //   }
// // }
// // export default App;

// // import {
// //   createContext,
// //   useContext,
// //   useEffect,
// //   //  useReducer,
// //   useState,
// // } from "react";
// // import Component1 from "./component/Component1.jsx";
// // import Component2 from "./component/Component2.jsx";
// // import Component3 from "./component/Component3.jsx";
// import {
//   // createContext,
//   useContext,
//   useEffect,
//   useReducer,
//   useRef,
//   useState,
//   //  useState
// } from "react";
// // import Component1 from "./component/Component1.jsx";
// // import Component2 from "./component/Component2.jsx";
// // import { ThemeContext } from "./component/ThemeContext.jsx";
// // import Navbar from "./component/global/Navbar.jsx";
// // import Hero from "./component/Hero.jsx";
// // import Hero2 from "./component/Hero2.jsx";
// // import Footer from "./component/global/Footer.jsx";
// // import Routing from "./route/Routing.jsx";

// //  -- withuot usestate function
// // function App() {
// //   // let myName = "ibrahim"
// // function updateValue(){
// //   myName = "updated"
// //   console.log("updated value",myName)
// // }
// // console.log("updated value",myName)
// // function handleChange(abd){
// //   console.log("change",abd.target.value)
// //   myName = abd.target.value
// //   console.log("myname updated=>",myName)
// // }
// //   return (
// //     <div>
// //       <h1>{myName}</h1>
// //       <br />
// //       <br />
// //       <input type="text"  placeholder="enter name" onChange={(abd)=>handleChange(abd)}/>
// //       <button onClick={()=>updateValue()}>Update the name </button>
// //     </div>
// //   );
// // }
// // export default App;

// // create - mount
// // update - update ( didmount)
// // finish - unmount
// // react lifecycle

// // class rendering without lifecycle - hooks
// // usestate - state update
// // usereducer - state (complex logic)

// //   -- usestate function

// // function App() {
// //   const [myName, setMyName] = useState("ibrahim"); //usestate snippet
// //   function reducer(action,counter){
// //     if(action==="increment"){
// //      counter =  counter + 1
// //     }
// //     if(action==="decrement"){
// //      counter =  counter - 1
// //     }
// //     return counter
// //   }

// //   const [count, setCount] = useState(0);
// //   const [counter, dispatch] = useReducer(reducer,0);

// // function handleChange(e){
// // setMyName(e.target.value)
// // console.log("e",e.target.value)
// // }

// //   return (
// //     <div>
// //       <h1>{myName}</h1>
// //       <br />
// //       <h2>{counter} : {count}</h2>
// //       <br />
// //       <button
// //         onClick={() => setCount(count-1)}
// //         style={{ border: "2px solid black" }}
// //       >
// //         Update
// //       </button>
// //       <button
// //         onClick={() => dispatch("increment")}
// //         style={{ border: "2px solid black" }}
// //       >
// //         increment
// //       </button>
// //       <button
// //         onClick={() => dispatch("decrement")}
// //         style={{ border: "2px solid black" }}
// //       >
// //         decrement
// //       </button>
// //       <br />

// //       <input
// //         type="text"
// //         placeholder="enter name"
// //         onChange={(e) => handleChange(e)}
// //       />
// //     </div>
// //   );
// // }
// // export default App;

// // function App() {
// //   const [age, setAge] = useState(0);
// //   const [doubleage, setDoubleAge] = useState(0);

// //   useEffect(() => {
// //   setDoubleAge((doubleage)=>doubleage * 2)
// // console.log("use effect")
// //   },[age]);

// //   return (
// //     <div>
// //       <h1>My age is {age}</h1>
// //       <br />
// //       <h1>double age : {doubleage}</h1>
// //       <button onClick={() => setAge(age + 2)}>increment</button>
// //     </div>
// //   );
// // }
// // export default App;

// //  --usecontext

// // const MynameContext = createContext();
// // function App() {
// //   const [myname, setMyname] = useState("ibrahim");
// //   return (
// //     <MynameContext.Provider value={myname}>
// //       <div>
// //         <h1>my name is : {myname}</h1>
// //         {/* <App2 myname={myname} /> */}
// //         <App2/>
// //       </div>
// //     </MynameContext.Provider>
// //   );
// // }
// // export function App2() {
// //   return (
// //     <div>
// //       <App3 />
// //     </div>
// //   );
// // }
// // export function App3() {
// // const myname = useContext(MynameContext)
// // console.log("usecontext",myname)
// //   return (
// //     <div>
// //       <h1>myname is {myname}</h1>
// //     </div>
// //   );
// // }

// // export default App;

// // context api (simple global state) / proivers
// // redux / zustand (globally complex state) /slices

// // export const NameContext = createContext()

// // function App(){

// //   const [name,setName] = useState("ali")
// //   const [theme,setTheme] = useState("light")

// // const toggleTheme = ()=>{
// //  setTheme(theme === "light" ? "dark" : "light")
// // }
// //   return(
// // <NameContext.Provider value={{name,toggleTheme}}>
// //   <div style={{backgroundColor:"red"}}>

// //   <Component1/>
// //   <Component2/>
// //   <Component3/>
// //   </div>
// // </NameContext.Provider>
// //   )
// // }
// // export default App

// //  --- globally usecontext

// // export const NameContext = createContext()

// // function App() {

// //   const [name,setName] = useState("ali")

// //   return (
// //    <NameContext.Provider value={name}>
// //     <Component1/>
// //     <Component2/>
// //    </NameContext.Provider>
// //   );
// // }
// // export default App;

// // function App() {
//   // const { theme, changeTheme } = useContext(ThemeContext);
//   // const myStyle = {                        //halka   taiz
//   //   backgroundColor: theme === "halka" ? "white" : "red",
//   //   height: "100vh",
//   //   color: theme === "halka" ? "black" : "white",
//   // };

// //   return (
// //     <div>
// //      {/* <Routing/> */}
// //     </div>
// //   );
// // }
// // export default App;


// // -- useRef
// //   safe from re-rendering 
// //  direct access dom without re-rendering
// // persist value 
// // useref => .current (object)

// // -- usememo
// //  --usereducer

// // function App() {


// // const userefValue = useRef()
// // // console.log("useref",userefValue.current.value)
// // const handleText = ()=>{
// //   userefValue.current.value = "text in input field"
// //   userefValue.current.style.backgroundColor="red"
// // }

// // --counter
// // const [counter,setCount] =useState(0)
// // const initcounter = useRef()

// // useEffect(()=>{
// // initcounter.current= counter
// // console.log("eff=>",initcounter.current)
// // },[counter])

// // const initcounter = {
// //   count:0,
// //   id:1,
// //   value:"increment"
// // }

// // const reducer = (state,action)=>{
// // switch(action.type){
// // case "increment"
// // return count + 1
// // case "decrement"
// // return count -1
// // case default
// // return count
// // } 

// // const [count, dispatch] = useReducer(reducer,{count:0}, or initialcounter)



// //   return(
//     // <div>
// {/* <h1 ref={userefValue}>
//   this is heading
// </h1> */}
// {/* <input
// style={{border:"2px solid black"}}
// type="text" ref={userefValue}/>
// <button onClick={handleText}>click</button> */}

// {/* <h1>counter : {counter}</h1>
// <h1>initial value : {initcounter.current}</h1>
// <button onClick={()=>setCount(counter + 1)}>increment</button>
// <button onClick={()=>dispatch("increment")}></button>
// <button onClick={()=>dispatch("decrement")}></button>
//     </div>

//   )
// }
// export default App; */}

// // -- Redux -- 

// // contexapi - builten
// // use when global simple data
// // file - global (provider)
// // multiple pages
// // eg - theme , user , auth , cart , product , ...
// // main - (themeprovider(app)themeprovider)
// // (userprov(app)userprov)
// // (authprov(app)authprov)

// // redux  - npm
// // use when global complex data data
// //store
// //  auth
// // user
// // theme
// // 3 (store , switch , constants , reducers ,action ,state )
// // redux tool kit (RTK)
// // (action,reducer,state)

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {setUser} from './redux/userSlice'
// function App() {
//   const user = useSelector((state) => state.user.user);
//   console.log("user in app=>", user);

// const dispatch = useDispatch()


//  const login = () => {
//     dispatch(setUser({
//       name: "ali",
//       email: "ali@gmail.com",
//       password: 123456,
//     }));
//   };

//   return (
//     <div>
//       app
//       <button onClick={login}>Login</button>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// }

// export default App;

// revision 


// import React from 'react'
// import Button from './components/Button'

// function App(props) {

//   // const title = "my button"
//   return (
//     <div>
//       app
//       <Button
//       title="my title"
//       subtitle="my subtitle"
//       />
//     </div>
//   )
// }

// export default App

// -- hooks

// import React, { useState } from 'react'

// function App() {

// const [myValue,setMyValue] = useState("ibrahim")
//   // var myValue = "ibrahim"
//   const handleUpdate =(e)=>{
//     // myValue = e.target.innerText
//    setMyValue( e.target.innerText)
//     console.log("myvalue=>",myValue)
//   }
//   return (
//     <div>
//       {
//         myValue
//       }
//       <br />
//       <button onClick={(e)=>handleUpdate(e)}>Update value</button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// function App() {
//   const [counter, setCounter] = useState(0)
//   useEffect(()=>{
//     // setTimeout(()=>{
//  setCounter(()=>counter+1)
//     // },1000)
// },[])

//   return (
//     <div>
//       count value : {counter}
//       <br />
//       {/* <button onClick={()=>setCounter(counter + 1)}>increment</button>
//       <button onClick={()=>console.log("wese hi")}>wese hi</button> */}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import User1 from './components/User1'
// import About from './pages/About'

// function App() {

//   return (
//     <div>
//       <User1/>
//       <About/>
//     </div>
//   )
// }

// export default App

// useref

// 1.data from input without  re render
// 2.access DOM directly without re render
// import React, { useEffect, useReducer, useRef, useState } from 'react'

// function App() {

// const [input,setInput] = useState("")
// const [input,setInput] = useReducer(reducer,0)
// const counter = useRef(0)

// useEffect(()=>{
//   counter.current = counter.current +  1

// })
//   return (
//     <div>
//       <input type="text"
//       onChange={(e)=>setInput(e.target.value)}/>
//       counter : {counter.current}
//     </div>
//   )
// }

// export default App

// usecallback

import React, { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [counter, setcounter] = useState(0);
 const [user, setuser] = useState("")
const fetchData = async ()=>{
   const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
  console.log("data=>",data)
}

const handleCounter = useCallback(()=>{
 setcounter(counter + 2)
},[counter])


// usememo
// const userId = user.filrter((userid)=>userid > 5)

// const user = useMemo((userId),[usr])


  return (
    <div>
      counter value is : {counter}
      <br />
      <button onClick={handleCounter}>update</button>
      <ChildComponent fetchData={fetchData} />
    </div>
  );
}

export default App;





