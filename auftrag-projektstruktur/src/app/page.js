import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import style from "./globals.css";
import Header from "@/components/header";


export default function Home() {
  return (

    // Link wird gross geschrieben
    <div className={styles.page}>
    
      <main className={styles.main}>
        <Header />
        
        <h1>Home</h1>
        
        <Link href="/about">about</Link>


      </main>
    </div>
  );
}
