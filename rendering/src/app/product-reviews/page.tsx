import Product from "@/components/products";
import Review from "@/components/reviews";
import { Suspense } from "react";
export default async function ProductReview(){
    return(
        <>
        <h1>Product Review</h1>
        <Suspense fallback={<p>Loading product details</p>}>
        <Product/>
        </Suspense>
        
        <Suspense fallback={<p>Loading review details</p>}>
        <Review/>
        </Suspense>
        </>
    )
}