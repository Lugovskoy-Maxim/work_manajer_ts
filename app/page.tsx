import { Header, Menu, Waybill } from "@/components";
import styles from "./page.module.css";

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
    </>
  );
}
