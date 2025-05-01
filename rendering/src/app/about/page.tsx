import { cookies } from "next/headers";

export default async function AboutPage(){
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")
    console.log(theme)
    console.log("About server component")
//     If the component is rendered dynamically (for example, using Server-Side Rendering (SSR) in Next.js), then every time the page is reloaded, it will fetch the latest time from the server, and new Date().toLocaleTimeString() will return the current time.

// But if the page is statically rendered (using Static Site Generation (SSG)), then the time is frozen at build time. That means the time won’t change even after a reload—it will always show the time when the page was built, not when it was visited.
    return <h1>It is about page {new Date().toLocaleTimeString()} </h1>
}