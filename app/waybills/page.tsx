"use client";
import { Header, ModalWindow, Waybill } from "@/components";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import Link from "next/link";
import GlobalMenu from "@/components/GlobalMenu/GlobalMenu";

export default function Index() {
  return (
    <Provider store={store}>
      <GlobalMenu/>
      <main className={styles.main}>
      <Header />
        <div className={styles.workspace}>
          <Waybill />
        </div>
      </main>
      {/* <Link
        className={styles.author}
        href="https://github.com/Lugovskoy-Maxim"
        target="_blank"
      >
        © Максим Луговской
      </Link> */}
      <ModalWindow />
    </Provider>
  );
}
