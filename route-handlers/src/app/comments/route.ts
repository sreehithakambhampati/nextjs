
import { NextRequest } from "next/server";
import {comments} from "./comment"
//Query parameter handling
export async function GET(request : NextRequest){
    // Response.json() is a method used to create a Response object that contains JSON data in the body. It is part of the Fetch API and is commonly used in web servers and APIs to return JSON data in response to HTTP requests.
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query")
    const filteredComments = query ? comments.filter((comment)=>comment.text.includes(query)) : comments    

     return Response.json(filteredComments)
}
export async function POST(request:Request){
     const comment = await request.json()
     const newComment = {
        id:comments.length+1,
        text:comment.text,
     }
     comments.push(newComment);
    //  Response constructor expects the body to be text — not an object.
     return new Response(JSON.stringify(newComment),{
        headers : {"Content-Type" : "application/json"},
        status:201
     })

}