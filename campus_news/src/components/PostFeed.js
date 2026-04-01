"use client"

import Link from "next/link"
import style from "./PostFeed.module.css"
import Post from "./Post"

/**
 * Displaying all posts. Must be client site because of user interaction formular
 */
export function PostFeed({ posts }) {
    
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}
