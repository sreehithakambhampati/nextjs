// CATCH ALL SEGMENTS
//If the url is  http://localhost:3000/docs/concept1/feature1 we will use two folders concept and feature
//But if we want deeper paths like http://localhost:3000/docs/concept1/feature1/example1 -- we need to add one more folder named example
//To avoid this we use catch all segments --------- This allows you to capture all URL segments beyond a certain point into a single array value — no need for separate folders for each level.
export  default async function docs({params}:{params : Promise<{slug:string[]}>}){
    const {slug} = await params;
    if(slug?.length==2)
    {
        return (
            <h1>Viewing docs for feature {slug[0]} for concept {slug[1]} </h1>
        )
    }
    else if(slug?.length==1)
    {
        return (
            <h1>Viewing docs for feature {slug[0]} </h1>
        )
    }
    return <h1>Docs home page</h1>
}

// [[...slug]] is an optional catch-all route, meaning:
// It can capture multiple segments in the URL.
// It can also be empty, meaning /docs will still work.
// If your file is [...slug] instead of [[...slug]], visiting /docs will give an error.

