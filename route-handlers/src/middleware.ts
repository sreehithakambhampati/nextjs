// Middleware = Code that runs before serving the page, to control or modify the request dynamically.
// You can write inside individual routes/pages.
// ✅ But Middleware makes it centralized, faster, and automatic — no repetition.

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Redirect:-
// Method 1
// export function middleware(request:NextRequest)
// {

//     return NextResponse.redirect(new URL("/",request.url))

// }
// export const config = {
//     matcher : "/profile"
// }
// Method2:-
// export function middleware(request:NextRequest)
// {
   
//     if(request.nextUrl.pathname==="/profile")
//     {
//           return NextResponse.redirect(new URL("/",request.url))    
//     }
// }
 // .rewrite() changes the response content without changing the visible URL in the browser.

 //Cookies and headers
 export function middleware(request:NextRequest)
 {
    const response = NextResponse.next();
    const themPreference = request.cookies.get("theme")
    if(!themPreference)
    {
        response.cookies.set("theme","dark")
    }
    response.headers.set("custom-header","custom-values")
    return response
 }
 

