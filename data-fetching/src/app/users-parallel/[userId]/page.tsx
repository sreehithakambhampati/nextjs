// when using parallel (concurrent) data fetching, if both API calls take 1 second each, the total wait time is just 1 second. But in sequential fetching, where one request waits for the other to complete, the total wait time becomes 2 seconds. So, parallel fetching is more efficient for performance.


type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

async function getUsersPosts(userId : string)
{
  await new Promise((resolve)=>setTimeout(resolve,1000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return response.json();
}
async function getUsersAlbums(userId:string)
{
  await new Promise((resolve)=>setTimeout(resolve,1000));
     const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    return response.json();
}
export default async function Page({params} : {params : Promise<{userId:string}>}){
    const {userId} = await params
     const albumData = getUsersAlbums(userId);
     const postsData = getUsersPosts(userId);
     //If we use `await` separately for `getUsersAlbums` and `getUsersPosts`, each call waits for the previous one to finish, increasing total wait time. But by using `Promise.all`, both requests run in parallel, reducing the overall time. This is the key optimization.
    
     const[posts,albums] =await Promise.all([postsData,albumData]);
     return(
        <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <div className="space-y-4">
            {posts.map((post: Post) => (
              <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Albums</h2>
          <div className="space-y-4">
            {albums.map((album: Album) => (
              <div key={album.id} className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-700">{album.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
     




}