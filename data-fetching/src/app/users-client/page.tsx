"use client"
import React from "react"
import { useState,useEffect } from "react"
type User = {
    id : number,
    name : string,
    username : string,
    email : string,
    phone : string
}
export default function UsersClient(){
const[user,setUser] = useState<User[]>([])
const[loading,setLoading] = useState(true)
const[error,setError] = useState("")

useEffect(()=>{
  async function fetchUsers(){
    try{
        console.log("succesful")
       const response = await fetch("https://jsonplaceholder.typicode.com/users");
       if(!response.ok)
        throw new Error("Failed")
      const data = await response.json();
      console.log("succesful")
      setUser(data) 
    }
    catch(err)
    {
        if(err instanceof Error)
            setError(err.message)
        else
           setError("An unknown error occured")

    }
    finally{
        setLoading(false)
    }
  }
   fetchUsers();
 
},[])
if(loading)
    return <h1>Loading data......</h1>
if(error)
    return <h1>error</h1>
return(
     <ul className="space-y-4 p-4">
      {user.map((obj) => (
        <li
          key={obj.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">{obj.name}</div>
          <div className="text-sm">
            <div>Username: {obj.username}</div>
            <div>Email: {obj.email}</div>
            <div>Phone: {obj.phone}</div>
          </div>
        </li>
      ))}
    </ul>
)
}



