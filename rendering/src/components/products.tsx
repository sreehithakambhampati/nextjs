export default async function Product(){
    await new Promise((resolve) => setTimeout(resolve,20000));
    return(
        <h1>Productss</h1>
    )
}