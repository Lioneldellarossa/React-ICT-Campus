import PostsAPI from "@/lib/api/Posts"
import { PostFeed } from "./PostFeed"

export default async function PostFeedWrapper() {
    const posts = await PostsAPI.readAll()
    return <PostFeed posts={posts} /> 
}
