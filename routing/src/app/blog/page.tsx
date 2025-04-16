export const metadata={

    // default: Used for pages that don’t have their own title. This acts as the fallback title.
// template: Adds extra text before or after the title on all pages (like a prefix or suffix).
// absolute: Sets a fixed title for a page. It stops the layout from changing or adding to the title using the template.

    title:{
        absolute:"Blog"
    }
    
}

export default function blog()
{
    return <h1>Blog</h1>
}