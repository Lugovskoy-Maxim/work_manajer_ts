"use client"
import { Navigation } from "@/constants";
import styles from "./menu.module.scss";
import { useState } from "react";


export default function Header() {
  const [currentLang, setLang] = useState<'ru' | 'en'>('ru');


  return (
    <section className={styles.menu}>
      <div className={styles.column}>
        <ul className={styles.list}>
          <li className={`${styles.item} ${styles.active}`}>{Navigation[currentLang].waybills}</li>
          <li className={styles.item}>{Navigation[currentLang].summary}</li>
          <li className={styles.item}>{Navigation[currentLang].vehicles}</li>
          <li className={styles.item}>{Navigation[currentLang].drivers}</li>
          <li className={styles.item}>{Navigation[currentLang].organizations}</li>
          <li className={styles.item}>{Navigation[currentLang].address}</li>
          <li className={styles.item}>{Navigation[currentLang].staff}</li>
        </ul>
      </div>
      <div className={styles.user}>{Navigation[currentLang].profile}</div>
    </section>
  );
}
