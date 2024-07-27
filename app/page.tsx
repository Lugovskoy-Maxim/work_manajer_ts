"use client";
import { Footer } from "@/components";
import { Provider } from "react-redux";
import store from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import logo_min_icon from "../public/icons/logo_min_icon.svg";
import logo_icon from "../public/icons/title_maxiApp.svg";

export default function Home() {
  return (
    <Provider store={store}>
      <div style={{ display: `flex`, flexDirection: `column`, width: `100%` }}>
        <header className={styles.header}>
          <Link className={styles.promo} href={"/promo"}>
            <Image src={logo_min_icon} alt={""} width={40} height={40}></Image>
            <Image src={logo_icon} alt={""} width={180} height={40}></Image>
          </Link>
          <div className={styles.nav}>
            <Link href={"/signin"}> Вход </Link>
            <Link href={"/signup"}> Регистрация </Link>
          </div>
        </header>
        <main className={styles.main}>
          <section className={styles.invite}>
            <h1>
              Корпоративное web - приложение для современных транспортных команд
            </h1>
            <Link href={"./signup"}>Начать использовать</Link>
          </section>
          <section className={styles.target}>
            <div className={styles.left}>
              <h2>Всё в одном</h2>
              <p>Полный пакет инструментов собран в едином приложении</p>
            </div>
            <div className={styles.right}>
              <ul>
                <li>Аналитика</li>
                <li>Путевые листы</li>
                <li>Удобная база знаний</li>
                <li>Менеджер задач</li>
                <li>Мессенджер</li>
              </ul>
            </div>
          </section>
          <section className={styles.spec}>
            <h2>Подходит крупному и малому бизнесу</h2>
            <div style={{ display: "flex", gap: "30px" }}>
              <div className={styles.left}>
                <h3>Для крупного бизнеса</h3>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </div>
              <div className={styles.right}>
                <h3>Для малого бизнеса</h3>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </div>
            </div>
          </section>
          <section className={styles.roadmap}>
            <h2>Чем дальше - тем лучше!</h2>
            <p>Большие планы по развитию</p>
            <p>Роадмап:</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </section>
          <section className={styles.action}>
            <h2>Попробуй приложение в деле</h2>

            <Link href={"./signup"}>Начать использовать</Link>
          </section>
          <Footer />
        </main>
      </div>
    </Provider>
  );
}
