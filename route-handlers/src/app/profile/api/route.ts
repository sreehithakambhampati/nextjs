import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request : NextRequest) {
    // const headers =new Headers(request.headers);
    // const token = headers.get("Authorization")
    const headersList = await headers()
    const token = headersList.get("Authorization")
    console.log(token)
    
    // If we use return new Response("<h1>User profile</h1>"); in /profile/api, it will simply display the raw HTML as plain text.
    // return new Response("<h1>User profile</h1>");
    
    // However, if we write return new Response("<h1>User profile</h1>", { headers: { "Content-Type": "text/html" } });, the server informs the browser that the response is HTML content.
// As a result, the text is properly rendered as an actual heading (<h1>) on the /profile/api page.
    return new Response("<h1>User profile</h1>",{headers:{"Content-Type" : "text/html"}});
    
    


  }