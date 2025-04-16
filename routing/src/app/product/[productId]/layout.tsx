// React.ReactNode is a TypeScript type used to describe anything that can be rendered by React.
export default function productLayout({
    children
}:{children : React.ReactNode}){
    return(
        <>
          {children}
          <h2>Featured products</h2>
        </>
        

    )
     
}