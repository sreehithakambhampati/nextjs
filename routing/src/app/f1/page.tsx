import Link from "next/link"
export default function f1Page(){
    return(
        <>
        <h1>F1 page</h1>
        <Link href={"/f1/f2"}>F2</Link>
        <Link href={"/f3"}>F3</Link>

        </>
    )
}