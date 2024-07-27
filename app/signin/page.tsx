"use client"
import { Footer } from "@/components";
import styles from "./signIn.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import welcome_icon from "../../public/icons/welcome_men.svg";
import logo_min_icon from "../../public/icons/logo_min_icon.svg";
import logo_icon from "../../public/icons/title_maxiApp.svg";

export default function SignIn() {
  const path = usePathname();

  return (
    <>
      <div className={styles.signIn}>
        {/* <header className={styles.header}>
          <Link className={styles.promo} href={"/promo"}>
          <Image src={logo_min_icon} alt={""} width={40} height={40}></Image>
          <Image src={logo_icon} alt={""} width={180} height={40}></Image>
          </Link>
          <div className={styles.nav}>
            <Link href={"/signin"} className={`${path !== '/signin' ? styles.active: styles.disabled}`} aria-disabled={path == '/signin'} > Вход </Link>
            <Link href={"/signup"} className={`${path !== '/signup' ? styles.active : styles.disabled}`} aria-disabled={path == '/signUp'}> Регистрация </Link>
          </div>
        </header> */}
        <div className={styles.wrapper}>
          <div className={styles.leftBlock}>
            <h1 className={styles.title}>С возвращением!</h1>
            <div className={styles.signUp} style={{ display: "flex" }}>
              <p>У вас нет аккаунта? </p>
              <Link href={"/signup"}>Регистрация</Link>
            </div>
            <form className={styles.form}>
              <label>
                E-mail
                <input placeholder="name@mail.ru"></input>
              </label>
              <label>
                Пароль
                <input placeholder="Более 6 символов и 1 спец. знака"></input>
              </label>
              <button type="submit" className={styles.form_button}>
                Вход
              </button>
            </form>
            <button type="button" className={styles.button}>
              Войти используя токен
            </button>
            <p className={styles.reCaptcha}>
              Этот сайт защищен с помощью reCAPTCHA
            </p>
          </div>
          <div className={styles.rightBlock}>
            <Image src={welcome_icon} alt={""} width={466} height={486}></Image>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
