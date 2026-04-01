import Navigation from "./Navigation";
import Image from "next/image";
import style from "./Header.module.css"

export default function Header() {
  return (
    <header>
        <div className={style.header}>
            <Image alt="Logo" src="/logo_campnews.png" width={40} height={40} className={style.img}/>
            <Navigation />
        </div>
    </header>
    
  );
}