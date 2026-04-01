import Image from "next/image";
import styles from "./page.module.css";
import Post from "@/components/Post";
import PostFeedWrapper from "@/components/PostFeedWrapper";
import { PostFeed } from "@/components/PostFeed";

export default function Home() {
  return (
    <main className={styles.boddy}>
      <PostFeedWrapper/>
    </main>
    
  );
}
