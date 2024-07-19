"use client";
import { Header, Menu, ModalWindow } from "@/components";
import styles from "./page.module.scss";
import { Provider } from "react-redux";
import store from "@/store/store";
import Link from "next/link";

export default function CreateNewWaybillPage () {
  return (
    <Provider store={store}>
      <Header />
      <main className={styles.main}>
        <Menu />
        <div className={styles.workspace}>
          
        </div>
      </main>
      <Link
        className={styles.author}
        href="https://github.com/Lugovskoy-Maxim"
        target="_blank"
      >
        © Максим Луговской
      </Link>
      <ModalWindow />
    </Provider>
  );
}