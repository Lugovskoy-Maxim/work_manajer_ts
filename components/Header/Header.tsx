import styles from "./header.module.scss";
import logo_icon from '../../public/icons/Logo.svg'
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}><Image src={logo_icon} alt={'ТС'} width={40} height={40}/><p>WorkManager</p></div>
      <div className={styles.buttons}>
        <button type="button" className={styles.button}>Синхронизация БД</button>
        <button type="button" className={styles.button}>Выгрузить БД</button>
      </div>
    </header>
  );
}
