"use client";
import { Footer, Header, ModalWindow } from "@/components";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <div style={{ display: `flex`, flexDirection: `column`, width: `100%` }}>
        {/* <GlobalMenu/> */}
        <main className={styles.main}>
          <Header />
          <div className={styles.workspace}></div>
        </main>
        <Footer />
        <ModalWindow />
      </div>
    </Provider>
  );
}
