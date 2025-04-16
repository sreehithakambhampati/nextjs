// generateMetadata is used to generate dynamic metadata for routes with changing parameters.
// For instance, this page uses a productId that changes, so we set a different title for each product.

import type { Metadata } from "next";

type Props = {
    params : Promise<{productId:string}>
}

export const generateMetadata = async({params}:Props) :Promise<Metadata> => {
    const id = (await params).productId;
    return{
        title : `Product ${id}`,
    } 

}


export default async function productDetails({params}:Props){
    const productId = (await params).productId;
    return <h1>Details about {productId}</h1>
} 

