"use client"
import {useRouter} from "next/navigation"
export default function OrderProduct(){
    const router = useRouter()
    const handleClick=()=>{
           console.log("Order Placed")
           router.push("/")
        //    Sometimes we need to replace entry instead of adding new entry
        //    router.replace("/")
    }
     return(
        <>
             <h1>Order Product</h1>
             <button onClick={handleClick}>Place order</button>

        </>
     )
}