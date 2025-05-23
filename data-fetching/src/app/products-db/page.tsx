

import { getProducts } from "../../prisma-db";

import { ProductDetail } from "./[id]/product-detail"; 

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();
 


 
  return (
    <ProductDetail products={products}/>
  );
}
