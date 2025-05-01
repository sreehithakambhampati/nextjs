export const dynamicParams = false;

// /product/[id] page is rendered dynamically in the beginning
// but when we use generateStaticParams the ids mentioned in the function will be pre rendered as static HTML(SSG) and the remaining routes use fallback behavior
// Fallback:-Renders on initial navigation Then: Caches as static HTML.and does not update on refresh 


export async function generateStaticParams(){
      return [{id : "1"},{id : "2"},{id : "3"}]
}
export default async function ProductId({params} : {params:Promise<{id:string}>}){
    const {id} = await params
    return(
        <h1>Product {id} {new Date().toLocaleTimeString()}</h1>
    )

}

