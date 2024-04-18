'use client';

import { Header, Menu, Waybill } from "@/components";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <main className={styles.main}>
          <Menu />
          <div className={styles.workspace}>
            <Waybill />
          </div>
        </main>
      </Provider>
    </>
  );
}
