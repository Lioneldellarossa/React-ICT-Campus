import styles from "./page.module.css";

// IndexPage ist eine Funktion, die JSX returned
// Wir nennen solch eine Funktion einen React Component
export default function Home() {
    return (
        <div className={styles.home}>
            <h1>Home</h1>
        </div>
    );
}

// next.js ruft unsere Funktion (unseren Component) auf und zeigt das generierte HTML unter http://localhost:3000/ an.