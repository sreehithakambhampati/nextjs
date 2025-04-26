"use client"
//We get error message as props

// If you click "Try Again", it re-renders on the client side.  our page.tsx is a server side component
// But if the problem is still there (like a failed server fetch), the same error happens again.
// Simply re-rendering isn't enough — you need to actually re-fetch fresh data from the server.

// export default function ErrorPage({error,reset}:{error:Error;reset:()=>void}){
//     return(
//       <>
//       <h1>{error.message}</h1>
//       <button onClick={() => reset()}>Try again</button>
      
//       </>


//     )
// }



// router.refresh()----It re-runs the server-side functions (like getServerSideProps, server actions, fetches) and gives you fresh data without reloading the entire site.

import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function ErrorPage({error,reset}:{error:Error;reset:()=>void}){
  const router = useRouter()
  const reload = () => {
    startTransition(()=>{
      router.refresh();
      reset();
    })
  }
  return(
    <>
    <h1>{error.message}</h1>
    <button onClick={reload}>Try again</button>
     
    </>


  )
}


