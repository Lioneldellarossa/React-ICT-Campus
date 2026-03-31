"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Counter from "@/components/Counter";
import WordReserver from "@/components/WordReserver";
import ShoppingList from "@/components/ShoppingList";


export default function Home() {

  return (

    <div className={styles.page}>
      <main className={styles.main}>
        <Counter/>
        <WordReserver word="Ich habe einen schönen tag und morgen ist Weihnachten"/>
        <ShoppingList titel="Osterhase"/>
      </main>
    </div>
  );
}
