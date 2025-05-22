"use client"
import { Submit } from "@/components/Submit";
import { FormState, createProduct } from "@/actions/products";
import { useActionState } from "react";

export default function AddProductsPage(){
  const initialState : FormState = {
    errors:{}
  };
  const[state,formAction,isPending] = useActionState(createProduct,initialState)
       
       return(
         <form action={formAction} className="p-4 space-y-4 max-w-96">
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
        />
      </label>
      {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
        />
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </label>
      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2 text-black border rounded"
          name="description"
        />
      </label>
      {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
     <Submit/>
    </form>
  );
       
}