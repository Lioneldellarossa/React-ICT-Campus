import Link from "next/link";
import style from "./Post.module.css"

export default function Post( { post }) {
  return (
    <section className={style.section}>
        <ul key={post.id}>
            <li>
                <div className={style.post}>
                    <h1>{post.title}</h1>
                    <p>Createt by {post.username}</p>
                    <p>{post.text}</p>
                    <Link href="">Mer Anzeigen</Link>
                </div>
            </li>
        </ul>
    </section>
  );
}