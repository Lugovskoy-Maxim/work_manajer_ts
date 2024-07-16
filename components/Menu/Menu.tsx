"use client";
import { Navigation } from "@/constants";
import styles from "./menu.module.scss";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const [currentLang, setLang] = useState<"ru" | "en">("ru");
  const pathname = usePathname();

  return (
    <section className={styles.menu}>
      <div className={styles.column}>
        <ul className={styles.list}>
          <li
            className={`${styles.item} ${
              pathname == "/waybills" || "/" ? styles.active : ""
            }`}
          >
            <Link href={"/waybills"}>{Navigation[currentLang].waybills}</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/waybills"}>{Navigation[currentLang].summary}</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/vehicles"}>{Navigation[currentLang].vehicles}</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/drivers"}>{Navigation[currentLang].drivers}</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/organizations"}>
              {Navigation[currentLang].organizations}
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={"/address"}>{Navigation[currentLang].address}</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/staff"}>
              {Navigation[currentLang].staff}
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.user}>
        <Link href={"/profile"}>{Navigation[currentLang].profile}</Link>
      </div>
    </section>
  );
}
