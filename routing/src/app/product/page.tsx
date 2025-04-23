import Link from "next/link"
export default function product(){
    const prodId = 100;
    return(
       <>
        <Link href="/">Home</Link>
       <h1>Product List</h1>
       <h2 ><Link href="/product/1">Product 1</Link></h2>
       <h2 ><Link href="/product/2">Product 2</Link></h2>
       <h2 ><Link href="/product/3" replace>Product 3</Link></h2>
       {/* //Dynamic link */}
       {/* The `replace` prop in Next.js prevents adding a new entry to the browser history. It replaces the current page, so the back button won’t return to the previous one. */}
       <h2 ><Link href={`/product/${prodId}`}>Product {prodId}</Link></h2>
       </>
    )
}