"use client"
import { Submit } from "@/components/Submit";
import { useActionState } from "react";
import { FormState, editProduct } from "@/actions/products";
import type {Product} from "@/app/products-db/page"
export default function EditProductForm({product}:{product:Product}){

    const initialState: FormState = {
    errors: {},
  };
//   You're creating a new function editProductWithId.
// When called (e.g., by a form), it will run editProduct(product.id, formData) — with product.id pre-filled as the first argumen
      const editProductWithId = editProduct.bind(null,product.id);
     const[state,formAction] = useActionState(editProductWithId,initialState);
    
     return(
          <form action={formAction} className="p-4 space-y-4 max-w-96">
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
          defaultValue={product.title}
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
          defaultValue={product.price}
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
          defaultValue={product.description??" "}
        />
      </label>
      {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
     <Submit/>
    </form>
     )
}