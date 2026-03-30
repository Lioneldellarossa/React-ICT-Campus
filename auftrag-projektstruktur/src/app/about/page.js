import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <h1>Abaut</h1>
      </main>
    </div>
  );
}
