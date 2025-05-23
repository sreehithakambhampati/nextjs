"use client"
import { removeProduct } from "@/actions/products";

import { useOptimistic } from "react";


export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export const ProductDetail=({products}:{products:Product[]}) => {
  
  //First parameter is the initial state that you mant to optimistically update
  //Second parameter - A function that determines how to update state 
 const[optimitsicProducts,setoptimitsicProducts]=useOptimistic(products,(currentProducts,productId)=>{
      return currentProducts.filter((product)=>product.id !=productId)
 })

 //After clicking delete buttom removeProductByID is caled
 //This calls setoptimitsicProducts(productId) it runs the function passed:currentProducts.filter((product)=>product.id !=productId)
 //This creates an optimistic copy of the state (optimitsicProducts) with that product filtered out. 
 
 const removeProductByID = async (productId : number) => {
  setoptimitsicProducts(productId)
  await removeProduct(productId)
 }
  return (
    <ul className="space-y-4 p-4">
      {optimitsicProducts.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <form action={removeProductByID.bind(null,product.id)}>
          <button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Delete
            </button>
            </form>
        </li>
      ))}
    </ul>
  );
}
