"use client";
import { Navigation } from "@/constants";
import styles from "./globalMenu.module.scss";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import category_home_icon from "../../public/icons/category_home_icon.svg";
import category_waybills_icon from "../../public/icons/category_waybills_icon.svg";
import category_vehicles_icon from "../../public/icons/category_vehicles_icon.svg";
import category_organizations_icon from "../../public/icons/category_organizations_icon.svg";
import category_contacts_icon from "../../public/icons/category_contacts_icon.svg";
import category_settings_icon from "../../public/icons/category_settings_icon.svg";

export default function GlobalMenu() {
  const [currentLang, setLang] = useState<"ru" | "en">("ru");
  const pathname = usePathname();

  return (
    <section className={styles.menu}>
      <div className={styles.column}>
        <ul className={styles.list}>
          <li
            className={`${styles.item} ${pathname == "/" ? styles.active : ""}`}
          >
            <Link href={"/"} className={`${styles.item}`}>
              <Image
                src={category_home_icon}
                alt={"Категории"}
                width={35}
                height={35}
                ></Image>
              <span
                className={styles.tooltip}
                data-text="Главная страница"
              ></span>
            </Link>
          </li>
          <li
            className={`${styles.item} ${
              pathname == "/waybills" ? styles.active : ""
            }`}
          >
            <Link href={"/waybills"} className={`${styles.item}`}>
              <Image
                src={category_waybills_icon}
                alt={"Категории"}
                width={36}
                height={36}
              ></Image>
            <span className={styles.tooltip} data-text="Путевые листы"></span>
            </Link>
          </li>
          <li
            className={`${styles.item} ${
              pathname == "/vehicles" ? styles.active : ""
            }`}
          >
            <Link href={"/vehicles"} className={`${styles.item}`}>
              <Image
                src={category_vehicles_icon}
                alt={"Категории"}
                width={35}
                height={35}
              ></Image>
              <span className={styles.tooltip} data-text="Техника"></span>
            </Link>
            
          </li>
          <li
            className={`${styles.item} ${
              pathname == "/organizations" ? styles.active : ""
            }`}
          >
            <Link href={"/organizations"} className={`${styles.item}`}>
              <Image
                src={category_organizations_icon}
                alt={"Категории"}
                width={35}
                height={35}
              ></Image>
            <span className={styles.tooltip} data-text="Организации"></span>
            </Link>
          </li>
          <li
            className={`${styles.item} ${
              pathname == "/contacts" ? styles.active : ""
            }`}
          >
            <Link href={"/contacts"} className={`${styles.item}`}>
              <Image
                src={category_contacts_icon}
                alt={"Категории"}
                width={35}
                height={35}
              ></Image>
            <span className={styles.tooltip} data-text="Контакты"></span>
            </Link>
          </li>
          <li
            className={`${styles.item} ${
              pathname == "/setting" ? styles.active : ""
            }`}
          >
            <Link href={"/setting"} className={`${styles.item}`}>
              <Image
                src={category_settings_icon}
                alt={"Категории"}
                width={35}
                height={35}
              ></Image>
            <span className={styles.tooltip} data-text="Настройки"></span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
