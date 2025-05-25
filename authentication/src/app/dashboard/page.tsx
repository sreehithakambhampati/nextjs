import { auth,currentUser } from "@clerk/nextjs/server"
export default async function Dashboard(){
    const authData = await auth();
    const userData = await currentUser();
    console.log(authData);
    console.log(userData);
    <h1>Dashboard</h1>
}