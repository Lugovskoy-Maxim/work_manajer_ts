import { Header, Menu, Waybill } from "@/components";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Menu/>
        <div className={styles.workspace}>
          <Waybill/>
        </div>
      </main>
      <Link className={styles.author} href='https://github.com/Lugovskoy-Maxim' target="_blank">© Максим Луговской</Link>
    </>
  );
}
