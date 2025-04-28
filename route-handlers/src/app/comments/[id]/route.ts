import { comments } from "../comment";

export async function GET(request:Request,{params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const comment = comments.find((comment) => comment.id === parseInt(id))
    return Response.json(comment)
}

export async function PATCH(request:Request,{params}:{params:Promise<{id:string}>})
{
    const {id} = await params
    const body = await request.json()
    const {text} = body
    const index = parseInt(id)-1;
    // const index = comments.findIndex((comment)=>comment.id===parseInt(id))
    comments[index].text = text;
    return Response.json(comments[index])
}

export async function DELETE(request:Request,{params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const index = comments.findIndex((comment)=>comment.id===parseInt(id))
    const deletedComment = comments[index]
    // array.splice(startIndex, deleteCount)
    comments.splice(index,1)
    return Response.json(deletedComment)
}
