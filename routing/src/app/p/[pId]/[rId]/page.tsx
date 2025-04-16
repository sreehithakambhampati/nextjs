export default async function({params} : {params : Promise<{pId:string,rId:string}>}){
    const {pId,rId} = await params
    return <h1>Review {rId} for Product {pId}</h1>
}