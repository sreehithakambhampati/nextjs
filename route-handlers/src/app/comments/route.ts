
import {comments} from "./comment"
export async function GET(){
    // Response.json() is a method used to create a Response object that contains JSON data in the body. It is part of the Fetch API and is commonly used in web servers and APIs to return JSON data in response to HTTP requests.
     return Response.json(comments)
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