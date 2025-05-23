"use server";
import { updateProduct,addProduct, deleteProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export async function createProduct(prevState: FormState, formData: FormData) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const errors: Errors = {};
  if (!title) {
    errors.title = "Title is req";
  }
  if (!price) {
    errors.price = "Price is req";
  }
  if (!description) {
    errors.description = "Description is req";
  }
  if (Object.keys(errors).length > 0) return { errors };
  await addProduct(title, parseInt(price), description);
  redirect("/products-db");
}
export async function editProduct(id:number,prevState: FormState, formData: FormData) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const errors: Errors = {};
  if (!title) {
    errors.title = "Title is req";
  }
  if (!price) {
    errors.price = "Priceis req";
  }
  if (!description) {
    errors.description = "Description is req";
  }
  if (Object.keys(errors).length > 0) return { errors };
  await updateProduct(id,title, parseInt(price), description);
  redirect("/products-db");
}
export async function removeProduct(id:number){
  await deleteProduct(id);
  revalidatePath('/products-db')

}
