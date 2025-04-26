"use client"
//We get error message as props
export default function ErrorPage({error}:{error:Error}){
    return(
      <h1>{error.message}</h1>
    )
}
