import { createContext, useEffect, useState } from "react";


export const UserContext = createContext()

function UserProvider({children}){

const [user, setUser] = useState(null)
const [loading,setLoading]=useState(false)

const getUser =async ()=>{
    try {
        if (loading) return <h1> loading....</h1>
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await response.json()
        // console.log("data",data)
        setUser({
            name:data.name,
            username:data.username,
            email:data.email,
        })
    } catch (error) {
        console.log(error.message)
    }
    finally{
        setLoading(false)
    }
}

useEffect(()=>{
    getUser()
},[])


return(
<UserContext.Provider value={{user,setUser,loading}}>
    {children}
</UserContext.Provider>

)
}
export default UserProvider;