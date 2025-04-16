export default async function f2({params}:{params : Promise<{pId:string}>})
{
    const pId = (await params).pId;
       
       
    return <h1>Product {pId} details </h1>
}