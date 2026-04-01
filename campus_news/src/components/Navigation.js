import Link from "next/link";
import style from "./Navigation.module.css"

export default function Navigation() {
  return (
    <div className={style.navigation}>
        <p></p>
        <Link href="">Home</Link>
        <Link href="">Profile</Link>
    </div>
  );
}