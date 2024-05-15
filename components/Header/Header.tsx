import styles from "./header.module.scss";
import logo_icon from '../../public/icons/Logo.svg'
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={'/'}><Image src={logo_icon} alt={'ТС'} width={40} height={40}/><p>WorkManager</p></Link>
      <div className={styles.buttons}>
        <button type="button" className={styles.button}>Синхронизация БД</button>
        <button type="button" className={styles.button}>Выгрузить БД</button>
      </div>
    </header>
  );
}
